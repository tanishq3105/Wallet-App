import { useNavigate, useSearchParams } from "react-router-dom"
import { Button } from "./Button"
import { InputBox } from "./InputBox"
import { useState } from "react";
import axios from "axios";

export const SendMoney=()=>{
    const [searchParams]=useSearchParams();
    const id=searchParams.get("id");
    const name=searchParams.get("name");
    const [amount,setAmount]=useState(0);
    const navigate=useNavigate()
    return(
        <div className="flex justify-center h-screen bg-gray-100">
            <div className="h-full flex flex-col justify-center">
                <div className="border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg">
            <div className="font-bold text-xl text-center">
                Send Money
            </div>
            <div>
                <div className="flex items-center space-x-4">
                <div className="bg-blue-600 rounded-full h-12 w-12 text-white flex justify-center">
                    <div className="mt-2 text-xl">
                        {name[0]}
                    </div>
                </div>
                <div className="font-semibold text-2xl">
                    {name}
                </div>
                </div>
                <InputBox onChange={(e)=>{setAmount(e.target.value)}} label={"Amount(In Rs)"} placeholder={"Enter Amount"}/>
                <div className="mt-4">

                <Button onClick={async()=>{
                    const response=await axios.post("http://localhost:3000/api/v1/account/transfer",{
                        amount,
                        to:id
                    },{headers:{
                        Authorization:`Bearer ${localStorage.getItem("token")}`
                    }});
                    navigate('/success')
                }}   label={"Send Money"}/>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}