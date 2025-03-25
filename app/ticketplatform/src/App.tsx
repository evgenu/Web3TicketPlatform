import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './pages/AboutUs';
import Homepage from './pages/Homepage';
import Layout from './components/Layout';
import Event from './pages/Event';
import { ContractProvider } from './hooks/contractHook';
import Footer from './components/Footer';
import { UserProvider } from './hooks/userHook';
import DisplayEvent from './pages/DisplayEvent';

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
              <Route path="/events/" element={<Event />} />
              <Route path="/displayEvent" element={<DisplayEvent />} />
            </Routes>
           <Footer />
          </Layout>
         </UserProvider>
      </ContractProvider>
      </Router>
    </>
  );
}

export default App;