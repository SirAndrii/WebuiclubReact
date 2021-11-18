import { render } from "@testing-library/react";
import React, { useState } from 'react'
import Select from 'react-select'
import './catalog.css'
import { Category } from "../../data/data";
import { Technik } from "../../data/data";
import { Thema } from "../../data/data";
import { catalogItems } from "../../data/dataCatalog";
import LiItem from "./LiItem";

export default function Selection() {

  const [state, setState] = useState(catalogItems); 
  const handleClickCategory = (e) => {
    let categoryChosen = e.label;
    if (categoryChosen === 'Symbolism') {
      const filtred = catalogItems.filter(item => 
      item.description.category === 'Symbolism')
      setState(filtred)
      console.log (filtred);
    }
    // if (e.label == 'Expressionism') {
    //   console.log("Expressionism")
    // }
    // if (e.label == 'Modern art') {
    //   console.log("Modern")
    // }
    // if (e.label == 'Surrealism') {
    //   console.log("Surrealism")
    // }
    // if (e.label == 'Realism') {
    //   console.log("Realism")
    // }
  }

  return (
    <>
    <div>
      <div className='fiterSelect'>
        <div> <Select options={Category} placeholder='Category' onChange={handleClickCategory}></Select></div>
        <div> <Select options={Technik} placeholder='Technik' ></Select></div>
        <div> <Select options={Thema} placeholder='Thema' ></Select></div>
        <div className='selectionButton'><button >Apply</button></div>
      </div>
    </div>
    </>
  )
}
