
import { useState } from "react"
import Infoform from "./Component/Form.jsx"
import "./app.css"

const App = () => {
 const [values,setvalues] = useState({
  username: "",
  email: "",
  birthday: "",
  password: "",
  confirmPassword: "",
 });

 const input = [
  {
    id:1,
    type:"text",
    name:"username",
    placeholder:"UserName",
    errorMessage:
           "username should be more than 3 letter and less than 16 letters",
    label:"username",
    pattern: "^[A-Za-z0-9]{3,16}$",
    required:true
  },
  {
    id:2,
    type:"email",
    name:"email",
    placeholder:"Email",
    errorMessage:
          "It should be a valid email address!",
    label:"Email",
    required:true
  },
  {
    id: 3,
    name: "birthday",
    type: "date",
    placeholder: "Birthday",
    label: "Birthday",
    required:true
  
  },
  // pattern , onchange , 
  {
    id: 4,
    name: "password",
    type: "password",
    placeholder: "Password",
    errorMessage:
      "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
    label: "Password",
    pattern: "^[A-Za-z0-9]{3,16}$",
    required: true,
  },
  {
    id: 5,
    name: "confirmPassword",
    type: "password",
    placeholder: "Confirm Password",
    errorMessage: "Passwords don't match!",
    label: "Confirm Password",
    pattern: values.password,
    required: true,
  },
 ]

 
 

const handlesumbit = (e) =>{
     e.preventDefault();
     console.log("sumbit");
      
}
const onChange = (e) =>{
    setvalues({...values,[e.target.name]: e.target.value})
}
console.log(values);
  return (
    <div className='app'>
        <form onSubmit={handlesumbit}>
         <h2>REGISTER</h2>
         {input.map((input)=>(
         <Infoform key={input.id} {...input} value={values[input.name]} onChange={onChange}/>    
      
         ))}
         <button>sumbit</button>
             
      </form>
    </div>
  )
}
export default App;  