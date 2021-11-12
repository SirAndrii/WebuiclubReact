import React, {useState} from 'react';

export default function ViewMore ({onclickmore}){
   /*  const step=3;
    const [loadMore,setLoadMore]=useState(step);
    const handleEvent = () => {
        setLoadMore(loadMore+step);
        console.log(loadMore);
    } */

    return(
        <div className="col s12 center-align">
            <a className="waves-effect waves-light btn-large" onClick={onclickmore}>View More</a>
        </div>
    );
}
