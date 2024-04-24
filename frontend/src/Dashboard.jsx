import { useEffect, useState } from "react"
import { Appbar } from "./components/Appbar"
import { Balance } from "./components/Balance"
import { Users } from "./components/Users"
import axios from "axios"

export const Dashboard=()=>{
    const [balance, setBalance]=useState(0);
    useEffect(()=>{
        const getBalance=async()=>{
            const response=await axios.get("http://localhost:3000/api/v1/account/balance",{
                headers:{
                    Authorization:`Bearer ${localStorage.getItem("token")}`
                }
            });
            setBalance(parseInt(response.data.balance))
        }
        getBalance();
    })
    return(
       <div>

           <Appbar></Appbar>
           <div className="m-4">
           <Balance value={balance}></Balance>
           <Users></Users>
           </div>
       </div>
    )
}