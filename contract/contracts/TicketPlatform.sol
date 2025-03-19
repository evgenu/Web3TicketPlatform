// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

contract TicketPlatform is ERC721Enumerable, Ownable, ReentrancyGuard {
    struct Event {
        uint256 id;
        string name;
        string description;
        uint256 date;
        address payable organizer;
        uint256 ticketCount;
        uint256 ticketSold;
        uint256 ticketPrice;
    }

    uint256 public eventCount;
    mapping(uint256 => Event) public events;
    mapping(uint256 => uint256) public ticketEvent; // Maps ticket ID to event ID

    event EventCreated(
        uint256 indexed eventId,
        string name,
        uint256 date,
        uint256 ticketCount,
        uint256 ticketPrice
    );
    event TicketPurchased(
        uint256 indexed eventId,
        uint256 indexed ticketId,
        address indexed buyer
    );
    event FundsWithdrawn(
        uint256 indexed eventId,
        address indexed organizer,
        uint256 amount
    );

    constructor() ERC721("EventTicket", "ETK") Ownable(msg.sender) {}

    function createEvent(
        string memory _name,
        string memory _description,
        uint256 _date,
        uint256 _ticketCount,
        uint256 _ticketPrice
    ) external {
        require(_date > block.timestamp, "Event date must be in the future");
        require(_ticketCount > 0, "Must have tickets available");
        require(_ticketPrice > 0, "Ticket price must be greater than zero");

        eventCount++;
        events[eventCount] = Event(
            eventCount,
            _name,
            _description,
            _date,
            payable(msg.sender),
            _ticketCount,
            0, // Initial tickets sold
            _ticketPrice
        );

        emit EventCreated(eventCount, _name, _date, _ticketCount, _ticketPrice);
    }

    function buyTicket(uint256 _eventId) external payable nonReentrant {
        Event storage currEvent = events[_eventId];
        require(currEvent.id != 0, "Event does not exist");
        require(
            currEvent.ticketSold < currEvent.ticketCount,
            "No tickets left"
        );
        require(msg.value == currEvent.ticketPrice, "Incorrect ticket price");
        require(block.timestamp < currEvent.date, "Event has already happened");

        uint256 ticketId = totalSupply() + 1; // Unique token ID
        _mint(msg.sender, ticketId);
        ticketEvent[ticketId] = _eventId;
        currEvent.ticketSold++;

        emit TicketPurchased(_eventId, ticketId, msg.sender);
    }

    function withdrawFunds(uint256 _eventId) external nonReentrant {
        Event storage currEvent = events[_eventId];
        require(
            msg.sender == currEvent.organizer,
            "Only organizer can withdraw funds"
        );
        uint256 balance = currEvent.ticketSold * currEvent.ticketPrice;
        require(balance > 0, "No funds to withdraw");

        currEvent.organizer.transfer(balance);

        emit FundsWithdrawn(_eventId, msg.sender, balance);
    }

    function getEventDetails(
        uint256 _eventId
    )
        external
        view
        returns (
            string memory name,
            string memory description,
            uint256 date,
            address organizer,
            uint256 ticketCount,
            uint256 ticketSold,
            uint256 ticketPrice
        )
    {
        Event storage currEvent = events[_eventId];
        return (
            currEvent.name,
            currEvent.description,
            currEvent.date,
            currEvent.organizer,
            currEvent.ticketCount,
            currEvent.ticketSold,
            currEvent.ticketPrice
        );
    }
}
