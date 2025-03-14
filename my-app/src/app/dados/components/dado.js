export default function Dado({ valor }) {  

  const imagens = {  
      1: '/dados/lado1.jpeg',  
      2: '/dados/lado2.jpeg',  
      3: '/dados/lado3.jpeg',  
      4: '/dados/lado4.jpeg',  
      5: '/dados/lado5.jpeg',  
      6: '/dados/lado6.jpeg',  
  };  

  return (  
      <div>  
          <img src={imagens[valor]} alt={`Dado com valor ${valor}`} />  
      </div>  
  );  
};