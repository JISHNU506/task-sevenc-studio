import React from 'react'
import "./Style.css";


export default function Popupmenu(props) {
  return (props.trigger)?(
    <>
    <div className="popup">
        <div className="popup-inner">
            <button className="close-btn" onClick={()=>props.setTrigger(false)}>
            <i class="fa fa-close"></i>
            </button>
            {props.children}
        </div>
    </div>

    </>
  ):"";
}
