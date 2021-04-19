import React, { useState } from 'react';
import Footer from '../../Share/Footer/Footer';
import Navbar from '../../Share/Navbar/Navbar';
import BookingData from '../BookingData/BookingData';
import Bookings from '../Bookings/Bookings';
import './Booking.css'
const Booking = () => {

     const[selectedDate,setSelectedDate]=useState(new Date())


    const handleDateChange=date=>{
        setSelectedDate(date)
      }
    return (
        <section>
        <div className='booking-banner'>
         <Navbar></Navbar>
          <div className="container">
           
              <Bookings handleDateChange={handleDateChange}></Bookings>
              <BookingData date={selectedDate}></BookingData>
              
          </div>
        </div>
         <Footer></Footer>
        </section>
    );
};

export default Booking;