import React from "react";
import Article from "../containers/main/article";

const objArticles = [
    {
        title: 'Title 1',
        img: 'https://miro.medium.com/max/3600/0*n-2bW82Z6m6U2bij.jpeg'
    },
    {
        title: 'Title 2',
        img: 'https://pbs.twimg.com/media/B5pjF_8IEAE_erU.jpg'
    },
    {
        title: 'Title 3',
        img: 'https://78.media.tumblr.com/7038fa86c7c2010178ed41a23ac358e2/tumblr_ohkxh5QI181tjftelo1_1280.jpg'
    },
    {title: 'Title 4'},
    {title: 'Title 5'},
    {title: 'Title 6'},
]
export default function Articles () {
return (
    <div className="row">
        {objArticles.slice(0,3).map((el) => <Article title={el.title} img={el.img}/> )}
    </div>
);
}