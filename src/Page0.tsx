import React, {useCallback, useEffect} from "react";
import {getUser} from "./api";
import {useFormContext} from "./FormContext";
import {usePaginatedFormControl} from "./PaginatedForm";

export const Page0: React.FC = (props) => {
  const [user, setUser] = useFormContext().page0.user;
  const { nextPage } = usePaginatedFormControl();

  const fetchUser = useCallback(async () => {
    setUser(await getUser())
  },[setUser])

  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  return (
    <>
      <h1>Page 0</h1>
      <p>{JSON.stringify(user)}</p>
      <button onClick={nextPage}>Next</button>
    </>
  );
}
