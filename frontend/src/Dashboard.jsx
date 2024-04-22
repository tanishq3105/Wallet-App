import { Appbar } from "./components/Appbar"
import { Balance } from "./components/Balance"

export const Dashboard=()=>{
    return(
       <div>

           <Appbar></Appbar>
           <Balance value={"10,000"}></Balance>
       </div>
    )
}