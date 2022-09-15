This is a simple React App that generates form components using JSon Schema.

This uses 'react-jsonschema-form' component to convert JsconSchema into form components.

Example:
From given Schema:

``` [
    {
        "title": "Record of employee",
        "fields": [
            {
                "field_id": "id",
                "field_label": "ID of employee",
                "field_mandatory": "yes",
                "field_placeholder": "Enter employee ID",
                "field_type": "text",
                "field_value": ""
            },
            {
                "field_id": "Name",
                "field_label": "Name of employee",
                "field_mandatory": "yes",
                "field_placeholder": "Enter name",
                "field_type": "text",
                "field_value": ""
            },
            {
                "field_id": "email",
                "field_label": "Email of employee",
                "field_mandatory": "yes",
                "field_placeholder": "Enter email",
                "field_type": "text"
            },
            {
                "field_id": "age",
                "field_label": "Age of employee",
                "field_mandatory": "yes",
                "field_placeholder": "Enter age",
                "field_type":"text"
            },
            {
                "field_id": "contact",
                "field_label": "Contact No.",
                "field_mandatory": "yes",
                "field_placeholder": "Enter contact no.",
                "field_type": "text"
            }
            
        ]
    }
]
```

It generates Form Component:

![image](https://user-images.githubusercontent.com/61266636/189469023-297adfa2-2fbf-487c-b956-65915f077f31.png)
