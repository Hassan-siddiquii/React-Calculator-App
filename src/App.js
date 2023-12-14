import React,{useState} from 'react'
import './App.css';

function App() {
  const[result, setResult]=useState('');
  function click(event){
  setResult(result.concat(event.target.value))
  }
function cLear(){
setResult('');
}
function calculate(){
  setResult(eval(result).toString());
}
  return (
     <div class="calculator">
        <input type="text" placeholder="0" id="screen" value={result} />
        <input type="button" value="AC" className="integerwt dark button" onClick={cLear} />
        <input type="button" value="%" className="integer dark button"onClick={click}/>
        <input type="button" value="/" className="integer orng button"onClick={click}/>
        <input type="button" value="7" className="integer button"onClick={click}/>
        <input type="button" value="8" className="integer button"onClick={click}/>
        <input type="button" value="9" className="integer button"onClick={click}/>
        <input type="button" value="*" className="integer orng button"onClick={click}/>
        <input type="button" value="4" className="integer button"onClick={click}/>
        <input type="button" value="5" className="integer button"onClick={click}/>
        <input type="button" value="6" className="integer button"onClick={click}/>
        <input type="button" value="-" className="integer orng button"onClick={click}/>
        <input type="button" value="1" className="integer button"onClick={click}/>
        <input type="button" value="2" className="integer button"onClick={click}/>
        <input type="button" value="3" className="integer button"onClick={click}/>
        <input type="button" value="+" className="integer orng button"onClick={click}/>
        <input type="button" value="0" className="integerwt button" id="obtn"onClick={click}/>
        <input type="button" value="." className="integer button"onClick={click}/>
        <input type="button" value="=" className="integer orng button" id="ebtn" onClick={calculate} />
    </div>
  );
}

export default App;
