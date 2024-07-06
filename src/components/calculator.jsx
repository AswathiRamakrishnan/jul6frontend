import { useState } from 'react';
import axios from 'axios';

function Calculator() {
    let [num1, setNum1] = useState(0);
    let [num2, setNum2] = useState(0);
    let [operator, setOperator] = useState('');
    let [result, setResult] = useState(0);

    // function calculate input values
    function calculate(input) {
        if(num1 == 0) {
            setNum1(input);
        } else {
            setNum2(input);
        }
    }

    //clear

    function clear() {
        setResult(0);
        setNum1(0)
        setNum1(0)
    }

    // operator chooser function

    function ChooseOperator(operand) {
        setOperator(operand);
    }
    

    // result function

    // function handleResult() {
    //     if( operator == '+') {
    //         setResult(num1+num2)
    //     } else if(operator == '-') {
    //         setResult(num1-num2)
    //     }else if(operator == '*') {
    //         setResult(num1*num2)
    //     }else if (operator == '/') 
    //         setResult(num1/num2)
        
    // }


    async function handleResult()  {
        const response = await axios.post('https://backend-l5r2.onrender.com/calculate', {num1,num2,operator});
        console.log(response,'ijkgfgfggfgfgf');
        setResult(response.data)
    }



    

    return(
       <div style={{justifyContent:"center",alignItems:"center",paddingLeft:"500px",flexDirection:"coloum",boxShadow:"5%"}}>

       <div style={{ border:"solid",justifyContent:"center",alignItems:"center",flexDirection:"coloum",height:"200%",width:"30%",paddingRight:"5px",borderRadius:"",backgroundColor:"ivory",color:"black",boxShadow:"5%"}} >
        <div style={{alignItems:"center",paddingLeft:"15px"}}> 
           <h2> Calculator </h2>
        </div>
        <div style={{ display:"flex",height:"30px",width:"150px",paddingLeft:"10px",paddingRight:"13px",backgroundColor:"floralWhite",justifyContent:"space-evenly"}}>
{num1}{operator}{num2}={result}
        </div>
        <div style={{padding:"20px"}}>
            <button style={{height:"30px",width:"30px",padding:"10px",backgroundColor:"white",color:"black",borderRadius:"7px"}} onClick={() => calculate(7)}>7</button>
            <button style={{height:"30px",width:"30px",padding:"10px",backgroundColor:"white",color:"black",borderRadius:"7px"}} onClick={() => calculate(8)}>8</button>
            <button style={{height:"30px",width:"30px",padding:"10px",backgroundColor:"white",color:"black",borderRadius:"7px"}} onClick={() => calculate(9)}>9</button>
            <button style={{height:"30px",width:"30px",padding:"10px",borderRadius:"7px"}} onClick={() => ChooseOperator('+')}>+</button>
            <br />
            <button style={{height:"30px",width:"30px",padding:"10px",backgroundColor:"white",color:"black",borderRadius:"7px"}} onClick={() => calculate(4)}>4</button>
            <button style={{height:"30px",width:"30px",padding:"10px",backgroundColor:"white",color:"black",borderRadius:"7px"}} onClick={() => calculate(5)}>5</button>
            <button style={{height:"30px",width:"30px",padding:"10px",backgroundColor:"white",color:"black",borderRadius:"7px"}} onClick={() => calculate(6)}>6</button>
            <button style={{height:"30px",width:"30px",padding:"10px",borderRadius:"7px"}} onClick={() => ChooseOperator('-')}>-</button>
            <br />
            <button style={{height:"30px",width:"30px",padding:"10px",backgroundColor:"white",color:"black",borderRadius:"7px"}} onClick={() => calculate(1)}>1</button>
            <button style={{height:"30px",width:"30px",padding:"10px",backgroundColor:"white",color:"black",borderRadius:"7px"}} onClick={() => calculate(2)}>2</button>
            <button style={{height:"30px",width:"30px",padding:"10px",backgroundColor:"white",color:"black",borderRadius:"7px"}} onClick={() => calculate(3)}>3</button>
            <button style={{height:"30px",width:"30px",padding:"10px",borderRadius:"7px"}} onClick={() => ChooseOperator('*')}>*</button>
            <br />
            <button style={{height:"30px",width:"30px",padding:"10px",backgroundColor:"white",color:"black",borderRadius:"7px"}} onClick={() => calculate(0)}>0</button>
            <button style={{height:"30px",width:"30px",padding:"10px",borderRadius:"7px"}} onClick={clear}>clr</button>
            <button style={{height:"30px",width:"30px",padding:"10px",borderRadius:"7px"}} onClick={handleResult}> =</button>
            <button style={{height:"30px",width:"30px",padding:"10px",borderRadius:"7px"}} onClick={() => ChooseOperator('/')}>/</button>
            <br />

            
        </div>
       </div>
       </div>
    )}

    export default Calculator;
