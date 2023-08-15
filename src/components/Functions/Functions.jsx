import React, { createContext, useState } from 'react'

export const FunctionProvider=createContext(null)
 let Functions=({children})=> {
    const[searchValue,setsearchValue]=useState('')
    const[categoryValue,setcategoryValue]=useState('')
    let handleSearch=(search)=>{
        setsearchValue(search)
    }
    let handleCategory=(category)=>{
        setcategoryValue(category)
    }
    let functions={
        searchValue,
        categoryValue,
        handleSearch,
        handleCategory
    }
  
  return (
    <FunctionProvider.Provider value={functions}>
{children}
    </FunctionProvider.Provider>
  )
}
export default Functions