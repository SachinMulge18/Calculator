import React, {useState, useEffect} from 'react'
import NumberFormat from 'react-number-format';
import styles from './App.module.css'
const  App = () => {

  const [preState, setPrevState] = useState('');
  const [currState, setCurrState] = useState('');
  const [input, setInput] = useState("0");
  const [operator, setOperator] = useState(null);
  const [total, setTotal] = useState(false);

  const inputNum = (event) => {
    if(currState.includes(".") && event.target.innerText === ".") return;
    
    if(total){
      setPrevState("");
    }
    currState 
      ? setCurrState ((pre) => pre + event.target.innerText) 
      : setCurrState(event.target.innerText);
    setTotal(false)
  };

  useEffect(() => {
    setInput(currState)
  }, [currState]);

  useEffect(()=>{
    setInput("0")
  },[])

  const operatorType = (event) => {
    setTotal(false);
    setOperator(event.target.innerText)
    if(currState === "") return 
    if(preState !== ""){
      equals()
    }
    else{
      setPrevState(currState)
    setCurrState("")
    }
  };

  const equals = (event) => {
    if(event?.target.innerText === "="){
    setTotal(true)
  };

  let cal 
  switch (operator) {
    case "/":
      cal = String(parseFloat(preState) / parseFloat(currState)
      );
      break;

      case "+":
      cal = String(parseFloat(preState) + parseFloat(currState)
      );
      break;

      case "X":
      cal = String(parseFloat(preState) * parseFloat(currState)
      );
      break;

      case "-":
      cal = String(parseFloat(preState) - parseFloat(currState)
      );
      break;  
    default:
      return
  }
setInput("")
setPrevState(cal);
setCurrState("");
} 

const plusminus = () =>{
  if(currState.charAt(0) === "-"){
    currState(currState.substring(1));
  }else{
    setCurrState("-" + currState);
  }
}

  const percent = () => {
    preState ? setCurrState(String(parseFloat(currState)/100 *
    preState)) : setCurrState (String(parseFloat(currState) / 100));
  }

  const reset = () => {
    setPrevState("")
    setCurrState("");
    setInput("0")
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.screen}>
            {input !== "" || input === "0" ? 
             <NumberFormat value={input} displayType={"text"}
             thousandSeparator={true} /> : <NumberFormat value={preState} 
             displayType={'text'} thousandSeparator={true} /> }
          
          </div>
            <div className={`${styles.btn} ${styles.btnGray}`} onClick={reset}>AC</div>
            <div className={`${styles.btn} ${styles.btnGray}`} onClick={percent}>%</div>
            <div className={`${styles.btn} ${styles.btnGray}`} onClick={plusminus}>+/-</div>
            <div className={`${styles.btn} ${styles.btnOrange}`} onClick={operatorType}>/</div>
            
            <div className={styles.btn} onClick={inputNum}>7</div>
            <div className={styles.btn} onClick={inputNum}>8</div>
            <div className={styles.btn} onClick={inputNum}>9</div>
            <div className={`${styles.btn} ${styles.btnOrange}`} onClick={operatorType}>X</div>
            <div className={styles.btn} onClick={inputNum}>4</div>
            <div className={styles.btn} onClick={inputNum}>5</div>
            <div className={styles.btn} onClick={inputNum}>6</div>
            <div className={`${styles.btn} ${styles.btnOrange}`} onClick={operatorType}>+</div>
            <div className={styles.btn} onClick={inputNum}>1</div>
            <div className={styles.btn} onClick={inputNum}>2</div>
            <div className={styles.btn} onClick={inputNum}>3</div>
            <div className={`${styles.btn} ${styles.btnOrange}`} onClick={operatorType}>-</div>
            <div className={styles.btnZero} onClick={inputNum}>0</div>
            <div className={styles.btn} onClick={inputNum}>.</div>
            
            <div className={styles.btn} onClick={equals}>=</div>
  
          
        </div>
      </div>
    </>
  )
}
export default App