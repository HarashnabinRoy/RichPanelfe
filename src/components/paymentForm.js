'use client'
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";


export default function PaymentForm() {

    const stripe = useStripe();
    const elements = useElements();
    const name = "Harashnabin Roy";
    const email = "hello@gmail.com";


    const token = JSON.parse(localStorage.getItem('authorization')); 
    const createSubscription = async () => {
        try {
          const paymentMethod = await stripe.createPaymentMethod({
            card: elements.getElement("card"),
            type: "card",
          });
          console.log(paymentMethod.paymentMethod.id);
          const response = await fetch("https://richpanel-apis.onrender.com/api/subscribe/ok", {
            method: "POST",
            headers: {
              "authorization": token,
              "Content-Type": "application/json",
            },
            
            body: JSON.stringify({

              name,
              email,
              paymentMethod: paymentMethod.paymentMethod.id,
            }),
          });
          if (!response.ok) return alert("Payment unsuccessful!");
          const data = await response.json();
          const confirm = await stripe.confirmCardPayment(data.clientSecret);
          console.log(confirm);
          if (confirm.error) return alert("Payment unsuccessful!");
          alert("Payment Successful! Subscription active.");
        } catch (err) {
          console.error(err);
          alert("Payment failed! " + err.message);
        }
      };


    return(
        <div className="bg-[#2B4C8C] flex min-h-screen justify-center items-center">
            <div className="flex flex-row">
                <div className="flex bg-white p-8 rounded-l-xl flex-col">
                    <div className="text-2xl font-medium">Complete Payment</div>
                    <div className="text-xs mb-8  text-gray-500">Enter your credit or debit card details below</div>
                    {/* <div className="mb-8 flex flex-row border border-gray-500 rounded-md justify-between"> */}
                            <div style={{width:["400px"], marginBottom:"1rem", borderWidth:"1px", padding:"6px", borderRadius:"0.375rem", borderColor: "rgb(107 114 128)"}}>
                                <CardElement />
                            </div>

                    {/* </div> */}
                    <div>
                    {/* <Link href="details"> */}
                        <button
                            className="bg-[#2B4C8C] text-white px-4 py-2 rounded-sm text-[#F5F5F7] text-xs" 
                            onClick={createSubscription}
                            >
                            Confirm Payment
                        </button>
                    {/* </Link> */}

                    </div>
                </div>
                <div className="flex bg-[#F5F5F7] rounded-r-xl p-8 flex-col">
                    <div className="mb-4 text-lg font-medium">Order Summary</div>
                    <div className="flex flex-row justify-between w-[300px] text-sm">
                        <div>Plan Name</div>
                        <div className="font-medium">Basic</div>
                    </div>
                    <hr className="w-full my-2"/>
                    <div className="flex flex-row justify-between w-[300px] text-sm">
                        <div>Billing Cycle</div>
                        <div className="font-medium">Monthly</div>
                    </div>
                    <hr className="w-full my-2"/>
                    <div className="flex flex-row justify-between w-[300px] text-sm">
                        <div>Plan price</div>
                        <div className="font-medium">₹200/mo</div>
                    </div>
                    <hr className="w-full my-2"/>
                </div>
            </div>
            

        </div>
    )
}