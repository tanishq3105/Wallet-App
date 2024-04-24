import { memo, useMemo, useState } from "react";
import { HeadingComp } from "./Heading";
import { SubHeading } from "./Subheading";
import { InputBox } from "./InputBox";
import { Button } from "./Button";
import { BottomWarning } from "./Bottomtext";
import axios from "axios";
import { useNavigate } from "react-router-dom";




export const Signin = () => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const navigate=useNavigate()


  return (
    <div className="bg-gradient-to-r from-pink-500 to-blue-500 h-screen flex justify-center" >
        <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <HeadingComp label={"Sign In"}/>
        <SubHeading text={"Add your Information to Login to your account"}/>
        <InputBox onChange={(e)=>setEmail(e.target.value)} label={"Email"} placeholder={"johndoe@example.com"}/>
        <InputBox onChange={(e)=>setPassword(e.target.value)} label={"Password"} placeholder={"*********"}/>
        <div className="pt-4">
        <Button onClick={async()=>{const response=await axios.post("http://localhost:3000/api/v1/user/signin",{
          username:email,
          password
        });
        if(response.status==200)
         {navigate('/dashboard')}
         localStorage.setItem("token",response.data.token)} } label={"Sign In"}/>
        </div>
        </div>
    </div>
    </div>
  );
};
