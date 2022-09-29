import React, {useState, useEffect} from 'react'
import api from '../Api';
import { Container } from '../style';
import { Link } from 'react-router-dom';





interface  IData {

  number: number;
  message: string;
  

}





const Foto: React.FC= () => {
  const [produtos, setProdutos] = useState< IData[]>([]);
  const [text, setText] = useState("");
  const [endImg, setEndImg] = useState('')

  useEffect(() => {
    Submit();
  });

  async function Submit() {
  
  await api.post('/send_message',  {number: '62994719784', message: text},{ headers: { "Content-Type": "application/json", "Authorization": '0uyw8haw86mzelmsug01yusrqb7raj'  } })
  .then(response => console.log(response.data))
  .catch(err => console.error(err));





  }





  return(
    
 <Container>
 <div className="img-foto">
<div className='titulo'>
  <h1 className='titulo-two'>Envio de imagens</h1>
  <p className='titulo-tree'></p>
</div>

<div >
<div className='form'>
<form >
  <label>
    <h2>Adicione sua menssagem</h2>
    
    <input type="text" className='text' placeholder='Menssagem' name="name" value={text} onChange={(e) => {setText(e.target.value)}} />
    <input type="file"   className='text-two' placeholder='Url da imagem' name="image" value={endImg} onChange={(e) => {setText(e.target.value)}} />
   
 
  </label>
</form>
<button onClick={Submit} className="buttom">Enviar</button>

<div className="img-foto1">
  <div className="img-foto2">
<img className="img-foto3" src="p1.png"/>
</div>
<div className="nome-whats1">
<p className="nome-whats">{text}</p>
</div>
<div className="buttoms">
<button className="buttom"><Link to="/list">Texto</Link></button>
<button className="buttom-text"><Link className="link" to="/foto">Imagens</Link></button>
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



export default Foto;