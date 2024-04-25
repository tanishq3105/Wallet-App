import { useNavigate } from "react-router-dom";
import { Button } from "./Button"

export const Appbar=()=>{
    const navigate=useNavigate()
    return(
        <div className="flex justify-between shadow h-14">
            <div className="font-mono flex flex-col justify-center h-full ml-4 font-bold text-3xl">
                Wallet-App
            </div>
            <div className="flex ">
            <div className="flex flex-col justify-center h-gull mr-4">
                Hello User
            </div>
            <div  className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">U</div>
            </div>
            <div className="flex mt-2">
                <div className="w-full text-white bg-red-500 hover:bg-red-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
                    <button onClick={()=>{localStorage.clear();navigate("/signup")}}>Log Out</button>
                </div>
            </div>
            </div>
        </div>
    )
}