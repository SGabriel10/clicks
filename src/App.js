import './App.css';
import {useState,useEffect} from 'react';
import ListUsers from './components/ListUsers';
const useContador = inicial=> {
  const [contador,setContador] = useState(inicial)
  const incrementar= () =>{
    setContador(contador + 1)
  }
  const reiniciar = ()=> { 
    setContador(0)
  }
  return {contador, incrementar, reiniciar}
}
function App() {
  const{contador, incrementar,reiniciar} = useContador(0); 
  useEffect(()=>{
    document.title = `Contando ${contador}`;
  });
  
  return (
    <div className="App">
      <p>{contador}</p>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={reiniciar}>reiniciar</button>
      <ListUsers/>
    </div>
  );
}

export default App;
