import React from 'react';

export default function ViewMore (props){
    
    console.log(props);// Чому onClick - перетворюється в onclick.
    const {onclick} = props;
   /*  const step=3;
    const [loadMore,setLoadMore]=React.useState(step);
    const handleEvent = () => {
        setLoadMore(loadMore+step);
        console.log(loadMore);
    } */

    return(
        <div className="col s12 center-align">
            <button className="waves-effect waves-light btn-large" onClick={onclick}>View More</button>
        </div>
    );
}
