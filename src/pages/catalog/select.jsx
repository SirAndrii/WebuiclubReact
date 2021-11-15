import { render } from "@testing-library/react";
import React, { Component } from 'react'
import Select from 'react-select'
import './catalog.css'
import { Category } from "../../data/data";
import { Technik } from "../../data/data";
import { Thema } from "../../data/data";
import buttonApllyFilters from "./buttonApplyFilters";

export default function Selection(){
      return(
        <div>
          <div className='fiterSelect'>
             <div> <Select options={Category} placeholder='Category'></Select></div>
             <div> <Select options={Technik} placeholder='Technik'></Select></div>
             <div> <Select options={Thema} placeholder='Thema'></Select></div>
             {buttonApllyFilters}
        </div>
        
        </div> 
      )
      
}
