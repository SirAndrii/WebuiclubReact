import React from 'react';
import { NavLink, useLocation } from "react-router-dom";
import {SearchContext} from '../../App';
 
/* import  './Menu.css' */

function Li (props){
  //console.log(useLocation().pathname, props.children.props.to)
    let isactive= (useLocation().pathname === props.children.props.to) ? "active": undefined;
    return(
    <li className={isactive}>{props.children}</li>
  )
}

export default function Menu (){
    const {cartItems} = React.useContext(SearchContext); 

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
                    {link.name==="Cart" && <span>{cartItems.length}</span>}
                  </NavLink>
                  
              </Li>
              
            )
          })
        }
        </ul>
      </div>
    );
}