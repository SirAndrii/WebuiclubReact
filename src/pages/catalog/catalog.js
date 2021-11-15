import React from "react";
import '../catalog/catalog.css'
import Selection from "./select.jsx";
import  {catalogItems}  from "../../data/dataCatalog";
export default function Catalog() {

  
    const mapCatalogItems = catalogItems.map(catalogItems => <div> <ul>
        <li className='items'>
            <div className='ItemsCount'><p>{catalogItems.item}</p></div>
            <div className='photo'> <img src={catalogItems.img} className='image'></img> </div>           <div></div>
            <div className='mainText'>
                <h6 className='catalogName'> by {catalogItems.name}</h6>
                <ul>
                   <li className='description'><p className='catalogName'>Technik :</p><p>{catalogItems.description.technik}</p> </li> 
                    <li className='description'><p className='catalogName'>Country:</p><p>{catalogItems.description.country}</p> </li>
                    <li className='description'><p className='catalogName'>Category: </p><p>{catalogItems.description.category}</p></li>
                    <li className='description'><p className='catalogName'>Thema :</p><p>{catalogItems.description.thema}</p> </li>
                    </ul> 
            </div>
            <div className='price'><p>Price</p><p>{catalogItems.price}</p></div>
            <div className='ViewMore'><button>Show more</button></div>
        </li>
    </ul>
    </div>
    )
    
    return (
        <>
            <Selection />
            <div className='lowerContainer'>{mapCatalogItems}</div>
        </>
    );
}