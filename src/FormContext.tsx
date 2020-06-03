import React, {createContext, SetStateAction, useContext, useState} from 'react';

type StateProps<T> = [T, React.Dispatch<SetStateAction<T>> ];

interface FormContextProps {
  page0: {
    user: StateProps<object>
  }
}

const FormContext = createContext({} as FormContextProps);

export const FormContextProvider = (props) => {
  const user = useState({})

  const context = {
    page0: {user}
  };

  return (
    <FormContext.Provider value={context}>
      {props.children}
    </FormContext.Provider>
  )
}

export const useFormContext = () => useContext(FormContext);
