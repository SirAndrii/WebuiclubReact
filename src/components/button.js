import React from "react";

export default function Button (props){
    let classname="waves-effect waves-light " + props.classname;
    return (
        <button className={classname} onClick={props.onclick}>
            {props.children}
        </button>);
    
}
