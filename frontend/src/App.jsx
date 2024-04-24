import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Signup} from "./components/Signup"
import { Signin } from "./components/Signin"
import { Appbar } from "./components/Appbar"
import { Balance } from "./components/Balance"
import { Dashboard } from "./Dashboard"
import { SendMoney } from "./components/Sendmoney"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/send" element={<SendMoney/>}/>

        <Route/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
