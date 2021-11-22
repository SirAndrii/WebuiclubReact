import React, { useState,useEffect } from "react";
import '../catalog/catalog.css'
import Selection from "./select.jsx";
import LiItem from "./LiItem";
import { SearchContext } from '../../App';

import { catalogItems } from "../../data/dataCatalog";

/* await  */

export default function Catalog() {
   
  const [items, setItems] = useState();
  const [filters, setFilters] = useState({category:'',technik:'',thema:''});
  
  useEffect(  ()=>{
   
    fetch(`http://localhost:5000/`)
  .then(response => response.json())
  .then(data => { setItems(data); console.log('fetched',data) })
  
},[]);

  useEffect(  ()=>{
  fetch(`http://localhost:5000/`,{
    method:'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(filters)
  })
  .then(response => response.json())
  .then(data => { setItems(data); console.log('fetched',data) })
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
    console.log(filters);
     

  return (
    <>
      <h2>{searchKey}</h2>
      <Selection callback={writeFilter} />
      
      <div className='row'><ul style={{display: 'flex',
   flexWrap: 'wrap', justifyContent: 'space-between'}}>{ !items ? "loading" : filteredItems.map(catalogItem => (
             <LiItem obj={catalogItem}></LiItem>
     )) }</ul></div> 
    </>
  );
}