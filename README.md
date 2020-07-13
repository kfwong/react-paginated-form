## PaginatedForm
Pagination each sub component automatically.
Implemented in React hooks so we can ship the compoenent without extra dependency like redux.

### Usage:

1. Putting any components into children of PaginatedForm will automatically paginate them. You can use on
```typescript jsx
// you can use onChangePage to customize pagination behaviour such as conditionally skip page
const logPage = (oldPage, newPage) => {
    if(newPage === 1) return 2;
    return newPage;
}

<PaginatedForm
      titles={["SelectionForm", "Page1", "Page2", "Page3"]}
      onChangePage={...}
    >
      <SelectionForm/>
      <Page1/>
      <Page2/>
      ...
</PaginatedForm>
```

2. To customize paginated control, optionally import usePaginatedFormControl and destructure it for the methods. 
```typescript jsx
import {usePaginatedFormControl} from "./PaginatedForm";

export const Page1: React.FC = (props) => {
  const { nextPage, previousPage, goto } = usePaginatedFormControl();

  return (
    <>
      <h1>Page 1</h1>
      <p>This is page 1 description.</p>
      <button onClick={previousPage}>Previous</button>
      <button onClick={nextPage}>Next</button>
    </>
  );
}
```
