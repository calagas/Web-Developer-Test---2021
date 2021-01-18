import "./App.css";
import "./Media.css";

import { ReactComponent as Logo } from "./logo_pineapple.svg";
import { ReactComponent as Logomob } from "./logo_pineapple(1).svg";
import Success from "./components/Success";
import {Redirect, Route} from "react-router-dom";
import Mainpart from "./components/Mainpart";


function App() {
  return (
   <div className="wrapper">
      <div className="menu-wrapper">
       <div className="logo"><Logo /></div> 
       <div className="logo_mob"><Logomob /></div> 
        <div className = "menu-content">
    <a className= "about" href = "#">About </a>
    <a className= "works" href = "#">How it works </a>
    <a className= "contact" href = "#">Contact </a>
   </div>
      </div>
    <div className = "background">
      <Route exact path="/"><Redirect to ="/mainpart"/></Route>
      <Route path = '/mainpart' render = {() => <Mainpart />}/>
      <Route path = '/success' render = {() => <Success />}/>
      </div>
      </div>
   
  );
  }
export default App;
