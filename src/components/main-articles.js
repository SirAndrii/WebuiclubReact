import React from "react";
import Article from "../containers/main/article";
import {objArticles} from "../data"; //

export default function Articles () {
return (
    <div className="row">
        {objArticles.slice(0,3).map((el) => <Article title={el.title} img={el.img}/> )}
    </div>
);
}