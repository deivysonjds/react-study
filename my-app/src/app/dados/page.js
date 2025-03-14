"use client"
import { useState } from "react"
import Dado from "./components/dado";

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
