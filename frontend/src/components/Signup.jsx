import { memo, useMemo, useState } from "react";
import { HeadingComp } from "./Heading";
import { SubHeading } from "./Subheading";
import { InputBox } from "./InputBox";
import { Button } from "./Button";
import { BottomWarning } from "./Bottomtext";




export const Signup = () => {



  return (
    <div className="bg-slate-300 h-screen flex justify-center" >
        <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <HeadingComp label={"Sign Up"}/>
        <SubHeading text={"Add your Information to create an account"}/>
        <InputBox label={"First Name"} placeholder={"John"}/>
        <InputBox label={"Last Name"} placeholder={"Doe"}/>
        <InputBox label={"Email"} placeholder={"johndoe@example.com"}/>
        <InputBox label={"Password"} placeholder={"*********"}/>
        <div className="pt-4">
        <Button label={"Sign Up"}/>
        </div>
        <BottomWarning label={"Already have a account?"} buttonText={"Sign In"} to={"/signin"}/>
        </div>
    </div>
    </div>
  );
};
