import React, { useState,useEffect } from "react";
import axios from 'axios';
import Selection from "./select.jsx";
import LiItem from "./LiItem";
import Loader from "../../components/loader"
import { SearchContext } from '../../App';
/* import PropagateLoader from "react-spinners/PropagateLoader";
import { css } from "@emotion/react"; */

/* await  */

/* const override = css`
  display: block;
  margin: 0 auto;
`; */

export default function Catalog() {
   
  const [items, setItems] = useState();
  const [filters, setFilters] = useState({category:'',technik:'',thema:''});
  const [loader, setLoader] = useState(true);

  useEffect(  ()=>{
    axios.get(`http://localhost:5000/`)
    .then(response => {setItems(response.data)})
    .catch(error => {console.log("error", error)})
    .finally(()=>setLoader(false));
  },[]);

  /* useEffect( ()=> { setLoader(true) },[false]); */

  useEffect(  ()=>{
    setLoader(true);
    /** try to simlify axios!!! */
    axios(`http://localhost:5000/`, {
      method:'POST',
      headers: {"Content-Type": "application/json"},
      data: JSON.stringify(filters)
    })
    .then(response => {setItems(response.data)})
    .catch(error => {console.log("error", error)})
    .finally(()=>setLoader(false));
  },[filters]);

  const { searchKey } = React.useContext(SearchContext); //отримуєм пошуковий запит
 
  let filteredItems;
  if (searchKey) {
    filteredItems = items.filter(catalogItem => JSON.stringify(catalogItem).toLowerCase().includes(searchKey)); 
  } else {
    filteredItems = items;
  }

  const writeFilter = (someObj) => {
    setFilters(someObj);
  }
    /* console.log(filters); */

  return (
    <>
      <h2>{searchKey}</h2>
      <Selection callback={writeFilter} />
      
      <div className='row'>
        <ul style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
        { 
          loader ? (<Loader />)
          :(
            filteredItems.map(catalogItem => (
              <LiItem obj={catalogItem}></LiItem>)
            ) 
          )
        }
        </ul>
      </div> 
    </>
  );
}