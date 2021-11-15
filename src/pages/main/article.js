import React from "react";
import Lorem from "../../containers/lorem";

export default function Article ({title,img}) {
return (
    <div className="col s12 m4 ">
      <div className="card">
        <div className="card-image">
          <img src={img} alt={title}  style={{ height: '250px', objectFit: 'cover'}}/>
          <span className="card-title">{}</span>
          <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">+</i></a>
        </div>
        <div className="card-content">
          <Lorem textRange="200"><h2>{title}</h2></Lorem>
        </div>
      </div>
    </div>
);
}