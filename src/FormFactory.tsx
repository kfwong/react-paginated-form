import React from "react";

// checkbox
interface CheckboxGroupProps {
  text: string
  type: string
  options: {
    label: string
    description?: string
  }[]
}
const CheckboxGroup: React.FC<CheckboxGroupProps> = (props) => (
  <>
    <h2>{props.text}</h2>
    {
      props.options.map((option) => (
        <>
          <input type="checkbox"/>
          <label>{option.label}</label>
          <p>{option.description}</p>
        </>
      ))
    }
  </>
)

// dropdown
interface DropdownProps {
  text: string,
  type: string,
  options: { label: string }[]
}

const Dropdown: React.FC<DropdownProps> = (props) => (
  <>
    <h2>{props.text}</h2>
    <select>
      {
        props.options.map((option) => <option>{option.label}</option>)
      }
    </select>
    <br/>
  </>
)

// yesnocheckbox
interface YesNoCheckBoxProps {
  text: string,
  type: string,
  options: { label: string }[]
}

const YesNoCheckBox: React.FC<YesNoCheckBoxProps> = (props) => (
  <>
    <h2>{props.text}</h2>
    <button>yes</button>
    <button>no</button>
  </>
)


interface FormFactoryProps {
  data: YesNoCheckBoxProps | DropdownProps | CheckboxGroupProps;
}

export const FormFactory:React.FC<FormFactoryProps> = (props) => {
  switch(props.data.type.toLowerCase()) {
    case "checkbox":
      return <CheckboxGroup {...props.data } />
    case "dropdown":
      return <Dropdown {...props.data } />
    case "yesnocheckbox":
      return <YesNoCheckBox {...props.data } />
    default:
      return null;
  }
}
