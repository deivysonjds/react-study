"use client"
import { useState } from "react"
import "./style.css"
import Dado from "./components/dado";
import BackHome from "../components/backhome";
import { Placar } from "./components/placar";

export default function Home(){
    const [dado1, setDado1] = useState(0);  
    const [dado2, setDado2] = useState(0);  
    const [vitorias1, setVitorias1] = useState(0);  
    const [vitorias2, setVitorias2] = useState(0);  
    const [vencedor, setVencedor] = useState(0)

    const gerarNumeroAleatorio = async (jogador) => {  
        
        if(vencedor != 0){
            alert(`Jogador ${vencedor} já venceu, reinicie o jogo`)
            return;
        }
        
        const numeroAleatorio = Math.floor(Math.random() * 6) + 1;  
        switch (jogador) {
            case 1:
                if (dado1!=0){
                    window.alert("Dado já lançadoo, vez do oponente!")
                    return
                }
                setDado1(numeroAleatorio)
                
                if(dado2!=0){
                    setTimeout(()=>verificarGanhador(numeroAleatorio, dado2),2000)
                }
                
                break;
                case 2:
                    if (dado2!=0){
                        window.alert("Dado já lançadoo, vez do oponente!")
                        return
                    }
                setDado2(numeroAleatorio)
                

                if(dado1!=0){
                    setTimeout(()=>verificarGanhador(dado1, numeroAleatorio),2000)
                    
                }
                
                break;
                
                default:
                alert("teste")
                break;
        }
        
    };  

    const verificarGanhador = (dado1, dado2)=>{

        if(dado1>dado2){
            if(vitorias1+1>=3){
                setVencedor(1)
                alert("Vencedor: Jogador 1!")
            }
            setVitorias1(vitorias1+1)
        }
        
        if(dado2>dado1){
            if(vitorias2+1>=3){
                setVencedor(2)
                alert("Vencedor: Jogador 2!")
            }
            setVitorias2(vitorias2+1)
        }

        if(dado1==dado2){
            window.alert("Empate! jogue os dados novamente!")
        }
        

        setDado1(0)
        setDado2(0)
    }
    
    const reiniciar = ()=>{
        setDado1(0)
        setDado2(0)
        setVencedor(0)
        setVitorias1(0)
        setVitorias2(0)
        alert("Jogo reiniciado!")
    }

    return (  
        <div>
            <BackHome />
            <h1>Lançar o Dado</h1>
            <div className="dados">
                <div className="dado">
                    <Dado valor={dado1} />  
                    <button onClick={()=>gerarNumeroAleatorio(1)}>Lançar Dado</button>  
                </div>
                <div className="dado">
                    <Dado valor={dado2} />  
                    <button onClick={()=>gerarNumeroAleatorio(2)}>Lançar Dado</button>  
                </div>
            </div>
            <Placar reiniciar={reiniciar} vitoriasJogado1={vitorias1} vitoriasJogado2={vitorias2} isVencedor={vencedor!=0}/>
        </div>  
    );
}
