import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import photo from '../../../images/122801.png'
import photo2 from '../../../images/120738.png'
import photo3 from '../../../images/122804.png'
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import './BookingSendData.css'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import {CardElement} from '@stripe/react-stripe-js';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import { Link } from 'react-router-dom';

const BookingSendData = ({ date }) => {
    const { _id } = useParams()

    const [data, setData] = useState([])
   useEffect(()=>{
       fetch('https://glacial-tundra-14316.herokuapp.com/addService')
       .then(res=>res.json())
       .then(data=>setData(data))
       
   })

   const findResult = data.find(data => data._id ===_id)
    

    const name = findResult?.name;
    const price = findResult?.price;
    
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    // console.log(loggedInUser);
    const [service, setService] = useState([])
    const [info, setInfo] = React.useState({});

    const handleBlur = e => {
        const newInfo = { ...info };
        console.log(e.target.name, e.target.value);
        newInfo[e.target.name] = e.target.value;
        // setInfo(newInfo);
    }
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const newInformation = { ...service, ...loggedInUser }
        // console.log(newInformation)
        data.date=date

    };

    

    const handlePaymentSuccess = (paymentId) => {
        const newInformation = {
            ...loggedInUser,
            name:name,
            price:price,
            paymentId,
            date:new Date(),
            created:new Date()
        }

          console.log('newInformation',newInformation);


         fetch('https://glacial-tundra-14316.herokuapp.com/addServices',{
             method:"POST",
             headers:{'content-type' : 'application/json'},
             body:JSON.stringify(newInformation)
         })
         .then(res=>res.json())
         .then(success=>{
             if(success){
                 alert('data created SuccessFully')
             }
         })
    }


    return (
    <div className="container">
        <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8">
                
        <div className='form-for-order-submit'>
            <form onSubmit={handleSubmit(onSubmit)}>
               
                <div className="form-group">
                    <input  onBlur={handleBlur} type="text"  value={findResult?.name} name="displayName" /> <br/>
                </div>
                <div className="form-group">
                    <input  onBlur={handleBlur} type="text"  value={loggedInUser.email} name="email" /> <br/>
                </div>
                <div className="form-group">
                    <input onBlur={handleBlur} type="text"  value={findResult?.price} name="title" /> <br/>
                </div>
                <div className="the-total-charge">
                <h6>Your Service Charge Will Be ${price}</h6>
                </div>
            </form>

            <div>
                
              <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
            </div>
        </div>
            </div>
            <div className="col-lg-2"></div>
        </div>
    </div>
    );
};

export default BookingSendData;