'use client'
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";


export default function Payment() {



    return(
        <div className="bg-[#2B4C8C] flex min-h-screen justify-center items-center">
            <div className="flex flex-row">
                <div className="flex bg-white p-8 rounded-l-xl flex-col">
                    <div className="text-2xl font-medium">Complete Payment</div>
                    <div className="text-xs mb-8  text-gray-500">Enter your credit or debit card details below</div>
                    <div className="mb-8 flex flex-row border border-gray-500 rounded-md justify-between">
                        <div className="flex justify-center items-center ml-4">
                        <FontAwesomeIcon icon={faCreditCard} style={{color: "#cacdd3",}} />
                        </div>
                        <input 
                            type="text"
                            className="w-[250px] px-2 py-2 rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Card number"
                        />
                        <input 
                            type="text"
                            className="w-[30px] px-0 py-2 rounded-md text-center focus:outline-none focus:border-blue-500"
                            placeholder="MM"
                        />
                        <span className="flex items-center">/</span>
                        <input 
                            type="text"
                            className="w-[30px] px-0 py-2 rounded-md text-center focus:outline-none focus:border-blue-500"
                            placeholder="YY"
                        />
                         <input 
                            type="text"
                            className="w-[50px] py-2 text-center rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="CVC"
                        />
                    </div>
                    <div>
                    <Link href="details">
                        <button
                            className="bg-[#2B4C8C] text-white px-4 py-2 rounded-sm text-[#F5F5F7] text-xs" 
                            // onClick={handleSignUp}
                            >
                            Confirm Payment
                        </button>
                    </Link>

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