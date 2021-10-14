import React from 'react';
import { useState } from 'react/cjs/react.development';
//import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) =>{

    const [inputValue,setInputValue] = useState('')
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if ( inputValue.length > 0){
            setCategories(
                categories =>[inputValue,...categories,]
            )
            setInputValue('')
        }

    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type ="text"
                    value = {inputValue}
                    onChange= {handleInputChange}
                />
                <h2>Add Category</h2>
            </form>

        </>
    )

}
/*
AddCategory.propTypes = {
    setCategories: PropTypes.isRequired
}
*/
export default AddCategory