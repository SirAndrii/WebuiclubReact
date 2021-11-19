import { render } from "@testing-library/react";
import React, { useState } from 'react'
import Select from 'react-select'
import './catalog.css'
import { Category } from "../../data/data";
import { Technik } from "../../data/data";
import { Thema } from "../../data/data";
import { catalogItems } from "../../data/dataCatalog";
import LiItem from "./LiItem";

export default function Selection(props) {
  const [state, setState] = useState({category:'',technik:'',thema:''});

  const handleClickCategory = (e,name) => {
    setState({...state, [name]: e.label});
  }
  console.log(state);

  return (
    <>
      <div>
        <div className='fiterSelect'>
          <div> <Select options={Category} placeholder='Category' onChange={e=> handleClickCategory (e, 'category')} ></Select></div>
          <div> <Select options={Technik} placeholder='Technik' onChange={e=> handleClickCategory (e, 'technik')}></Select></div>
          <div> <Select options={Thema} placeholder='Thema' ></Select></div>
          <div className='selectionButton'><button onClick={()=>props.callback(state)} >Apply</button></div>
        </div>
      </div>
    </>
  )
}
