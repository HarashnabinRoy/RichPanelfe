'use client'
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useRouter } from "next/navigation";
import axios from "axios";


export default function PaymentForm() {

    const stripe = useStripe();
    const elements = useElements();
    const router = useRouter();
    let token;
    if (typeof window !== 'undefined') {
      token = JSON.parse(localStorage.getItem('authorization')); 
    }
    
    const createSubscription = async () => {
        try {
          const paymentMethod = await stripe.createPaymentMethod({
            card: elements.getElement("card"),
            type: "card",
          });
          console.log(planID);
          console.log(paymentMethod.paymentMethod.id);
          const data1 = {
            planId: planID,
            paymentMethod: paymentMethod.paymentMethod.id
          };

          const response = await axios.post("https://richpanelbe-production.up.railway.app/api/subscribe/ok", data1, {
            headers: {
              "authorization": token,
            },
          });
          
          console.log("2");
          console.log(response);
          
          console.log(planID);
          if (response.status!=200) return alert("Payment unsuccessful!");
          // const data = await response.data;
          console.log(response.data.clientSecret);
          const confirm = await stripe.confirmCardPayment(response.data.clientSecret);
          
          console.log(confirm);
          if (confirm.error) return alert("Payment unsuccessful!");
          console.log("1");
          console.log(response.data);
          const data2={
            PlanId: planID,
            StripeSubscriptionId: response.data.subscriptionId,
          }

          const res = await axios.post("https://richpanelbe-production.up.railway.app/api/subscribe/paymentSuccess",data2, {
            headers: {
              "authorization": token,
            },
            // body: JSON.stringify({
            //   planId: planID,
            //   StripeSubscriptionId: response.data.subscriptionId,
            // }),
          });
          console.log(res.data);
          if(res.status==201){
            alert("Payment Successful! Subscription active.");
            router.push('/details');
          }


        } catch (err) {
          console.error(err);
          alert("Payment failed! " + err.message);
        }
      };

    const [planName, setPlanName] = useState('');
    const [cycle, setCycle] = useState('');
    const [price, setPrice] = useState('');
    const [planID, setPlanID] = useState('');

    useEffect(() => {
      let token;
      let planID;
      let cycle;
      let price;
      let type;
      if (typeof window !== 'undefined') {
        planID = localStorage.getItem('planID');
        cycle = localStorage.getItem('planType');
        price = localStorage.getItem('price');
        type = localStorage.getItem('type');
        
      }
        setPlanID(planID);
        setCycle(cycle);
        setPrice(price);
        setPlanName(type);
    }, []);

    return(
        <div className="bg-[#2B4C8C] flex min-h-screen justify-center items-center">
            <div className="flex flex-row">
                <div className="flex bg-white p-8 rounded-l-xl flex-col">
                    <div className="text-2xl font-medium">Complete Payment</div>
                    <div className="text-xs mb-8  text-gray-500">Enter your credit or debit card details below</div>
                            <div style={{width:["400px"], marginBottom:"1rem", borderWidth:"1px", padding:"6px", borderRadius:"0.375rem", borderColor: "rgb(107 114 128)"}}>
                                <CardElement />
                            </div>
                    <div>
                        <button
                            className="bg-[#2B4C8C] text-white px-4 py-2 rounded-sm text-[#F5F5F7] text-xs" 
                            onClick={createSubscription}
                            >
                            Confirm Payment
                        </button>

                    </div>
                </div>
                <div className="flex bg-[#F5F5F7] rounded-r-xl p-8 flex-col">
                    <div className="mb-4 text-lg font-medium">Order Summary</div>
                    <div className="flex flex-row justify-between w-[300px] text-sm">
                        <div>Plan Name</div>
                        <div className="font-medium">{price}</div>
                    </div>
                    <hr className="w-full my-2"/>
                    <div className="flex flex-row justify-between w-[300px] text-sm">
                        <div>Billing Cycle</div>
                        <div className="font-medium">{cycle}</div>
                    </div>
                    <hr className="w-full my-2"/>
                    <div className="flex flex-row justify-between w-[300px] text-sm">
                        <div>Plan price</div>
                        <div className="font-medium">₹{planName}/{planName >= 900 ? 'yr' : 'mo' }</div>
                    </div>
                    <hr className="w-full my-2"/>
                </div>
            </div>
            

        </div>
    )
}