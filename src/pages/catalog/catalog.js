import React, { useState,useEffect } from "react";
import '../catalog/catalog.css'
import Selection from "./select.jsx";
import LiItem from "./LiItem";
import { SearchContext } from '../../App';
import PropagateLoader from "react-spinners/PropagateLoader";
import { css } from "@emotion/react";
import axios from 'axios'


import { catalogItems } from "../../data/dataCatalog";

/* await  */

const override = css`
  display: block;
  margin: 0 auto;
`;

export default function Catalog() {
   
  const [items, setItems] = useState();
  const [filters, setFilters] = useState({category:'',technik:'',thema:''});
  
  useEffect(  ()=>{
   
  axios.get(`http://localhost:5000/`)
  .then(response => response.data)
  .then(data => { setItems(data); console.log('fetched',data) })
  
},[]);

  useEffect(  ()=>{
  axios(`http://localhost:5000/`,{
    method:'POST',
    headers: {"Content-Type": "application/json"},
    data: JSON.stringify(filters)
  })
  .then(response => response.data)
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
   flexWrap: 'wrap', justifyContent: 'space-evenly'}}>{ !items ? 
  <span>< PropagateLoader color={'#FA0E0E'} size={30} style={override}/></span>
    : filteredItems.map(catalogItem => (
             <LiItem obj={catalogItem}></LiItem>
     )) }</ul></div> 
    </>
  );
}