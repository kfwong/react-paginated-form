import React, {useState} from "react";

interface BreadcrumbProps {
  breadcrumbs: string[];
  selectedIndex: number;
  // optional
  onClick?: (oldIndex, newIndex) => number
}
export const Breadcrumb:React.FC<BreadcrumbProps> = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const onSelectedHandler = (index) => {
    if (index > props.breadcrumbs.length - 1) return;
    if (index < 0) return;
    const targetIndex = props.onClick?.(selectedIndex, index) || index;
    setSelectedIndex(targetIndex);
  }

  return <>
    <ul>
      {props.breadcrumbs.map((breadcrumb, index) => {
        if(props.selectedIndex === index) return <li onClick={() => onSelectedHandler(index)} style={{color:"red"}} key={index}>{breadcrumb}</li>
        return <li onClick={() => onSelectedHandler(index)} key={index}>{breadcrumb}</li>
      })}
    </ul>
  </>;
}
