import React from "react";
import Lorem from "../../containers/lorem";
export default function Headline ({altText}) {
return (
    <div className="col s12">
      <div className="card  horizontal">
        <div className="card-image">
          <img  src="https://i.ytimg.com/vi/b2VpNx5ZxSA/maxresdefault.jpg" alt={altText} />
        </div>
        <div className="card-stacked">
        <div className="card-content">
          <Lorem textRange="300"><h1>What is art? </h1></Lorem>
        </div>
        </div>
      </div>
    </div>
);
}