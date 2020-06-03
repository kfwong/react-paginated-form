import React from "react";

import {usePaginatedFormControl} from "./PaginatedForm";

export const Page1: React.FC = (props) => {
  const { nextPage, previousPage } = usePaginatedFormControl();

  return (
    <>
      <h1>Page 1</h1>
      <p>This is page 1 description.</p>
      <button onClick={previousPage}>Previous</button>
      <button onClick={nextPage}>Next</button>
    </>
  );
}
