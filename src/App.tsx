import React from 'react';
import {PaginatedForm} from "./PaginatedForm";
import { FormContextProvider} from "./FormContext";
import {SelectionForm} from "./pages/SelectionForm";
import {MixForm} from "./pages/MixForm";

const formData = require('./form.json')

interface FormProps {
  data: any;
}

const Form: React.FC<FormProps> = (props) => {
  console.log(props.data);
  const selectionFormData = props.data.sections[0];
  const mixFormData = props.data.sections[1];
  return (
    <FormContextProvider>
      <PaginatedForm titles={[selectionFormData.title, mixFormData.title]} >

        <SelectionForm data={selectionFormData}/>
        <MixForm data={mixFormData}/>

      </PaginatedForm>
    </FormContextProvider>
  )
}


const App = () => <Form data={formData} />

export default App;
