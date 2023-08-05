'use client'
import React, { useState } from "react";

import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "../../components/paymentForm";
import { loadStripe } from "@stripe/stripe-js";


// export default function Payment() {

    // const stripe = useStripe();
    // const elements = useElements();
    // const createSubscription = async () => {
    //     try{
            
    //     } catch (err) {
    //         console.error(err);
    //         alert("Payment failed, " + err.message);
    //     }
    // }

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
console.log(stripePromise);

export default function Payment() {
    return(
        <div>
            <Elements stripe={stripePromise}>
                <PaymentForm />
            </Elements>
        </div>

    )
}