import React from 'react';
import {PaginatedForm} from "./PaginatedForm";
import {Page0} from "./Page0";
import { FormContextProvider} from "./FormContext";
import {Page1} from "./Page1";
import {Page2} from "./Page2";

const PageWithoutControl = () => <><h1>Page Without Control </h1><p>This is page without control.</p></>;
const Page5 = () => <h1>page5</h1>;

const App = () => {
  const logPage = (oldPage, newPage) => {
    //if(newPage === 1) return 2;
    console.log(`${oldPage} => ${newPage}`)
    return newPage;
  }

  return (
  <FormContextProvider>
    <PaginatedForm
      titles={["Page0", "Page1", "Page2", "Page3"]}
      onChangePage={logPage}
    >
      <Page0/>
      <Page1/>
      <Page2/>
      <PageWithoutControl/>
    </PaginatedForm>
  </FormContextProvider>
  )
}

export default App;
