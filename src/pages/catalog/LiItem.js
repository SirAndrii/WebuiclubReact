import React from "react";
import Button from '../../components/button';
import {useLocation} from 'react-router-dom';

export default function LiItem ({obj}){
      const {id,item,img,name,description,price} = obj;
      
      const urlItem = useLocation().pathname + '/' + item.toLowerCase().match(/[a-z]+/g).join("-") + '-' + id;
      
      return (<li className='items'>
            <div className='ItemsCount'><p>{item}</p></div>
            <div className='photo'> <img src={img} className='image'></img> </div>           <div></div>
            <div className='mainText'>
                <h6 className='catalogName'> by {name}</h6>
                <ul>
                   <li className='description'><p className='catalogName'>Technik :</p><p>{description.technik}</p> </li> 
                    <li className='description'><p className='catalogName'>Country:</p><p>{description.country}</p> </li>
                    <li className='description'><p className='catalogName'>Category: </p><p>{description.category}</p></li>
                    <li className='description'><p className='catalogName'>Thema :</p><p>{description.thema}</p> </li>
                </ul> 
            </div>
            <div className='price'><p>Price</p><p>{price}</p></div>
            <div className='ViewMore'><Button classname="btn-small" onclick={ ()=> {window.location.href=urlItem} }>Show more</Button></div>
            {/* <div className='ViewMore'><Button classname="btn-small">Show more</Button></div> */}
        </li>);
  }
