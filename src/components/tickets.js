import {AiOutlineCheck} from "react-icons/ai"
import "../styles/tickets.scss"
import {RxSwitch} from "react-icons/rx"

export default function Tickets(){
    return(
        <div>
            <div className="tone">
                <div>sngr</div>
                <div>product</div>
                <div>features</div>
                <div>pricing</div>
                <div>about us</div>
                <div className="tone1">
                    <div>log in</div>
                    <input type="search"></input>
                </div>
            </div>
            <div className="t0"> 
            <h1>Ready to get Started ?</h1>
            <h5>choose  a plain to tailored you needs</h5>
            <h5>monthy <RxSwitch/> yearly</h5>
            </div>
           
        <div className="t1">
            
        <div className="t2"> 
                <div><h1>lite</h1></div>
                <div><h5>Perfect to get started</h5></div>
                <div><h1>$11</h1>per seat/month</div>
                <button>try 7 days for free</button>
                <p>lite includes</p>
                <p><AiOutlineCheck/>CMS Integration</p>
                <p><AiOutlineCheck/>email& Sms reminders</p>
                <p><AiOutlineCheck/> customer support 24/7</p>
            </div>
            <div className="t2">
            <div><h1>pro</h1></div>
                <div><h5>best for professionals</h5></div>
                <div><h1>$19</h1>per seat/month</div>
                <button>Get started</button>
                <p>lite includes</p>
                <p><AiOutlineCheck/>advanced analytics</p>
                <p><AiOutlineCheck/>100+ integrations</p>
                <p><AiOutlineCheck/> chat widget</p>
                <p><AiOutlineCheck/> templates library</p>
            </div>
            <div className="t3">
            <div><h1>ultimate</h1></div>
                <div><h5>toolset for hard players</h5></div>
                <div><h1>$35</h1>per seat/month</div>
                <button>Get started</button>
                <p>ultimates includes</p>
                <p><AiOutlineCheck/>advanced analytics</p>
                <p><AiOutlineCheck/>100+ integrations</p>
                <p><AiOutlineCheck/> chat widget</p>
                <p><AiOutlineCheck/> templates library</p>
                <p>marketing tools & automation</p>
            </div>
 
        </div>
                   </div>
    )
}