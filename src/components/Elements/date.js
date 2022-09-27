import React, {useContext} from 'react'
import { FormContext } from '../../FormContext'

const Date = ({ field_id, field_label, field_value }) => {
    const {handleChange} = useContext(FormContext)
    return (
        <div  className="md-3  datepicker" inline="true">
            <label className='form-label'>{field_label}</label>
        <input placeholder="Select date" type="date" id={field_id} className="form-control" value={field_value} 
                onChange={event=>handleChange(field_id, event)} required ></input>
      </div>
    )
}

export default Date