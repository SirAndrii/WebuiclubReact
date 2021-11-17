import React, {useState} from "react";
import { useParams, useNavigate  } from "react-router-dom";
// useHistory was canceled  in V6"react-router-dom"
import Button from "../../../components/button";

export default function Item() {
    const [redirect,setRedirect] = useState(null)
    
    let params = useParams();
    let navigate = useNavigate();
    
    const id = params.item.match(/(\d+)/)[0];
//Якщо юзер буде вбивати що завгодно, всеодно сторінка буда ренедеритись. Зробити кондішенал редірект в мене не вийшло.
    /* if(Object.values(obj).includes(+id)) { return ... } else {return <NotFound />} */

    
    
    return (
        <>
        <h2>{params.item} - id={+id}</h2>
        <Button classname="btn-large" onclick={()=> navigate(-1)}>Back to catalog</Button>
        </>
    );
}