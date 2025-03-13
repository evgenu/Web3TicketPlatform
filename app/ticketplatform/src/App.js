import React from 'react';
import './App.css';
import AboutUs from './pages/AboutUs';
import Homepage from './pages/Homepage';
import Layout from './components/Layout';

function App() {
  return (
        <Layout>
            <Homepage />
            <AboutUs />
        </Layout>
  );
}

export default App;