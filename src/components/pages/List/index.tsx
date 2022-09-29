import React, {useState, useEffect} from 'react'
import api from './Api';
import { Container } from './style';
import { Link } from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner'





interface  IData {

  number: number;
  message: string;
}
const List: React.FC= () => {
  const [produtos, setProdutos] = useState< IData[]>([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);


  function Submit() {
  
  api.post('/send_message',  {number: '62994719784', message: text},{ headers: { "Content-Type": "application/json", "Authorization": '0uyw8haw86mzelmsug01yusrqb7raj'  } })
  .then(response => console.log(response.data))
  .catch(err => console.error(err));


  setLoading(true);
  setTimeout(() => {
    setLoading(false);
  }, 2000);
  }

  return(
    
 <Container>
 <div className="img-foto">
<div className='titulo'>
  <h1 className='titulo-two'>Envio de menssagem</h1>
  <p className='titulo-tree'></p>
</div>

<div >
<div className='form'>
<form >
  <label>
    <h2>Adicione sua menssagem</h2>
    <input type="text" className='text' placeholder='Menssagem' name="name" value={text} onChange={(e) => {setText(e.target.value)}} />
  </label>
</form>
{loading ? <ColorRing  height={77} width={75} /> : <button onClick={Submit}  disabled={loading} className="buttom">Enviar</button>
}

<div className="img-foto1">
  <div className="img-foto2">
<img className="img-foto3" src="p1.png"/>
</div>
<div className="nome-whats1">
<p className="nome-whats">{text}</p>
</div>
<br/>
<br/>
<br/>
<div className="buttoms">
<button className="buttom-text">Texto</button>
<button className="buttom"><Link className="link" to="/foto">Imagens</Link></button>
<button className="buttom">Localização</button>
<button className="buttom">Arquivo</button>
</div>
</div>
</div>
</div>






</div>


 
   </Container>    
  );
}



export default List;