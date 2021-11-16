import React from 'react';
import { NavLink, useLocation } from "react-router-dom";

import  './Menu.css'

function Li (props){
  //console.log(useLocation().pathname, props.children.props.to)
    let isactive= (useLocation().pathname === props.children.props.to) ? "active": undefined;
    return(
    <li className={isactive}>{props.children}</li>
  )
}

export default function Menu (){
    
    const links=[
      {url: "/",name:"Home"},
      {url: "/catalog",name:"Catalog"},
      {url: "/cart",name:"Cart"}
    ]
    
    
    return(
      <div className="BoxWithButtons">
    <ul className="right hide-on-med-and-down">
        {links.map(link => { 
            return (
              <Li key={link.url}>
                <NavLink 
                  to={link.url} 
                  className={({ isActive }, cls="waves-effect waves-light btn") => isActive ? cls +" green" : cls+ " red" }>
                    {link.name}
                  </NavLink>
              </Li>
              
            )
          })
        }
        </ul>
      </div>
    );
}