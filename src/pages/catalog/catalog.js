import React from "react";
import '../catalog/catalog.css'
import Selection from "./select.jsx";
import LiItem from "./LiItem";


import  {catalogItems}  from "../../data/dataCatalog";


export default function Catalog() {
  const mapCatalogItems = catalogItems.map(catalogItem => (
    <div> 
        <ul>
          <LiItem obj={catalogItem}></LiItem>
        </ul>
    </div>
    )
  )
    
    return (
        <>
            <Selection />
            <div className='lowerContainer'>{mapCatalogItems}</div>
        </>
    );
}