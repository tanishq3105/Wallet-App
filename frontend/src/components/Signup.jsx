import { memo, useMemo, useState } from "react";
import { HeadingComp } from "./Heading";
import { SubHeading } from "./Subheading";
import { InputBox } from "./InputBox";
import { Button } from "./Button";
import { BottomWarning } from "./Bottomtext";
import axios from 'axios'
import { useNavigate } from "react-router-dom";




export const Signup = () => {

  const [firstName,setFirstName]=useState('')
  const [lastName,setlastName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const navigate=useNavigate();

  return (
    <div className="bg-gradient-to-r from-pink-500 to-blue-500 h-screen flex justify-center" >
        <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <HeadingComp label={"Sign Up"}/>
        <SubHeading text={"Add your Information to create an account"}/>
        <InputBox onChange={(e)=>setFirstName(e.target.value)} label={"First Name"} placeholder={"John"}/>
        <InputBox onChange={(e)=>setlastName(e.target.value)} label={"Last Name"} placeholder={"Doe"}/>
        <InputBox onChange={(e)=>setEmail(e.target.value)} label={"Email"} placeholder={"johndoe@example.com"}/>
        <InputBox onChange={(e)=>setPassword(e.target.value)} label={"Password"} placeholder={"*********"}/>
        <div className="pt-4">
        <Button onClick={async()=>{const response=await axios.post("http://localhost:3000/api/v1/user/signup",{
          username:email,
          firstName,
          lastName,
          password
        });
        if(response.status==200)
         {navigate('/dashboard')}
         localStorage.setItem("token",response.data.id)} } label={"Sign Up"}/>
        </div>
        <BottomWarning label={"Already have a account?"} buttonText={"Sign In"} to={"/signin"}/>
        </div>
    </div>
    </div>
  );
};
