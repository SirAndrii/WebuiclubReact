import React, { useState } from "react";
import '../catalog/catalog.css'
import Selection from "./select.jsx";
import LiItem from "./LiItem";
import { SearchContext } from '../../App';

import { catalogItems } from "../../data/dataCatalog";


export default function Catalog() {

  const { searchKey } = React.useContext(SearchContext); //отримуєм пошуковий запит
  let filteredItems;
  /* filteredItems = searchKey ? catalogItems.filter(catalogItem => JSON.stringify(catalogItem).includes(searchKey)): catalogItems; */
  if (searchKey) {
    filteredItems = catalogItems.filter(catalogItem => JSON.stringify(catalogItem).toLowerCase().includes(searchKey)); //стрінгіфікую строку, щоби зробити пошук входження фрази.
  } else {
    filteredItems = catalogItems;
  }



const [filters, setState] = useState(catalogItems);
  const writeFilter = (catalogItems) => {
  const filtredData=catalogItems.filter((item)=>
  {return item})
  setState(filtredData);
  console.log(filtredData)
  }
  let mapCatalogItems = filters.map(catalogItem => (
    <div>
      <ul>
        <LiItem obj={catalogItem}></LiItem>
        {/*console.log(typeof(JSON.stringify(catalogItem)))*/}
      </ul>
    </div>
  )
  )

  return (
    <>
      <h2>{searchKey}</h2>
      <Selection callback={writeFilter} />
      <div className='lowerContainer'>{mapCatalogItems}</div>
    </>
  );
}