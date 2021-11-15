import React, {useState} from "react";
import Article from "./article";
import ViewMore from "./moreButton";
import {objArticles} from "../../data/data"; 

export default function Articles () {
    const step=3;
    const [loadMore, setLoadMore] = useState(step);
    //Чому воно працює не дуже розумію, передаєм як колбек функцію, але в той же час маєм доступ до батьківського стейту 
        const handleEvent = () => {
            setLoadMore(loadMore+step);
            console.log(loadMore);
    }

    let articles = objArticles.slice(0,loadMore);

return (
    <div className="row">
        {articles.map((el) => <Article key={el.title} title={el.title} img={el.img}/> )}
        <ViewMore onclick={handleEvent}/>
    </div>
);
}