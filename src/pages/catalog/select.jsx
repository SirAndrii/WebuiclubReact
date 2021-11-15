import { render } from "@testing-library/react";
import React, { Component } from 'react'
import Select from 'react-select'
import './catalog.css'

export default function Selection(){
    const Country = [
        { value: '1', label: 'Ukraine' },
        { value: '2', label: 'Germany' },
        { value: '3', label: 'Italy' },
        { value: '4', label: 'Spain' },
        { value: '5', label: 'Belarus' },
      ]
      const Category = [
        { value: '1', label: 'Symbolism' },
        { value: '2', label: 'Expressionism' },
        { value: '3', label: 'Modern art' },
        { value: '4', label: 'Surrealism' },
        { value: '5', label: 'Realism' },
      ]
      const Technik = [
        { value: '1', label: 'Oil' },
        { value: '2', label: 'Watercolor' },
        { value: '3', label: 'Acrylic' }
      ]
      const Thema = [
        { value: '1', label: 'Seascape' },
        { value: '2', label: 'Mythology' },
        { value: '3', label: 'Landscape' },
        { value: '4', label: 'Flowers' },
        { value: '5', label: 'People' },

      ]
      return(
        <div>
          <div className='fiterSelect'>
             <div> <Select options={Country} placeholder='Country'></Select></div>
             <div> <Select options={Category} placeholder='Category'></Select></div>
             <div> <Select options={Technik} placeholder='Technik'></Select></div>
             <div> <Select options={Thema} placeholder='Thema'></Select></div>
             <div className='selectionButton'><button>Apply</button></div>
        </div>
        
        </div>
        
       
        
       
       
      )
      
}
