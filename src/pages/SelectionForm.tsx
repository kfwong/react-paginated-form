import React from "react";
import {usePaginatedFormControl} from "../PaginatedForm";
import {FormFactory} from "../FormFactory";

interface SelectionFormProps {
  data: any;
}

export const SelectionForm: React.FC<SelectionFormProps> = (props) => {
  const { nextPage } = usePaginatedFormControl();
  const { data } = props;

  return (
    <>
      <h1>{data.title}</h1>
      {
        data.questions.map((question) => <FormFactory data={question}/>)
      }
      <button onClick={nextPage}>Next</button>
    </>
  );
}
