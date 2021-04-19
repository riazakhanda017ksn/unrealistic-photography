import React from 'react';
import Footer from '../../Share/Footer/Footer';
import Navbar from '../../Share/Navbar/Navbar';
import SecondDashboard from '../SecondDashboard/SecondDashboard';
import './Dashboard.css'
const Dashboard = () => {
    return (
          <section>
         <div className="dashboard-banner">
        <Navbar></Navbar>
        <SecondDashboard></SecondDashboard>
            </div>
            <Footer></Footer>
            </section>
    );
};

export default Dashboard;