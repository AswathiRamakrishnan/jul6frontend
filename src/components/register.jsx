import { useState } from "react"

function Register(){
    let[ userName,setUserName]=useState('');
    let [email,setEmail]=useState('');
    let[password,setPassword]=useState('');
    let[rePassword,setRePassword]=useState('');
    let [result,setResult]=useState('');

    function handleRegister(){
        setResult({userName, email, password, rePassword})
    }      

    
    return(
        <div style={{display: "flex",justifyContent: "center",padding:"100px"}}>
<div style={{border: '1px solid black', padding :'10px',gap: '1px',backgroundColor:"moccasin"}}>
    <h1>
        Sign up
    </h1>
    
    <div style={{display: 'flex',flexDirection: 'column', gap: '20px',borderRadius:"20px"}}>   
       
<input type="text" onChange={(e) => setUserName(e.target.value)} placeholder="Enter the username"></input>
<input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter the Email"></input>
<input type="text" onChange={(e) => setPassword(e.target.value)} placeholder="Enter the password "></input>
<input type="text" onChange={(e) => setRePassword(e.target.value)} placeholder="Confirm password"></input>
</div >
<div style={{justifyContent:"center",WebkitAlignItems:"center"}}>
<button style={{padding:'4px',justifyContent:"center",paddingLeft:"60px",paddingRight:"70px",borderRadius:"70px",backgroundColor:"salmon",fontWeight:"bolder"}}>
    
sign up
</button>
</div>
        </div>
        </div>
    );
}

export default Register;