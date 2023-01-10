import React, { useEffect, useState } from "react";
import "./Style.css";

export default function Navbar({selected}) {

const [select,setSelect]=useState(false)
useEffect(() => {
 if(selected=="Artist")
 {
  setSelect(true)
 }
}, [selected])

console.log(selected);
  return (
    <>
      {/* <div className="container"> */}
        <nav>
          <ul>
            <li>
              <a  className="logo">
                <span className="nav-item">  <i class='bx bxl-unity'></i>&nbsp;UN<span>i</span>TY</span>
              </a>
            </li>
            <li id="nav-content">
              <a href="/" id={selected=="DashBoard"?"nav-selected":"nav-prop"}>
                <img src="icons/Group 147.png" alt="" />
                <span className="nav-item">DashBoard</span>
              </a>
             

              
            </li>

            <li id="sub-head">
              <a>
              
                <span className="nav-item1">Users</span>
              </a>
            </li>
            <li id="nav-content" onClick={()=>setSelect(!select)}>
              <a  id="nav-prop">
                <img src="icons/Icons-consumer.png" alt="" />
                <span className="nav-item">Content Uploaders<i class='bx bxs-chevron-down'></i></span>
                
              </a>
              {select?<>
                <a href="/artist" id={selected=="Artist"?"nav-selected":"nav-prop"}>
                
                <span className="nav-item">Artist</span>
                
              </a>
              <a  id="nav-prop">
                
                <span className="nav-item">Podcast</span>
                
              </a></>:""}
              
            </li>
            <li >
              <a href="">
                <span className="nav-item1">Goongoonalo Content</span>
              </a>
            </li>
            <li id="nav-content">
              <a href="" id="nav-prop">
                <img src="icons/cd.png" alt="" />
                <span className="nav-item">Content <i class='bx bxs-chevron-down'></i></span>
                
              </a>
            </li>
          </ul>
        </nav>
      {/* </div> */}
    </>
  );
}
