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
  const [state, setState] = useState([]);

  const handleClickCategory = (e) => {
    const currentIndex = state.indexOf(e);
    const newState = [...state];

    if (currentIndex === -1) {
      newState.push(e);
    } else {
      newState.splice(currentIndex, 1)
    }
    setState(newState);
    // props.handleFilters(newState)
    if (e.label == 'Expressionism') {
      const filtred = catalogItems.filter(item =>
        item.description.category === 'Expressionism')
      setState(filtred)
      props.handleFilters(filtred)

    }
    if (e.label == 'Modern art') {
      const filtred = catalogItems.filter(item =>
        item.description.category === 'Modern art')
      setState(filtred)
      props.handleFilters(filtred)

    }
    if (e.label == 'Surrealism') {
      const filtred = catalogItems.filter(item =>
        item.description.category === 'Surrealism')
      setState(filtred)
      props.handleFilters(filtred)

    }
    if (e.label == 'Realism') {
      const filtred = catalogItems.filter(item =>
        item.description.category === 'Realism')
      setState(filtred)
      props.handleFilters(filtred)

    }
  }

  return (
    <>
      <div>
        <div className='fiterSelect'>
          <div> <Select {...props} options={Category} placeholder='Category' onChange={handleClickCategory} ></Select></div>
          <div> <Select options={Technik} placeholder='Technik' ></Select></div>
          <div> <Select options={Thema} placeholder='Thema' ></Select></div>
          <div className='selectionButton'><button >Apply</button></div>
        </div>
      </div>
    </>
  )
}
