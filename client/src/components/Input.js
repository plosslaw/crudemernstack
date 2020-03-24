import React from 'react'

const Input = (props)=>{
    let capitalized = props.value
    if(typeof capitalized === 'string'|| capitalized instanceof String){
        const temp = capitalized.replace(/^\w/, char=>char.toUpperCase())
        capitalized = temp
    }
    return (
        <>
        <label htmlFor={props.name}>{props.labelName} </label>
        <input type="text" 
            className="form-control mb-1" 
            name={props.name} 
            placeholder={props.placeholder}
            onChange={props.handleChange}
            value={capitalized}></input>
        </>
    )

}


export default Input