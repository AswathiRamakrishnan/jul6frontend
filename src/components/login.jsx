function Login(){
    return(
        <div style={{justifyContent: "center",padding:"80px",backgroundImage: 'linear-gradient(to right, #ebf8ff, #cfe3ff)',width:"25%",marginLeft:"500px",boxShadow:'0 0 0 2px #3b82f6',boxShadow:'0 0 0 2px transparent'}}>
            
    
<div style={{border: '1px solid black', padding :'10px',gap: '1px',backgroundColor:"cadetblue",boxShadow:'0 0 0 2px transparent',boxShadow:'0 0 0 2px #3b82f6'}}>
    <h1>
        Login
    </h1>
    
    <div style={{display: 'flex',flexDirection: 'column', gap: '20px'}}>   
       
<input type="text" placeholder="Enter the username"></input>
<input type="text" placeholder="Enter the password "></input>
</div>
<button style={{paddingLeft:'50px',paddingRight:"75px",borderRadius:"200px",fontWeight:"bolder",backgroundColor:"thistle",marginLeft:"100px"}}>
    
Login
</button>
        </div> 

           
                <div style={{display:"flex",flexDirection:"row",marginLeft:"100px"}}>
               
                <h5 style={{display:"flex",flexDirection:"row",}}>have'nt created an account?</h5>
                </div>
                <div style={{marginLeft:"150px"}}>

        <a href="/register" style={{
          fontSize: '0.875rem',
          fontWeight: '500',
          textDecoration: 'none',
          transition: 'text-decoration-color 0.2s'
        }} onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
           onMouseLeave={(e) => e.target.style.textDecoration = 'none'}>
          sign up
        </a>
        </div>
        </div>
    )
}

export default Login;