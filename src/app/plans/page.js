'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import { headers } from "../../../next.config";

const data = []
    /*{
        id:"1",
        type:"Mobile",
        cost:"100",
        quality:"Good",
        resolution:"480p",
        devices1:"Phone",
        devices2:"Tablet",
        devices3:"",
        devices4:""
    },
    {
        id:"2",
        type:"Basic",
        cost:"200",
        quality:"Good",
        resolution:"480p",
        devices1:"Phone",
        devices2:"Tablet",
        devices3:"Computer",
        devices4:"TV"
    },
    {
        id:"3",
        type:"Standard",
        cost:"500",
        quality:"Better",
        resolution:"1080p",
        devices1:"Phone",
        devices2:"Tablet",
        devices3:"Computer",
        devices4:"TV"
    },
    {
        id:"4",
        type:"Premium",
        cost:"700",
        quality:"Best",
        resolution:"4K+HDR",
        devices1:"Phone",
        devices2:"Tablet",
        devices3:"Computer",
        devices4:"TV"
    },
]*/

export default function Home() {

    const [selectedButton, setSelectedButton] = useState('');
    const [monthlyColor,setMonthlyColor] = useState('white');
    const [monthlyTextColor,setMonthlyTextColor] = useState('#2B4C8C');
    const [yearlyColor,setYearlyColor] = useState('');
    const [yearlyTextColor,setYearlyTextColor] = useState('#ffffff');
    const [selectPayment,setSelectPayment]=useState('');
    const handlePlanTypeMonthly = () => {
        setMonthlyColor("#ffffff");
        setYearlyColor("#2B4C8C");
        setMonthlyTextColor("#2B4C8C");
        setYearlyTextColor("#ffffff");

        console.log("Monthly");
    }

    const handlePlanTypeYearly = () => {
        setMonthlyColor("#2B4C8C");
        setYearlyColor("#ffffff");
        setMonthlyTextColor("#ffffff");
        setYearlyTextColor("#2B4C8C");
        console.log("Yearly");
    }
    const handleButtonClick = (id) => {
        setSelectedButton(id);
        
      };

        const token = JSON.parse(localStorage.getItem('authorization'));
        const [responseData, setResponseData] = useState(data);
        useEffect(() => {
            handleMonthlyButtonClick();
        },[]);
      
        const handleMonthlyButtonClick = async () => {
          try {
            const response = await axios.get('https://richpanel-apis.onrender.com/api/plan/getplans', {
                headers: {
                    authorization: token,
                },
            });
            // const monthlyArray = []
            // const yearlyArray = []
            // console.log("1")
            setResponseData(response.data.plans);
            // for(let i=0;i<response.data.plans.length;i++){
            //     if(response.data.plans[i].planfrequency=='Monthly'){
            //         monthlyArray.push(response.data.plans[i])
            //     }else{
            //         yearlyArray.push(response.data.plans[i])
            //     }
            // }
            // console.log(monthlyArray)
          } catch (error) {
            console.error('Error calling API:', error.message);
          }
        };



    return(
        <div className="min-h-screen flex justify-center ">
            <div className="flex justify-center items-center flex-col">
                <div className="mb-8 text-xl font-semibold">Choose the right plan for you</div>
                <div className="flex flex-row "> 
                    <div className="text-xs flex flex-col w-[250px]">
                        <div className="py-3 bg-white">
                            <div className="flex flex-row bg-[#2B4C8C] gap-3 px-2 py-3 rounded-3xl w-[150px]">
                                <div style={{backgroundColor:monthlyColor, color:monthlyTextColor}} className="transition ease-in-out delay-150 duration-300 px-2 py-2 rounded-3xl font-medium"><button onClick={handlePlanTypeMonthly || handleMonthlyButtonClick}>Monthly</button></div>
                                <div style={{backgroundColor:yearlyColor, color:yearlyTextColor}} className="transition ease-in-out delay-150 duration-300 px-3 py-2 rounded-3xl text-white font-medium"><button onClick={handlePlanTypeYearly}>Yearly</button></div>
                                {/* <button onClick={handleSetYearly}>{yearly ? 'Yearly':'Monthly'}</button> */}
                            </div>
                        </div>

                        <div className="flex ml-4 mt-10">
                            Monthly Price
                        </div>
                        <hr className="w-full my-4 "/>
                        <div className="flex ml-4 ">
                            Video Quality
                        </div>
                        <hr className="w-full my-4"/>
                        <div className="flex ml-4">
                            Resolution
                        </div>
                        <hr className="w-full my-4"/>
                        <div className="flex ml-4">
                            Devices you can use to watch
                        </div>
                    </div>
                    
                    
                    {responseData.map((item) => (

                        
                        <div key={item.id} className="text-xs flex flex-col w-[100px]">

                                <button key={item.id} onClick={()=>handleButtonClick(item.id)}
                                className={`text-white px-4 py-8 text-center w-[80px] ${
                                    selectedButton === item.id ? 'bg-[#2B4C8C]' : 'bg-[#7E93BA]'
                                  }`}>
                                    {item.type}
                                </button>

                            <div className="flex ml-4 mt-10">
                                ₹ {item.cost}
                            </div>
                            <hr className="w-full my-4"/>
                            <div className="flex ml-4">
                                {item.quality}
                            </div>
                            <hr className="w-full my-4"/>
                            <div className="flex ml-4">
                                {item.resolution}
                            </div>
                            <hr className="w-full my-4"/>
                            <div className="flex ml-4">
                                {item.devices1}
                            </div>
                            <div className="flex ml-4 mt-6">
                                {item.devices2}
                            </div>
                            <div className="flex ml-4 mt-6">
                                {item.devices3}
                            </div>
                            <div className="flex ml-4 mt-6">
                                {item.devices4}
                            </div>
                        </div>
                    ))}
                </div>
                <Link href="payment" className="mt-10 px-[125px] py-2 bg-[#2B4C8C] text-white rounded-sm">
                    <button>Next</button>
                </Link>


            </div>
            {/* <PlanDetails />             */}
            
        </div>
    )
}