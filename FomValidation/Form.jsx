import "./Form.css"
import { useState } from "react";

const  Form = (props)  => {
  const [focused, setFocused] = useState(false);
  const {label, errorMessage,onChange,id, ...inputProps} = props;
  const handleFocus = (e) => {
    setFocused(true);
  };
  // focus, span
  return (
    <div className='forminput'>
     <label>{label}</label>
     <input {...inputProps} 
      onBlur={handleFocus}
      onFocus={() =>
        inputProps.name === "confirmPassword" && setFocused(true)
      }
      focused={focused.toString()} onChange={onChange}/>
     <span>{errorMessage}</span>
    </div>
  )
}

export default Form;