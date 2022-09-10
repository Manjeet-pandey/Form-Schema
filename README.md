This is a simple React App that generates form components using JSon Schema.

This uses 'react-jsonschema-form' component to convert JsconSchema into form components.

Example:
From given Schema:

``` type: "object",
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
```

It generates Form Component:

![image](https://user-images.githubusercontent.com/61266636/189469023-297adfa2-2fbf-487c-b956-65915f077f31.png)
