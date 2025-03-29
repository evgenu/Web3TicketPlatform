import React from 'react';
import FAQstyles from '../styles/FAQ.module.css';
import { Link } from 'react-router-dom';


function FAQ() {
  return (
	<div className={FAQstyles['faq-container']}>
		<h1>Frequently Asked Questions</h1>
		<div className={FAQstyles['faq-components']}>
			<div className={FAQstyles['card-faq-question']}>
				<h1>Q: When did you start this company?</h1>
			</div>
			<div className={FAQstyles['card-faq-answer']}>
				<h1>A: We started in the summer of 1984.</h1>
			</div>

			<div className={FAQstyles['card-faq-question']}>
				<h1>Q: When are your plans for the future?</h1>
			</div>
			<div className={FAQstyles['card-faq-answer']}>
				<h1>A: Make even bigger and better projects.</h1>
			</div>

			<div className={FAQstyles['card-faq-question']}>
				<h1>Q: What is WEB3?</h1>
			</div>
			<div className={FAQstyles['card-faq-answer']}>
				<h1>A: Web3 was an idea for a new iteration of the World Wide Web
					 which incorporates concepts such as decentralization,
					  blockchain technologies, and token-based economics.</h1>
			</div>
			{/* The. button shoult be refactured to lead to the contact page */}
			<Link to="/contactUs" className={FAQstyles["faq-button"]}>
				Ask Your Questions Here
			</Link>
		</div>
	</div>
  );
};

export default FAQ;
