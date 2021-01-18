import React, { useState } from "react";
import { ReactComponent as Fb } from "../ic_facebook.svg";
import { ReactComponent as Insta } from "../ic_instagram.svg";
import { ReactComponent as Twit } from "../ic_twitter.svg";
import { ReactComponent as Youtube } from "../ic_youtube.svg";
import { useHistory} from "react-router-dom"
const Mainpart = () => {

  const [checkbox, setCheckbox] = useState(false)
  const [email, setEmail] = useState("")
  const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const history = useHistory();
  const [errors, setErrors] = useState("")

  const changeMainPart = () => {
    if (checkbox) {
      if (email.length){
        if (emailReg.test(email)){
          history.push("/success")
        }else setErrors("Please provide a valid e-mail address")
      } else setErrors("Email address is required")
    } else setErrors(" You must accept the terms and conditions ")
    
   };
    return(
 <div className="mainpart">
 <h1>Subscribe to newsletter </h1>
 <p>Subscribe to our newsletter and get 10% discount on pineapple glasses.</p>
 <div className="mail-input">
   <input placeholder="Type your email address here..." value={email} onChange = {(text) =>setEmail(text.target.value)}></input>
   <button className="btn" type="button" onClick = {changeMainPart} />
 </div>
 <div className = "errors">
   {errors}
 </div>
 <hr/>
 <div className = "tos">
   <label className = "check_option" >
     <input type="checkbox" className="check_input" checked = {checkbox} onChange = {() => setCheckbox(!checkbox)} />
     <span className = "check_span" > </span>
     I agree to </label>
   <a href =" #"> terms of service</a>
 </div>
 <hr/>
 <div className = "social"> 
 <div className = "fb circle"><Fb/></div>
 <div className = "insta circle"><Insta/></div>
 <div className = "twit circle"><Twit/></div>
 <div className = "youtube circle"><Youtube/></div>
 </div>
 </div>
 )}
 export default Mainpart;