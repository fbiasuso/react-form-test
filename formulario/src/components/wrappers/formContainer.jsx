import {React, useState, useEffect} from "react";
import {Button} from '../ui/'
import {Form} from "./";
import {Alert} from '../ui/alert';

export const FormContainer = ({children,className = ""}) => {
    const [msg, setMsg] = useState([
      "El campo Nombre no puede estar vacío." ,
      "El campo DNI no puede estar vacío.",
      "El campo Correo no puede estar vacío.",
      "El campo Contraseña no puede estar vacío."
    ])
    const [formSubmit, setFormSubmit] = useState(false)
    const [error, setError] = useState(false)
    const [user, setUser] = useState({
      name: "",
      dni: "",
      email: "",
      password: ""
    });

  /*   useEffect(()=>{
      const isMsgEmpty = !msg ? true : msg.every(mensaje => !mensaje) ? true : false ;
      console.log("Efect: ",msg," Efecy: ",isMsgEmpty)
      isMsgEmpty ? (setError(false),setFormSubmit(true)) : setError(true);
    },[msg]); */
    
   
    const style = `d-flex flex-column justify-content-center align-items-center ${className}`

    if (formSubmit) {
      return <Alert 
                id="successSubmit"
                msg="Formulario enviado correctamente" 
                type="success" 
                className="d-flex align-items-center"
              />;
    }
  
    
  const handleInputs = (e) =>{
    setUser({...user, [e.target.name]: e.target.value})  
  }
  
    const validations= () =>{
        const name = !user.name ? "El campo Nombre no puede estar vacío." : ""; 
        const dni = !user.dni ? "El campo DNI no puede estar vacío." : "";
        const email = !user.email ? "El campo Correo no puede estar vacío." : "";
        const password = !user.password ? "El campo Contraseña no puede estar vacío." : "";
       
        setMsg([name,dni,email,password]);
        (!name && !dni && !email && !password) ? (setError(false),setFormSubmit(true)) : setError(true);
               
    }
 
    return (
        <>
        <div className={style}>
        {error && <Alert id="ErrorMsg" msg={msg} type="danger" className="d-flex align-items-center"/>}
        <Form onsubmit={(event)=>event.preventDefault()}>
            <input className="form-control mb-3" type="text" name="name" id="name" placeholder='Nombre' onBlur={(event)=>handleInputs(event)}/>
            <input className="form-control mb-3" type="text" name="dni" id="dni" placeholder='DNI'onBlur={(event)=>handleInputs(event)}/>
            <input className="form-control mb-3" type="text" name="email" id="email" placeholder='Correo' onBlur={(event)=>handleInputs(event)}/>
            <input className="form-control mb-3" type="text" name="password" id="password" placeholder='Contraseña' onBlur={(event)=>handleInputs(event)}/>
            <Button type="button" className="btn btn-primary w-50 align-self-center mt-2" name="Enviar" onclick={()=>validations()}/>
        </Form>
        </div>
        </>      
    );
}