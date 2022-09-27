import React, {useContext} from 'react'
import { FormContext } from '../../FormContext'

const Email = ({ field_id, field_label, field_placeholder, field_value,field_error }) => {
    const {handleChange} = useContext(FormContext)
   
    return (
        <div>
    <div className="mb-3">
      <label >{field_label}</label>
      <input type="email" className="form-control" id={field_id} placeholder={field_placeholder ? field_placeholder : ''}
                value={field_value} 
                onChange={event=>handleChange(field_id, event)} required></input>
    </div>
        <span>{field_error}</span>
    </div>
    )
}

export default Email