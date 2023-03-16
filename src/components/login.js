import "../styles/login.scss";
import { useNavigate } from "react-router-dom";


export default function Login(){
    const Navigate = useNavigate();
    return(
        <div className="lmain">
            <div className="L2">
                <div className="L1">
                    <h1><b>REGISTRATION FORM</b></h1>
                    <div className="L4"><label>full name:</label><input type="text"></input></div>
                    <div className="L4"><label>email:</label><input type="email"></input></div>
                    <div className="L4"><label>phonenumber:</label><input type="password"></input></div>
                    <div className="L4"><label>passeord:</label><input type="password"></input></div>
                    <div><button className="L3" onClick={()=>Navigate("/dashboard")}>submit</button></div>
                   
                </div>

                

            </div>
        </div>
    )
}