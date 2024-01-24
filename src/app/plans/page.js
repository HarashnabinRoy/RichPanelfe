'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import { headers } from "../../../next.config";
import Loading from "@/components/shared/loader";

const data = []

export default function Home() {

    
    const [monthlyColor,setMonthlyColor] = useState('white');
    const [monthlyTextColor,setMonthlyTextColor] = useState('#2B4C8C');
    const [yearlyColor,setYearlyColor] = useState('');
    const [yearlyTextColor,setYearlyTextColor] = useState('#ffffff');
    // const [selectPayment,setSelectPayment]=useState(''); 
    const [selectedButton, setSelectedButton] = useState(''); //Plan ID
    let [selectedPlan,setSelectedPlan]=useState('Monthly'); //Monthly Yearly
    const [price,setPrice] = useState('');
    const [type,setType] = useState('');
    // const [yearlyPlan,setYearlyPlan] = useState('');
    // const [monthlyPlan,setMonthlyPlan] = useState('');
    const [loading, setLoading] = useState(false);
    
    const handleSelectedPlanMonthly =() =>{
        selectedPlan = "Monthly"
        setSelectedPlan('Monthly')
    }
    const handleSelectedPlanYearly = () => {
        selectedPlan = "Yearly"
        setSelectedPlan('Yearly')

    }

    const handlePlanTypeMonthly = () => {
        setMonthlyColor("#ffffff");
        setYearlyColor("#2B4C8C");
        setMonthlyTextColor("#2B4C8C");
        setYearlyTextColor("#ffffff");
    }

    const handlePlanTypeYearly = () => {
        setMonthlyColor("#2B4C8C");
        setYearlyColor("#ffffff");
        setMonthlyTextColor("#ffffff");
        setYearlyTextColor("#2B4C8C");
    }

    console.log(selectedPlan);
    
    const handleButtonClick = (id,price,type) => {
        setSelectedButton(id);
        setPrice(price);
        setType(type);
    };
    // console.log(selectedButton);
    // console.log(price);
    // console.log(type);
    let token;
    if (typeof window !== 'undefined') {
      token = JSON.parse(localStorage.getItem('authorization')); 
    }
        // const token = JSON.parse(localStorage.getItem('authorization'));
        const [responseData, setResponseData] = useState(data);
        useEffect(() => {
            handleMonthlyButtonClick();
        },[2]);
      
        const handleMonthlyButtonClick = async () => {
          try {
            setLoading(true);
            const response = await axios.get('https://richpanelbe-production.up.railway.app/api/plan/getplans', {
                headers: {
                    authorization: token,
                },
            });
            if(selectedPlan === 'Monthly') {
                setResponseData(response.data.plans.monthlyPlans);
            } else {
                setResponseData(response.data.plans.yearlyPlans);
            }
            setLoading(false);
            // setMonthlyPlan(response.data.plans.monthlyPlans);
            // setYearlyPlan(response.data.plans.yearlyPlans);

            

          } catch (error) {
            console.error('Error calling API:', error.message);
          }
        };
        // console.log(monthlyPlan,yearlyPlan);

        const handleNexButton = () => {
            localStorage.setItem('planID', selectedButton);
            localStorage.setItem('planType', selectedPlan);
            localStorage.setItem('price', price);
            localStorage.setItem('type', type);
        }



    return(
        <div className="min-h-screen flex justify-center flex-col gap-10">
            {loading && <Loading />}
            <div className="flex justify-center items-center flex-col">
                <div className="mb-8 text-xl font-semibold">Choose the right plan for you</div>
                <div className="flex flex-row "> 
                    <div className="text-xs flex flex-col w-[250px]">
                        <div className="py-3 bg-white">
                            
                            <div className="flex flex-row bg-[#2B4C8C] gap-3 px-2 py-3 rounded-3xl w-[150px]">
                                <div style={{backgroundColor:monthlyColor, color:monthlyTextColor}} className="transition ease-in-out delay-150 duration-300 px-2 py-2 rounded-3xl font-medium"><button onClick={() => {handlePlanTypeMonthly(); handleSelectedPlanMonthly(); handleMonthlyButtonClick();}}>Monthly</button></div>
                                <div style={{backgroundColor:yearlyColor, color:yearlyTextColor}} className="transition ease-in-out delay-150 duration-300 px-3 py-2 rounded-3xl text-white font-medium"><button onClick={() => {handlePlanTypeYearly(); handleSelectedPlanYearly(); handleMonthlyButtonClick();}}>Yearly</button></div>
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
                                
                                <button key={item.id} onClick={()=>handleButtonClick(item.id,item.type,item.cost)}
                                className={`text-white px-4 py-8 text-center w-[80px] ${
                                    selectedButton === item.id ? 'bg-[#2B4C8C]' : 'bg-[#7E93BA]'
                                  }`}>
                                    {item.type}
                                </button>

                            <div className={`flex ml-4 mt-10 ${selectedButton===item.id? 'font-bold text-[#2B4C8C]':'text-black'}`}>
                                ₹ {item.cost}
                            </div>
                            <hr className="w-full my-4"/>
                            <div className={`flex ml-4 ${selectedButton===item.id? 'text-[#2B4C8C] font-bold':'text-black'}`}>
                                {item.quality}
                            </div>
                            <hr className="w-full my-4"/>
                            <div className={`flex ml-4 ${selectedButton===item.id? 'text-[#2B4C8C] font-bold':'text-black'}`}>
                                {item.resolution}
                            </div>
                            <hr className="w-full my-4"/>
                            <div className={`flex ml-4 ${selectedButton===item.id? 'text-[#2B4C8C] font-bold':'text-black'}`}>
                                {item.devices1}
                            </div>
                            <div className={`flex ml-4 mt-6 ${selectedButton===item.id? 'text-[#2B4C8C] font-bold':'text-black'}`}>
                                {item.devices2}
                            </div>
                            <div className={`flex ml-4 mt-6 ${selectedButton===item.id? 'text-[#2B4C8C] font-bold':'text-black'}`}>
                                {item.devices3}
                            </div>
                            <div className={`flex ml-4 mt-6 ${selectedButton===item.id? 'text-[#2B4C8C] font-bold':'text-black'}`}>
                                {item.devices4}
                            </div>
                        </div>
                    ))}
                </div>
                <Link href={`/payment`} className="mt-10 px-[125px] py-2 bg-[#2B4C8C] text-white rounded-sm" onClick={handleNexButton}>
                    <button type="submit">Next</button>
                </Link>


            </div>
        </div>
    )
}