'use client'
import React, { useEffect, useState } from "react"
import Link from "next/link"
import axios from "axios"
import Loading from "@/components/shared/loader";

export default function Details() {
    // const [responseData, setResponseData] = useState(null);
    const [plan,setPlan] = useState('');
    const [devices,setDevices] = useState('');
    const [price,setPrice] = useState('');
    const [planType,setPlanType] = useState('');
    const [cancelBgColor,setCancelBgColor] = useState('rgb(187 247 208)');
    const [cancelText,setCancelText] = useState('Active');
    const [cancelTextColor,setCancelTextColor] = useState('')
    const [isCancelButtonDisabled, setIsCancelButtonDisabled] = useState(false);
    const [changePlanButton,setChangePlanButton] = useState('Change Plan');
    const [startDate,setStartDate] = useState('');
    const [endDate,setEndDate] = useState('');
    const [loading, setLoading] = useState(false);

    let token;
    if (typeof window !== 'undefined') {
      token = JSON.parse(localStorage.getItem('authorization')); 
    }
    // const token = JSON.parse(localStorage.getItem('authorization')); 
    // console.log(token);
    useEffect(() => {
        apiCaller();
    },[]);
    const apiCaller = async () => {
        // e.preventDefault();
        try{
            setLoading(true);
            const response = await axios.get("https://richpanelbe-production.up.railway.app/api/subscribe/subscriptionDetails", {
                headers: {
                  authorization: token,
                },
            });
            console.log(response.data.data);

            // setResponseData(response);
            setDevices(response.data.data.DeviceYouCanWatch);
            setPlan(response.data.data.planName);
            setPrice(response.data.data.planPrice);
            setPlanType(response.data.data.planType);
            setStartDate(response.data.data.startDate);
            setEndDate(response.data.data.expiryDate);
            setLoading(false);
        } 
        
        catch (err) {
            console.error(err);
            console.error('Error calling API:', err.message);
          }
    }

    // useEffect(() => {
    //     cancelButtonHandler();
    // },[]);
    const cancelButtonHandler = async () => {
        let token;
        if (typeof window !== 'undefined') {
          token = JSON.parse(localStorage.getItem('authorization')); 
        }
        // const token = JSON.parse(localStorage.getItem('authorization')); 
        console.log(token);
        try{
            setLoading(true);
            const response = await axios.post("https://richpanelbe-production.up.railway.app/api/subscribe/cancelSubscription",{}, {
                headers: {
                  authorization: token,
                },
            });
        setIsCancelButtonDisabled(true);     
        console.log("API CALLED");
        console.log(response);
        setCancelBgColor("rgb(249 240 240");
        setCancelTextColor("rgb(219 140 136");
        setCancelText('Cancelled');
        setChangePlanButton("Choose Plan");
        
        setLoading(false);

        } catch (err) {
            console.error(err);
            console.error('Error calling API:', err.message);
          }
    }



  return (
    <div className="bg-[#2B4C8C] flex min-h-screen justify-center items-center flex-col gap-10">
        {loading && <Loading />}
        <div className="bg-white rounded-lg p-4">
            <div className="flex flex-row justify-between">
                <div>Current Plan Details<span style={{backgroundColor:cancelBgColor, color:cancelTextColor}} className="text-xs ml-4 px-2 py-1 text-green-600 rounded-sm">{cancelText}</span></div>
                <div className="text-xs text-[#2B4CBC]"><button onClick={cancelButtonHandler}>{isCancelButtonDisabled ? '' : 'Cancel'}</button></div>
            </div>

            <div className="mt-6 text-sm">
                {plan}
            </div>
            <div className="text-xs mb-2 text-gray-500">
                {devices}
            </div>
            <div className="text-4xl font-medium">
                ₹{price}<span className="font-light">/{planType}</span>
            </div>
            <Link href="plans" >
                <button className="border border-blue-500 text-[#2B4C8C] py-2 px-4 rounded-lg mt-4">
                    {changePlanButton}
                </button>
            </Link>
            <div className="bg-[#F5F5F7] mt-4 p-4 w-[600px]">
                Your Subscription {isCancelButtonDisabled ? 'has ended' : `has started on ${startDate} and will auto renew on ${endDate}`}.
            </div>
        </div>

    </div>

  )
}
