import React,{useState} from 'react';
import './App.css';
import Button from './components/Button';

function App() {
  const [ans,setAns] = useState('')
  const [exp,setExp] = useState('');
  let arr = ['7','8','9','+','4','5','6','-','1','2','3','*','C','0','=','/'];
  
  const handle = (e)=>{
    let id = e.target.id;
    if(id === '='){

      if(!exp.length){
        console.log(exp);
        setAns('Error');
      }else if(id === 'C'){
        setExp('');
        setAns('')
      }else if(exp.charAt(exp.length-1)===0 && exp.charAt(exp.length-2)==='/'){
        setAns('Infinity')
      }else{
        let res = eval(exp);
        setAns(res);
      }
    }else{
      setExp(prev=>prev+id)
      
    }
  }
  
  return (
    <div className="App">
      <h1>React Calculator</h1><br/>
      <input value={exp}  readOnly/>
      <div className='ans'>{ans}</div>
      <div className='btns' onClick={(e)=>handle(e)}>
        {
          arr.map((ele)=>{
            return <Button ele={ele}/>
          })
        }


      </div>
    </div>
  );
}

export default App;
