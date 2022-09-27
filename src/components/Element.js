import React from 'react'
import Checkbox from './Elements/checkbox';
import Input from './Elements/input';
import Select from './Elements/select';
import Date from './Elements/date';
import Email from './Elements/email';
import Number from './Elements/number';
const Element = ({ field: { field_type, field_id, field_label, field_placeholder, field_value, field_options } }) => {

    switch (field_type) {
        case 'text':
            return (<Input
                field_id={field_id}
                field_label={field_label}
                field_placeholder={field_placeholder}
                field_value={field_value}
                
                                

            />)
        case 'number':
            return (<Number
                field_id={field_id}
                field_label={field_label}
                field_placeholder={field_placeholder}
                field_value={field_value}
                
                                

            />)
        case 'select':
            return (<Select
                field_id={field_id}
                field_label={field_label}
                field_placeholder={field_placeholder}
                field_value={field_value}
                field_options={field_options}
               
            />)
        case 'checkbox':
            return (<Checkbox
                field_id={field_id}
                field_label={field_label}
                field_value={field_value}
                
            />)
        case 'date':
            return (<Date
                field_id={field_id}
                field_label={field_label}
                field_value={field_value}
                
            />)
        case 'email':
        return (<Email
            field_id={field_id}
            field_placeholder={field_placeholder}
            field_label={field_label}
            field_value={field_value}
            
        />)


        default:
            return null;
    }


}

export default Element