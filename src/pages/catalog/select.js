import { render } from "@testing-library/react";
import React, { Component } from 'react'
import Select from 'react-select'

export default function Selection(){
    const Filter1 = [
        { value: '1', label: 'Filter1' },
        { value: '2', label: 'Filter2' },
        { value: '3', label: 'Filter3' }
      ]
      const Filter2 = [
        { value: '1', label: 'Filter1' },
        { value: '2', label: 'Filter2' },
        { value: '3', label: 'Filter3' }
      ]
      const Filter3 = [
        { value: '1', label: 'Filter1' },
        { value: '2', label: 'Filter2' },
        { value: '3', label: 'Filter3' }
      ]
      return(
        <div>
             <div> <Select options={Filter1}></Select></div>
             <div> <Select options={Filter2}></Select></div>
             <div> <Select options={Filter3}></Select></div>
        </div>
       
        
       
       
      )
      
}
