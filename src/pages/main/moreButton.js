import React from 'react';
import Button from '../../components/button';

export default function ViewMore (props){
    
    console.log(props);
    const {onclick} = props;
   
    return(
        <div className="col s12 center-align">
            <Button onclick={onclick} classname="btn-large">View More</Button>
            {/* <button className="waves-effect waves-light btn-large" onclick={onclick}>View More</button> */}
        </div>
    );
}
