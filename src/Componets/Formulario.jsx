import React, {  useState} from "react";


const Formulario =(props) =>{
    const[firstName,setFirstName]= useState("");
    const[lastName,setLastName]= useState("");
    const[email,setEmail]= useState("");
    const[password,setPassword]= useState("");
    const[confirmPassword,setConfirmPassword]= useState("");
    const[hasBeenSumitted, setHasBeenSubmitted]= useState(false);
    const[errorFirstName, setErrorfirstName]= useState("");
    const[errorLastname, setErrorlastName]= useState("");
    const[errorEmail, setErroremail]= useState("");
    const[errorPassword, setErrorPassword]= useState("");
    const[errorConfirmPassword, setErrorConfirmPassword]= useState("");

    const handleFirstName =(e) => {
        setFirstName(e.target.value);
        if(e.target.value.length <1){
            setErrorfirstName("El campo es requerido!");
        } else if(e.target.value.length <2){
             setErrorfirstName("El Nombre debe tener al menos 2 caracteres!")
        } else {
             setErrorfirstName(" ");
        }
    }
    const handleLastName =(e) => {
        setLastName(e.target.value);
        if(e.target.value.length <1){
            setErrorlastName("El campo es requerido!");
        } else if(e.target.value.length <2){
            setErrorlastName("El Apellido debe tener al menos 2 caracteres!")
        } else {
            setErrorlastName(" ");
        }
    }
    const handleEmail =(e) => {
        setEmail(e.target.value);
        if(e.target.value.length <1){
            setErroremail("El campo es requerido!");
        } else if(e.target.value.length <5){
            setErroremail("El correo debe tener al menos 5 caracteres")
        } else {
            setErroremail(" ");
        }
    }
    const handlePassword =(e) => {
        setPassword(e.target.value);
        if(e.target.value.length <1){
            setErrorPassword("Password es requerido!");
        } else if(e.target.value.length <8){
            setErrorPassword("La contraseña debe tener al menos 8 caracteres")
        } else {
            setErrorPassword(" ");
        }
    }
     const handleConfirmPassword =(e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value === password){
            setErrorConfirmPassword("");
        } else {
            setErrorConfirmPassword("Las contraseñas deben coincidir")
        } 
        }
        const createUser = (e) =>{
            e.preventDefault();
            const user ={firstName, lastName, email, password, confirmPassword}
            console.log("welcome", user);
            setHasBeenSubmitted(true);
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
           
        };

        return ( 
            <div>
        <form onSubmit={ createUser }>
            {
                 hasBeenSumitted ?
                 <h3>Thank you for submitting the form!</h3> :
                 <h3> Welcome, please submit the form.</h3>  
            }
            <div>
                <label>First Name:</label>
                <input type="text" name= "firstName" onChange={handleFirstName} value= {firstName}/>
                {
                    errorLastname ?
                    <p style={{color:'red'}} className= "error">{ errorLastname }</p> :
                 ''
                }
            </div>
            <div>
                <label>Last Name:</label>
                <input type="text" name= "lastName" onChange={handleLastName} value= {lastName}/>
                {
                    errorFirstName ?
                    <p style={{color:'red'}}>{ errorFirstName }</p> :
                 ''
                }
            </div>
            <div>
                <label>Email:</label>
                <input type="text" name="email" onChange={handleEmail} value= {email}/>
                {
                    errorEmail ?
                    <p style={{color:'red'}} className= "error">{ errorEmail }</p> :
                 ''
                }
            </div>
            <div>
                <label>Password:</label>
                <input type="password" name= "password" onChange={handlePassword} value= {password}/>
                {
                    errorPassword ?
                    <p style={{color:'red'}} className= "error">{ errorPassword }</p> :
                 ''
                }
            </div>
            <div>
                <p>Conciden : {confirmPassword=== password ? "si": "No"}</p>
                <label>Confirm Password:</label>
                <input type="password" name= "confirmPassword" onChange={handleConfirmPassword} value= {confirmPassword}/>
                {
                    errorConfirmPassword ?
                    <p style={{color:'red'}} className= "error">{ errorConfirmPassword }</p> :
                 ''
                }
            </div>
            
            <input type="submit" value="Create User"/>
        </form>
       
        </div>
    )

         
    }
 
export default Formulario;