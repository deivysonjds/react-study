"use client"
import "./square.css"
import { useState } from "react"

export default function Square({player}){

    const [selected, setSelected] = useState(false)

    function selectSquare(){
        console.log(selected);
        if(!selected){

            setSelected(true)
        }
    }

    return (
        <>
            <div onClick={()=>selectSquare()} className="square">
                {selected && <div>
                    
                </div>
                }
            </div>
        </>
    )
}

