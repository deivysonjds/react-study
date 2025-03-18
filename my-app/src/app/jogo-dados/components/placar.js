import "../css/placar.css"

export function Placar({vitoriasJogado1, vitoriasJogado2, isVencedor, reiniciar}){

    return (
        <>
            <div className="container-placar">
                <div className="line-placar">
                    <div>
                        <p>
                            jogador 1
                        </p>
                    </div>
                    <div>
                        <p>
                            jogador 2
                        </p>
                    </div>
                </div>
                <div className="line-placar">
                    <div>
                        <p>
                            {vitoriasJogado1}
                        </p>
                    </div>
                    <div>
                        <p>
                            {vitoriasJogado2}
                        </p>
                    </div>
                </div>
                { isVencedor && <div>
                    <button onClick={()=>reiniciar()}>Reiniciar</button>
                </div>
                }
            </div>
        </>
    )
}