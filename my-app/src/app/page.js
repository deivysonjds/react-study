"use client"
import { useState } from "react"

const Dado = ({ valor }) => {  

  const imagens = {  
      1: '/img1.jpg',  
      2: '/img2.jpg',  
      3: '/img3.jpg',  
      4: '/img4.jpg',  
      5: '/img5.jpg',  
      6: '/img6.jpg',  
  };  

  return (  
      <div>  
          <img src={imagens[valor]} alt={`Dado com valor ${valor}`} />  
      </div>  
  );  
};

export default function Home(){
  const [valorDado, setValorDado] = useState(1);  

    const gerarNumeroAleatorio = () => {  
        const numeroAleatorio = Math.floor(Math.random() * 6) + 1;  
        setValorDado(numeroAleatorio); 
    };  

    return (  
        <div>  
            <h1>Lançar o Dado</h1>  
            <Dado valor={valorDado} />  
            <button onClick={gerarNumeroAleatorio}>Lançar Dado</button>  
        </div>  
    );
}
