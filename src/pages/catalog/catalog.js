import React from "react";
import '../catalog/catalog.css'
import Selection from "./select.jsx";

export default function Catalog() {
    const catalogItems = [
        {
            id: 1,
            item: 'Lord is great',
            img: 'https://molbert.com.ua/img/gallery/big/picture_15558_9339.jpg',
            name: 'Gudaev Konstantin',
            description: {
                country: 'Ukraine',
                category: 'Symbolism',
                technik: 'Oil',
                thema: 'Seascape'
            },
            price: '1160$'
        },
        {
            id: 2,
            item: 'Ocean power',
            img: 'https://molbert.com.ua/img/gallery/big/picture_adm_14431_31.jpg',
            name: 'Renina Marina',
            description: {
                country: 'Ukraine',
                category: 'Symbolism',
                technik: '',
                thema: 'Seascape'
            },
            price: '580$'
        },
        {
            id: 3,
            item: 'Sea. Cyprus (Greek part)',
            img: 'https://molbert.com.ua/img/gallery/big/picture_12124_8760.jpg',
            name: 'Bondarchuk Anastasiia',
            description: {
                country: 'Ukraine',
                category: 'Symbolism',
                technik: '',
                thema: 'Seascape'
            },
            price: '280$'
        },
        {
            id: 4,
            item: "Inhabitants of the underwater world",
            img: 'https://molbert.com.ua/img/gallery/big/picture_adm_15276_10.jpg',
            name: 'Ognevych Matilda',
            description: {
                country: 'Ukraine',
                category: 'Symbolism',
                technik: '',
                thema: 'Seascape'
            },
            price: '180$'
        },
        {
            id: 5,
            item: "Inhabitants of the underwater world",
            img: 'https://molbert.com.ua/img/gallery/big/picture_adm_15276_10.jpg',
            name: 'Ognevych Matilda',
            description: {
                country: 'Ukraine',
                category: 'Symbolism',
                technik: '',
                thema: 'Seascape'
            },
            price: '180$'
        }
    ]
  
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