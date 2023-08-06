'use client'
import React, { useEffect, useState } from "react"
import Link from "next/link"
import axios from "axios"

export default function Details() {
    const [responseData, setResponseData] = useState(null);
    const [plan,setPlan] = useState('dummy');
    const [devices,setDevices] = useState('dummy+dummy');
    const [price,setPrice] = useState('dummy');

    const token = JSON.parse(localStorage.getItem('authorization')); 
    console.log(token);
    useEffect(() => {
        apiCaller();
    },[]);
    const apiCaller = async () => {
        // e.preventDefault();
        try{
            const response = await axios.get("https://richpanel-apis.onrender.com/api/subscribe/subscriptionDetails", {
                headers: {
                  authorization: token,
                },
            });
            console.log(response.data);

            // setResponseData(response);
            // setDevices(response);
            // setPlan(response);
            // setPrice(response);
        
            
        } catch (err) {
            console.error(err);
            console.error('Error calling API:', err.message);
          }
}


  return (
    <div className="bg-[#2B4C8C] flex min-h-screen justify-center items-center flex-col">
        <div className="bg-white rounded-lg p-4">
            <div className="flex flex-row justify-between">
                <div>Current Plan Details</div>
                <div className="text-xs text-[#2B4CBC]">Cancel</div>
            </div>

            <div className="mt-6 text-sm">
                {plan}
            </div>
            <div className="text-xs mb-2 text-gray-500">
                {devices}
            </div>
            <div className="text-4xl font-medium">
                ₹{price}<span className="font-light">/yr</span>
            </div>
            <Link href="plans" >
                <button className="border border-blue-500 text-[#2B4C8C] py-2 px-4 rounded-lg mt-4">
                    Change Plan
                </button>
            </Link>
            <div className="bg-[#F5F5F7] mt-4 p-4 w-[600px]">
                Your subscription has started on Jul 11th, 2022 and will auto renew on Jul 12th, 2023.
            </div>
        </div>

    </div>

  )
}
