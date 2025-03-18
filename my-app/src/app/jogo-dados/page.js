"use client"
import { useState } from "react"
import "./style.css"
import Dado from "./components/dado";
import BackHome from "../components/backhome";

export default function Home(){
    const [dado1, setDado1] = useState(0);  
    const [dado2, setDado2] = useState(0);  
    const [vitorias1, setVitorias1] = useState(0);  
    const [vitorias2, setVitorias2] = useState(0);  
    const [vencedor, setVencedor] = useState(0)

    const gerarNumeroAleatorio = async (jogador) => {  
        const numeroAleatorio = Math.floor(Math.random() * 6) + 1;  

        switch (jogador) {
            case 1:
                if (dado1!=0){
                    window.alert("Dado já lançadoo, vez do oponente!")
                    return
                }

                if(dado2!=0){
                    verificarGanhador(numeroAleatorio, dado2)
                }
                
                setDado1(numeroAleatorio)
                break;
            case 2:
                if (dado2!=0){
                    window.alert("Dado já lançadoo, vez do oponente!")
                    return
                }

                if(dado1!=0){
                    verificarGanhador(dado1, numeroAleatorio)
                }

                setDado2(numeroAleatorio)
                break;
        
            default:
                alert("teste")
                break;
        }
        
    };  

    const verificarGanhador = (dado1, dado2)=>{
        if(vencedor != 0){
            alert(`Jogador ${vencedor} já venceu, reinicie o jogo`)
            return;
        }

        if(dado1>dado2){
            setVitorias1(vitorias1+1)
        }
        
        if(dado2>dado1){
            setVitorias2(vitorias2+1)
        }


        if(vitorias1>=5){
            setVencedor(1)
            alert("Vencedor: Jogador 1!")
            return
        }else if(vitorias2>=5){
            setVencedor(2)
            alert("Vencedor: Jogador 2!")
            return
        } else {
            setDado1(0)
            setDado2(0)
        }
        
        window.alert("Empate! jogue os dados novamente!")

    }

    return (  
        <div>
            <BackHome />
            <h1>Lançar o Dado</h1>
            <div>
                <div>
                    <Dado valor={dado1} />  
                    <button onClick={()=>gerarNumeroAleatorio(1)}>Lançar Dado</button>  
                </div>
                <div>
                    <Dado valor={dado2} />  
                    <button onClick={()=>gerarNumeroAleatorio(2)}>Lançar Dado</button>  
                </div>
            </div>

        </div>  
    );
}
