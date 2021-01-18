import React from "react";
import { ReactComponent as Union } from "../Union.svg";
import { ReactComponent as Fb } from "../ic_facebook.svg";
import { ReactComponent as Insta } from "../ic_instagram.svg";
import { ReactComponent as Twit } from "../ic_twitter.svg";
import { ReactComponent as Youtube } from "../ic_youtube.svg";



const Success = () => {
return ( <div className ="mainpart-new">
    <div>
        <Union className="newlogo"/>
    <h1>Thanks for subscribing!</h1>
    <p>You have successfully subscribed to our email listing. Check your email for the discount code.</p>
    </div>
    <hr/>
    <div className = "social-new"> 
    <div className = "fb"><Fb/></div>
    <div className = "insta"><Insta/></div>
    <div className = "twit"><Twit/></div>
    <div className = "youtube"><Youtube/></div>
    </div>
   </div>
)
}

export default Success