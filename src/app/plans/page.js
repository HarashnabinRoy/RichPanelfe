import Link from "next/link";

export default function Home() {
    return(
        <div className="min-h-screen flex justify-center ">
            
            
            <div className="flex justify-center items-center flex-col">
                <div className="mb-8 text-xl font-semibold">Choose the right plan for you</div>



                <div className="flex flex-row ">
                    
                    <div className="text-xs flex flex-col w-[250px]">
                        <div className="py-3 bg-white">
                            <div className="flex flex-row bg-[#2B4C8C] gap-4 px-2 py-3 rounded-3xl w-[150px]">
                                <div className="px-2 py-2 bg-white rounded-3xl text-[#2B4C8C] font-medium">Monthly</div>
                                <div className="px-2 py-2 rounded-3xl text-white font-medium">Yearly</div>
                            </div>
                        </div>

                        <div className="flex ml-4 mt-10">
                            Monthly Price
                        </div>
                        <hr className="w-full my-4"/>
                        <div className="flex ml-4">
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

                    <div className="text-xs flex flex-col w-[100px]">
                        <div className="bg-[#2B4C8C] text-white px-4 py-8 text-center w-[80px]">
                            Mobile
                        </div>
                        <div className="flex ml-4 mt-10">
                            ₹ 100
                        </div>
                        <hr className="w-full my-4"/>
                        <div className="flex ml-4">
                            Good
                        </div>
                        <hr className="w-full my-4"/>
                        <div className="flex ml-4">
                            480p
                        </div>
                        <hr className="w-full my-4"/>
                        <div className="flex ml-4">
                            phone
                        </div>
                        <div className="flex ml-4 mt-4">
                            Tablet
                        </div>
                    </div>

                    <div className="text-xs flex flex-col w-[100px]">
                        <div className="bg-[#2B4C8C] text-white px-4 py-8 text-center w-[80px]">
                            Basic
                        </div>
                        <div className="flex ml-4 mt-10">
                            ₹ 200
                        </div>
                        <hr className="w-full my-4"/>
                        <div className="flex ml-4">
                            Good
                        </div>
                        <hr className="w-full my-4"/>
                        <div className="flex ml-4">
                            480p
                        </div>
                        <hr className="w-full my-4"/>
                        <div className="flex ml-4">
                            phone
                        </div>
                        <div className="flex ml-4 mt-4">
                            Tablet
                        </div>
                        <div className="flex ml-4 mt-4">
                            Computer
                        </div>
                        <div className="flex ml-4 mt-4">
                            TV
                        </div>
                    </div>

                    <div className="text-xs flex flex-col w-[100px]">
                        <div className="bg-[#2B4C8C] text-white px-4 py-8 text-center w-[80px]">
                            Standard
                        </div>
                        <div className="flex ml-4 mt-10">
                            ₹ 500
                        </div>
                        <hr className="w-full my-4"/>
                        <div className="flex ml-4">
                            Better
                        </div>
                        <hr className="w-full my-4"/>
                        <div className="flex ml-4">
                            1080p
                        </div>
                        <hr className="w-full my-4"/>
                        <div className="flex ml-4">
                            phone
                        </div>
                        <div className="flex ml-4 mt-4">
                            Tablet
                        </div>
                        <div className="flex ml-4 mt-4">
                            Computer
                        </div>
                        <div className="flex ml-4 mt-4">
                            TV
                        </div>
                    </div>

                    <div className="text-xs flex flex-col w-[100px]">
                        <div className="bg-[#2B4C8C] text-white px-4 py-8 text-center w-[80px]">
                            Premium
                        </div>
                        <div className="flex ml-4 mt-10">
                            ₹ 700
                        </div>
                        <hr className="w-full my-4"/>
                        <div className="flex ml-4">
                            Best
                        </div>
                        <hr className="w-full my-4"/>
                        <div className="flex ml-4">
                            4K+HDR
                        </div>
                        <hr className="w-full my-4"/>
                        <div className="flex ml-4">
                            phone
                        </div>
                        <div className="flex ml-4 mt-4">
                            Tablet
                        </div>
                        <div className="flex ml-4 mt-4">
                            Computer
                        </div>
                        <div className="flex ml-4 mt-4">
                            TV
                        </div>
                    </div>
                </div>
                <Link href="payment" className="mt-10 px-[125px] py-2 bg-[#2B4C8C] text-white rounded-sm">Next</Link>


            </div>

            
        </div>
    )
}