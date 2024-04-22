import { memo, useMemo, useState } from "react";
import { HeadingComp } from "./Heading";
import { SubHeading } from "./Subheading";
import { InputBox } from "./InputBox";
import { Button } from "./Button";
import { BottomWarning } from "./Bottomtext";




export const Signin = () => {



  return (
    <div className="bg-slate-300 h-screen flex justify-center" >
        <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <HeadingComp label={"Sign In"}/>
        <SubHeading text={"Add your Information to Login to your account"}/>
        <InputBox label={"Email"} placeholder={"johndoe@example.com"}/>
        <InputBox label={"Password"} placeholder={"*********"}/>
        <div className="pt-4">
        <Button label={"Sign In"}/>
        </div>
        </div>
    </div>
    </div>
  );
};
