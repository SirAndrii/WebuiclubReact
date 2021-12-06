import React, {useState,useEffect} from "react";
import { useParams, useNavigate  } from "react-router-dom";
import axios from 'axios';
// useHistory was canceled  in V6"react-router-dom"
import Button from "../../../components/button";
import Loader from "../../../components/loader"
import Lorem from "../../../containers/lorem";
import { NotFound } from "../../404/404";
import {SearchContext} from '../../../App';


export default function Item() {
    const [idData,setId] = useState({})
    const {handleCart} = React.useContext(SearchContext);

    let params = useParams();
    let navigate = useNavigate();
    
    const id = params.item.match(/(\d+)/);
    const [loader, setLoader] = useState(true);
    //Якщо юзер буде вбивати що завгодно, всеодно сторінка буда ренедеритись. Зробити кондішенал редірект в мене не вийшло.
    /* if(Object.values(obj).includes(+id)) { return ... } else {return <NotFound />} */
      /* //як буде перевірка по Дата каталог, можна зробити звірку по ід і віддавати 404, хотілось би редірект, але спосіб з useEffect дає проблему при першому рендерингу. але  поки просто на наявність цифр перевіока */

    useEffect(  ()=>{
     axios(`http://localhost:5000/id`, {
      method:'POST',
      headers: {"Content-Type": "application/json"},
      data: JSON.stringify({id: id[0]})
    })
    .then(response => {setId(response.data); console.log(response.data.length)})
    .catch(error => {console.log("error", error)})
    .finally(()=>setLoader(false));
    },[]);

    /* if (data){
        return <NotFound/>;
    } */
    if(loader) {
    return <Loader />;
    }
    return (
        <>
          <h2>{params.item} - id={+id[0]}</h2>
           
            <div className="col s12">
            <div className="card  horizontal">
                <div className="card-image">
                <img  src={idData.img} alt={idData.item} />
                </div>
                <div className="card-stacked">
                <div className="card-content" style={{display:'flex', flexDirection: 'column', justifyContent:'space-between'}}>
                <Lorem textRange="200"><h1>{idData.item} by {idData.name}</h1></Lorem>

                <div style={{fontSize:"2em"}}>Price: {idData.price}$</div>
                <div style={{display:'flex', flexDirection: 'row', justifyContent:'space-around'}}>
                 <Button classname="btn-large" onclick={()=> navigate(-1)}>Back to catalog</Button>
                  <button classname="btn-large" onClick={()=> handleCart(idData.id)}>Add to cart</button>
                   </div>
                </div>
                </div>

            </div>
            </div>
         
        
         
        </>
    );
}


   /*  */