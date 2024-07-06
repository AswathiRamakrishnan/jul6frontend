function Navbar(){
    return(
      <>
      
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",border:"solid",backgroundColor:"lavender",borderRadius:"",padding:"20px"}}>
        
      <h1 style={{align:"center",fontFamily:'courier',fontSize:"40px"}}>
        Vision Vista 
        </h1>
<div style={{fontSize:'20px'}}>

  
  <a href="/home" style={{
          fontSize: '0.875rem',
          fontWeight: '500',
          textDecoration: 'none',
          transition: 'text-decoration-color 0.2s',
        }} 
        onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
           onMouseLeave={(e) => e.target.style.textDecoration = 'none'}>
          Home
        </a>&nbsp;

  <a href="/aboutus" style={{
          fontSize: '0.875rem',
          fontWeight: '500',
          textDecoration: 'none',
          transition: 'text-decoration-color 0.2s',
        }} onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
           onMouseLeave={(e) => e.target.style.textDecoration = 'none'}>
          Aboutus
        </a>&nbsp;

            <a href="/calculator" style={{
          fontSize: '0.875rem',
          fontWeight: '500',
          textDecoration: 'none',
          transition: 'text-decoration-color 0.2s',
        }} onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
           onMouseLeave={(e) => e.target.style.textDecoration = 'none'}>
          Calculator
        </a>&nbsp;
        <a href="/login" style={{
          fontSize: '0.875rem',
          fontWeight: '500',
          textDecoration: 'none',
          transition: 'text-decoration-color 0.2s',
        }} onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
           onMouseLeave={(e) => e.target.style.textDecoration = 'none'}>
          Login
        </a>
</div>
</div>
 </>      
)
}

export default Navbar;
