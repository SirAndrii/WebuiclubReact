import React, {useState,useEffect} from "react";
import { useParams, useNavigate  } from "react-router-dom";
// useHistory was canceled  in V6"react-router-dom"
import Button from "../../../components/button";
import { NotFound } from "../../404/404";

export default function Item() {
    const [idData,setId] = useState({})
    
    let params = useParams();
    let navigate = useNavigate();
    
    const id = params.item.match(/(\d+)/);
    //Якщо юзер буде вбивати що завгодно, всеодно сторінка буда ренедеритись. Зробити кондішенал редірект в мене не вийшло.
         /* if(Object.values(obj).includes(+id)) { return ... } else {return <NotFound />} */
      /* //як буде перевірка по Дата каталог, можна зробити звірку по ід і віддавати 404, хотілось би редірект, але спосіб з useEffect дає проблему при першому рендерингу. але  поки просто на наявність цифр перевіока */

    useEffect(  ()=>{
     fetch(`http://localhost:5000/id`,{
         method:'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({id: id[0]})
  })
        .then(response => response.json())
        .then(data => {  setId(data);  console.log('fetched',data) })
    },[]);

    /* if (data){
        return <NotFound/>;
    } */
    
    return (
        <>
          <h2>{params.item} - id={+id[0]}</h2>
          { !idData ? "loading" : <pre>{JSON.stringify(idData, null, 4) } </pre>}
            <Button classname="btn-large" onclick={()=> navigate(-1)}>Back to catalog</Button>
        </>
    );
}