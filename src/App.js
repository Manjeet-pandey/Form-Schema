import formJSON from "./Json.json";
import { useEffect, useState} from 'react';
import Element from "./components/Element";
import {FormContext} from "./FormContext";

function App(){
 const [elements, setElements]= useState(null);
 useEffect(() => {
    setElements(formJSON[0])
 },[])

const {title, fields} = elements ?? {}
const handleSubmit = (event) =>{
   event.preventDefault();
   console.log(elements)
   window.alert('Form has been submitted');
   window.location.reload(false)
   
}

const handleChange = (id, event) =>
{
   const newElement = {...elements}
   newElement.fields.forEach(field => {
      const { field_type, field_id}= field;
      if (id === field_id){
         switch (field_type) {
            case 'checkbox':
               field['field_value']= event.target.checked;
               break;
            default:
               field['field_value']= event.target.value;
               break;
         }

      }
      setElements(newElement)
   });
  
  // console.log(elements)
}

 return(
   <FormContext.Provider value={{handleChange}}>
    <div>
    <h1>{title}</h1>
    <form onSubmit={e => handleSubmit(e)}>
    {fields ? fields.map((field, i) => <Element key={i} field={field} />):null}
    <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    
    </div>
    </FormContext.Provider>
 )

}
export default App;