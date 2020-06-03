import React from "react";

import {usePaginatedFormControl} from "./PaginatedForm";

export const Page2: React.FC = (props) => {
  const { previousPage } = usePaginatedFormControl();

  return (
    <>
      <button onClick={previousPage}>Previous</button>
      <h1>Page 2</h1>
      <p>This is page 2 description.</p>
    </>
  );
}
