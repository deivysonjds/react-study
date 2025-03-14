export default function Dado({ valor }) {  

  const imagens = {  
      1: '/lado1.jpeg',  
      2: '/lado2.jpeg',  
      3: '/lado3.jpeg',  
      4: '/lado4.jpeg',  
      5: '/lado5.jpeg',  
      6: '/lado6.jpeg',  
  };  

  return (  
      <div>  
          <img src={imagens[valor]} alt={`Dado com valor ${valor}`} />  
      </div>  
  );  
};