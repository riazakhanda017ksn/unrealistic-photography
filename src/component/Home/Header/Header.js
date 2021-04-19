import React from 'react';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import Footer from '../../Share/Footer/Footer';
import HomePageLogIn from '../HomePageLogIn/HomePageLogIn';
import Navbar from '../../Share/Navbar/Navbar';
import Professional from '../Professional/Professional';
import Service from '../Service/Service';
import Testomonial from '../Testomial/Testomonial';
import './Header.css'

const Header = () => {
    return (
        <div>
            <section className='banner'>
                < Navbar></Navbar>
                <Banner></Banner>
              
            </section>

            <Service></Service>
            <Professional></Professional>
            <Testomonial></Testomonial>
            <Blog></Blog>
            <HomePageLogIn></HomePageLogIn>
            <Footer></Footer>
        </div>
    );
};

export default Header;