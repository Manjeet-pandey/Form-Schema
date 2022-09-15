import React from 'react'

const Element = ({field: {field_label, field_placeholder, field_value}} ) => {
    
    return (
        <div className="mb-3">
            <label htmlFor="Input" className="form-label">{field_label}</label>
            <input type="text" className="form-control" placeholder={field_placeholder ? field_placeholder : ''} value={field_value}/>
            
        </div>
    )
}


export default Element;