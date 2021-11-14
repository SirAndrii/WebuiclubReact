import React from 'react';
import { NavLink, Outlet } from "react-router-dom";

import  './Menu.css'

export default function Menu (){
    return(
      <div className="BoxWithButtons">
    <ul className="right hide-on-med-and-down">
        <li><NavLink to="/" className="waves-effect waves-light btn" activeClassName="active">Home</NavLink></li>
        <li><NavLink to="/catalog" className="waves-effect waves-light btn" activeClassName="active">Catalog</NavLink></li>
        <li><NavLink to="/cart" className="waves-effect waves-light btn" activeClassName="active">Card</NavLink></li>
      </ul>
      </div>
    );
}