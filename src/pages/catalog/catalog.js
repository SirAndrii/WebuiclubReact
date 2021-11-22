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

  const [Filters, setFilters] = useState({
    pictures: [],
    price: []
  });




  const handleFilters = (filters, category) => {
    // const newFilters = { ...Filters }
    // newFilters[category] = filters
    console.log(filters)
    // setFilters(newFilters)

  }



  let mapCatalogItems = catalogItems.map(catalogItem => (
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
     {/*  <h2>{searchKey}</h2> */}
      <Selection
        handleFilters={filters => handleFilters(filters, 'pictures')}
      />
      <div className='lowerContainer'>{mapCatalogItems}</div>
    </>
  );
}