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
  const [astate, setState] = useState({category:'',technik:'',thema:''});
  const handleClick = (e,name) => {
    setState({...astate, [name]: e.label});
    
  }

  return (
    <>
      <div>
        <div className='fiterSelect'>
          <div> <Select options={Category} placeholder='Category' onChange={e => handleClick(e, 'category')} ></Select></div>
          <div> <Select options={Technik} placeholder='Technik' onChange={e => handleClick(e, 'technik')}></Select></div>
          <div> <Select options={Thema} placeholder='Thema'  onChange={e => handleClick (e, 'thema')}></Select></div>
          <div className='selectionButton'><button onClick={() => props.callback(astate)} >Apply</button></div>
        </div>
      </div>
    </>
  )
}
//   const [state, setState] = useState([]);

//   const handleClickCategory = (e) => {
//     const currentIndex = state.indexOf(e);
//     const newState = [...state];

//     if (currentIndex === -1) {
//       newState.push(e);
//     } else {
//       newState.splice(currentIndex, 1)
//     }
//     setState(newState);
//     // props.handleFilters(newState)
//     if (e.label == 'Symbolism') {
//       const filtred = catalogItems.filter(item =>
//         item.description.category === 'Symbolism')
//       setState(filtred)
//       props.handleFilters(filtred)

//     }
//     if (e.label == 'Expressionism') {
//       const filtred = catalogItems.filter(item =>
//         item.description.category === 'Expressionism')
//       setState(filtred)
//       props.handleFilters(filtred)

//     }
//     if (e.label == 'Modern art') {
//       const filtred = catalogItems.filter(item =>
//         item.description.category === 'Modern art')
//       setState(filtred)
//       props.handleFilters(filtred)

//     }
//     if (e.label == 'Surrealism') {
//       const filtred = catalogItems.filter(item =>
//         item.description.category === 'Surrealism')
//       setState(filtred)
//       props.handleFilters(filtred)

//     }
//     if (e.label == 'Realism') {
//       const filtred = catalogItems.filter(item =>
//         item.description.category === 'Realism')
//       setState(filtred)
//       props.handleFilters(filtred)

//     }
//   }

//   return (
//     <>
//       <div>
//         <div className='fiterSelect'>
//           <div> <Select {...props} options={Category} placeholder='Category' onChange={handleClickCategory} ></Select></div>
//           <div> <Select options={Technik} placeholder='Technik' ></Select></div>
//           <div> <Select options={Thema} placeholder='Thema' ></Select></div>
//           <div className='selectionButton'><button >Apply</button></div>
//         </div>
//       </div>
//     </>
//   )
// }
