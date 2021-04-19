import React from 'react';
import BookingSendData from '../BookingSendData/BookingSendData';
import './BookingData.css'

const BookingData = ({date}) => {
    return (
        <div className='text-center booking'>
            <h1>Available Appointment on {date.toDateString()}</h1>

            <BookingSendData date={date}></BookingSendData>
        </div>
    );
};

export default BookingData;