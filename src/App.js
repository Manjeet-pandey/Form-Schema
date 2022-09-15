import formJSON from "./Json.json";
import { useEffect, useState} from 'react';
import Element from "./components/Element";

function App(){
 const [elements, setElements]= useState(null);
 useEffect(() => {
    setElements(formJSON[0])
 },[])

const {title, fields} = elements ?? {}


 return(
    <div>
    <h1>{title}</h1>
    <form>
    {fields ? fields.map((field, i) => <Element key={i} field={field} />):null}
    <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    
    </div>
 )

}
export default App;