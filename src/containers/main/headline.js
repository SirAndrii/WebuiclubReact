import React from "react";
import Lorem from "../lorem";
export default function Headline ({altText}) {
return (
    <div className="col s12">
      <div className="card  horizontal">
        <div className="card-image">
          <img  src="https://s.mind.ua/img/forall/a/201840/76.jpg" alt={altText} />
        </div>
        <div className="card-stacked">
        <div className="card-content">
          <Lorem textRange="300"><h1>someTitle</h1></Lorem>
        </div>
        </div>
      </div>
    </div>
);
}