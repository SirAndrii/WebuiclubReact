import React from "react";
import {SearchContext} from '../../App';

export default function Search (){
    const {handleChange} = React.useContext(SearchContext);//Можем доступитись до функції, якак контролює стейт в батьківському елементі в АПП!!! Ура!

    return ( 
        <div className="input-field col s3 red-text">
            <input type="text" placeholder="search" id="autocomplete-input" className="autocomplete white-text" onChange={handleChange} />
        </div>
   )
}
   