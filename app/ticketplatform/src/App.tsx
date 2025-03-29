import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './pages/AboutUs';
import Contacts from './pages/Contacts';
import Homepage from './pages/Homepage';
import FAQ from './pages/FAQ';
import Layout from './components/Layout';
import { ContractProvider } from './hooks/contractHook';
import Footer from './components/Footer';
import { UserProvider } from './hooks/userHook';
import DisplayEvent from './pages/DisplayEvent';
import CreateEvent from './pages/CreateEvent';
import Events from './pages/Events';
import NotFound from './pages/NotFound';
import MyTickets from './pages/MyTickets';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Router>
      <ContractProvider>
        <UserProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/faq" element={<FAQ />} />
              {/* Add more routes as needed */}
              <Route path="/contactUs" element={<Contacts />} />
              {/* <Route path="/events/" element={<Event />} /> */}
              <Route path="/event/:id" element={<DisplayEvent />} />
              <Route path="/events" element={<Events />} />
              <Route path="/createEvent" element={<CreateEvent/>} />
              <Route path="/myTickets" element={<MyTickets/>} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
           <Footer />
         </UserProvider>
      </ContractProvider>
      <ToastContainer
                autoClose={2000}
                closeOnClick
                pauseOnHover
                newestOnTop
                style={{
                    top: '55px'
                }}
            />
      </Router>
    </>
  );
}

export default App;