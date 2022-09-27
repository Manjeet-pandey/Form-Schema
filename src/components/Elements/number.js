import React, {useContext} from 'react'
import { FormContext } from '../../FormContext'

const Number = ({ field_id, field_label, field_placeholder, field_value }) => {
    const {handleChange} = useContext(FormContext)
    if (field_id === "age")
    {
        return (
            
            <div className="mb-3">
                <label className="form-label">{field_label}</label>
                <input type="number" className="form-control" id={field_id}
                    placeholder={field_placeholder ? field_placeholder : ''}
                    value={field_value} 
                    onChange={event=>handleChange(field_id, event)} required max={100} 
                />
                
            </div>
            
            
        )

    }
    else
    {
        return (
           
            <div className="mb-3">
                <label className="form-label">{field_label}</label>
                <input type="tel" className="form-control" id={field_id}
                    placeholder={field_placeholder ? field_placeholder : ''}
                    value={field_value} 
                    onChange={event=>handleChange(field_id, event)} pattern="[0-9]{10}" required title='10-digit number'
                />
                
            </div>
           
        )
    }
   
}

export default Number