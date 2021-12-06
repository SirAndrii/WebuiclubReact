import React from "react";
import {useSelector, useDispatch} from 'react-redux'
import {searchAction} from '../../store/actions';

export default function Search (){
   /*  const search = useSelector( state => state.searchReducer); */
    const dispatch = useDispatch();
    
    function handleSearch(event) {
        let {value} = event.target;
        value = value.toLowerCase();
        dispatch(searchAction(value));
    }
    /* const {handleSearch} = React.useContext(SearchContext); *///Можем доступитись до функції, якак контролює стейт в батьківському елементі в АПП!!! Ура!

    return ( 
        <div className="input-field col s3 red-text">
            <input type="text" placeholder="search" id="autocomplete-input" className="autocomplete white-text" onChange={handleSearch} />
        </div>
   )
}
   