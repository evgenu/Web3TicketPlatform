import logo from './logo.svg';
import './App.css';
import './pages/AboutUs'
import AboutUs from './pages/AboutUs';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Layout from './components/Layout';

function App() {
  return (
    <Layout>
        <Homepage></Homepage>
        <AboutUs />
    </Layout>
  );
}

export default App;