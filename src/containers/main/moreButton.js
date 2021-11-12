import React, {useState} from 'react';

export default function ViewMore ({onclick}){
   /*  const step=3;
    const [loadMore,setLoadMore]=useState(step);
    const handleEvent = () => {
        setLoadMore(loadMore+step);
        console.log(loadMore);
    } */

    return(
        <div className="col s12 center-align">
            <a className="waves-effect waves-light btn-large" onClick={onclick}>View More</a>
        </div>
    );
}
