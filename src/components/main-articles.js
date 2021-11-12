import React, {useState} from "react";
import Article from "../containers/main/article";
import ViewMore from "../containers/main/moreButton";
import {objArticles} from "../data"; 

export default function Articles () {
    const step=3;
    const [loadMore, setLoadMore] = useState(step);
    const handleEvent = () => {
        setLoadMore(loadMore+step);
        console.log(loadMore);
    }

    let articles = objArticles.slice(0,loadMore);

return (
    <div className="row">
        
        {articles.map((el) => <Article title={el.title} img={el.img}/> )}

        <ViewMore onclick={handleEvent}/>
    </div>
);
}