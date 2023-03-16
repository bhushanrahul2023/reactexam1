import React from "react"
import "../styles/dashboard.scss"
import { useNavigate } from "react-router-dom"
export default function Dashboard(){
    const Navigate =useNavigate();
    return(
        <div className="dd">
            <div className="d1">
                    <h1><b>LOGIN FORM</b></h1>
                    <div className="d2"> <label>username</label><input type="text"></input> </div>
                    <div className="d2"> <label>password</label><input type="password"></input></div>
                    <div><button className="d3" onClick={()=>Navigate("/tickets")}>Login</button></div>

                </div>
        </div>
    )
}