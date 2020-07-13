import React from "react";
import {usePaginatedFormControl} from "../PaginatedForm";
import {FormFactory} from "../FormFactory";

interface MixFormProps {
  data: any;
}

export const MixForm: React.FC<MixFormProps> = (props) => {
  const { nextPage, previousPage } = usePaginatedFormControl();
  const { data } = props;

  return (
    <>
      <button onClick={previousPage}>Previous</button>
      <h1>{data.title}</h1>
      {
        data.questions.map((question) => <FormFactory data={question}/>)
      }
      <button onClick={nextPage}>Next</button>
    </>
  );
}
