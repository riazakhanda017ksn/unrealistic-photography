import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement } from '@stripe/react-stripe-js';
import SimpleCardForm from './SimpleCardForm';

const stripePromise = loadStripe('pk_test_51Ie2ESEWPNeHpTcOcYGgiAyzLn1dWKuMJCypcmUUPkW012cElnHSOpLYEhBmHOQMiE1WGscgo5D7QIWBdM2XqZu500UJpVv7mL');



const ProcessPayment = ({ handlePayment }) => {
    return (
        <Elements stripe={stripePromise}>

            <SimpleCardForm handlePayment={handlePayment}></SimpleCardForm>
        </Elements>
    );
};

export default ProcessPayment;
