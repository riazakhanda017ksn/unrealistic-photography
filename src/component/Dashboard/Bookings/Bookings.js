import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Booking.css'

const Bookings = ({handleDateChange}) => {

    return (
        <div className="row">
      <div className="col-lg-6">
         <div className="calender position-relative mt-5 text-center d-flex justify-content-center">
         <Calendar className='border-none mt-5'
        onChange={handleDateChange}
        value={new Date()}
      />
         </div>

      </div>
      <div className="col-lg-6 mg-5">
       <div className="about-date mt-5 text-center">
           <h1 className='py-4'>Select The Date For <span className='text-danger'>Your Order</span> </h1>
           <p>
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores vitae quae quo nemo, quidem laborum quas ex quam necessitatibus tempore exercitationem expedita corporis vel maxime mollitia cumque porro iure cum fugit illo amet sequi, consequatur repudiandae? Maiores tempore voluptate qui?
           </p>

           <div className="button text-left extra-customize">
                           <button>Read More</button>
                            </div>
       </div>
      </div>
      </div>
    );
};

export default Bookings;