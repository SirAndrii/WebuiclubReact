import React from 'react';
import  './Menu.css'

export default function Menu (){
    return(
      <div className="BoxWithButtons">
    <ul className="right hide-on-med-and-down">
        <li><a className="waves-effect waves-light btn">Home</a></li>
        <li><a className="waves-effect waves-light btn">Catalog</a></li>
        <li><a className="waves-effect waves-light btn">Card</a></li>
      </ul>
      </div>
    );
}