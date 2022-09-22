import React, {useState, useEffect} from 'react'
import api from './Api';
import { Container } from './style';





interface  IData {

  number: number;
  message: string;
  

}





const List: React.FC= () => {
  const [produtos, setProdutos] = useState< IData[]>([]);
  const [text, setText] = useState("");


  function Submit () {
  
  api.post('/send_message',  {number: '62994719784', message: text},{ headers: { "Content-Type": "application/json", "Authorization": '0uyw8haw86mzelmsug01yusrqb7raj'  } })
  .then(response => console.log(response.data))
  .catch(err => console.error(err));





  }


  return(
    
 <Container>
  <div>
<div className='titulo'>
  <h1 className='titulo-two'>Envio de menssagem</h1>
  <p className='titulo-tree'></p>
</div>



<div className='form'>
<form >
  <label>
    <h2>Adicione sua menssagem</h2>
    <input type="text" className='text' placeholder='Menssagem' name="name" value={text} onChange={(e) => {setText(e.target.value)}} />
  </label>
</form>
<button onClick={Submit} className="buttom">Enviar</button>
</div>

<div className='form-two'>
<form >
  <label>
    <h2>Menssagem com imagem</h2>
    <input type="text" className='text' placeholder='Menssagem' name="name" value={text} onChange={(e) => {setText(e.target.value)}} />
    <input type="text" className='text-two' placeholder='Url da imagem' name="name" value={text} onChange={(e) => {setText(e.target.value)}} />
  </label>
</form>
<button onClick={Submit} className="buttom">Enviar</button>
</div>
</div>


 
   </Container>    
  );
}



export default List;