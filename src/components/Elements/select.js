import React, {useContext} from 'react'
import { FormContext } from '../../FormContext'
const Select = ({ field_id, field_label, field_value, field_options }) => {
   
    const {handleChange} = useContext(FormContext)
    return (
        <div className='mb-3'>
            <label className="form-label">{field_label}</label>
            <select className="form-select" defaultValue={"default"}
            onChange={event=>handleChange(field_id, event)}
            >   <option value="default" disabled hidden>{field_value}</option>
                {field_options.length > 0 && field_options.map((option, i) =>
                    <option value={option.option_label} key={i} >{option.option_label}</option>

                )}
            </select>
            
        </div>
    )
}

export default Select