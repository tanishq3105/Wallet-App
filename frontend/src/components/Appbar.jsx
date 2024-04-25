export const Appbar=()=>{
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
            </div>
        </div>
    )
}