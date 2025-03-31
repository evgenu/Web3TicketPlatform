import React from 'react';
import aboutStyles from "../styles/AboutUs.module.css"
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={{ margin: '2rem', textAlign: 'center' }}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you requested does not exist.</p>
      <p>Please go to homepage: </p>
      <Link to="/" className={aboutStyles["call-to-action-button"]}>Home</Link>
    </div>
  );
}

export default NotFound;