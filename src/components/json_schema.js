import Form from 'react-jsonschema-form'

const schema = {
  type: "object",
  required: ["employeeId", "mobileNumber", "gender", "multipleSelect"],
  properties: {
    employeeId: {
      type: "string",
      title: "Employee Id"
    },
    firstName: {
      type: "string",
      title: "First Name",
      prefix: "Mr."
    },
    lastName: {
      type: "string",
      title: "Last Name",
      suffix: "DONE"
    },
    email: {
      type: "string",
      title: "Email/User Name",
      format: "email"
    },
    mobileNumber: {
      type: "string",
      title: "Mobile No."
    },
    callbackNumber: {
      type: "string",
      title: "Callback No."
    },
    ellisionId: {
      type: "string",
      title: "Ellision Id",
      disabled: true
    },
    gender: {
      type: "string",
      title: "Gender",
      anyOf: [
        {
          type: "string",
          title: "Male",
          enum: ["Male"]
        },
        {
          type: "string",
          title: "Female",
          enum: ["Female"]
        }
      ],
    }
    
    
  
    }
  
};



const MyForm = () => { return(

<Form schema={schema}  />
) }
export default MyForm;