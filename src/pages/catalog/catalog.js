import React from "react";
import '../catalog/catalog.css'
import Selection from "./select";

export default function Catalog() {
    const catalogItems = [
        {
            item: 1,
            img: 'https://image.shutterstock.com/image-vector/img-file-document-icon-260nw-1356823577.jpg',
            name: 'Amaizing stuff',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam',
            price: '2225$'
        },
        {
            item: 1,
            img: 'https://image.shutterstock.com/image-vector/img-file-document-icon-260nw-1356823577.jpg',
            name: 'Amaizing stuff',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam',
            price: '2225$'
        },
        {
            item: 1,
            img: 'https://image.shutterstock.com/image-vector/img-file-document-icon-260nw-1356823577.jpg',
            name: 'Amaizing stuff',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam',
            price: '2225$'
        },
        {
            item: 1,
            img: 'https://image.shutterstock.com/image-vector/img-file-document-icon-260nw-1356823577.jpg',
            name: 'Amaizing stuff',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam',
            price: '2225$'
        }
    ]
    const mapCatalogItems = catalogItems.map(catalogItems => <div> <ul>
        <li className='items'>
            <div className='ItemsCount'><p>Item {catalogItems.item}</p></div>
            <div className='photo'> <img src={catalogItems.img} className='image'></img> </div>           <div></div>
            <div className='mainText'>
                <h6>{catalogItems.name}</h6>
                <p>{catalogItems.description}
                </p></div>
            <div className='price'><p>Price</p><p>{catalogItems.price}</p></div>
            <div className='ViewMore'><button>View more</button></div>
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