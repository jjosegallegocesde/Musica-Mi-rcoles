import { consultarCanciones } from "../services/servicioCanciones"
import { useState,useEffect } from "react"
export function Music(){

    const [canciones,setCanciones]=useState(null)
    const[estacargando,setEscargando]=useState(true)
    useEffect(function(){

        consultarCanciones().then(function(respuesta){
            console.log(respuesta.tracks)
            setCanciones(respuesta.tracks)
            setEscargando(false)
        })

    },[])

    if(estacargando){
        return(
            <>
                <h1>ESTOY CARGANDO</h1>
            </>
        )
    }else{

        return(
            <>
    
               {
                canciones.map(function(cancion){
                    return(
                        <audio controls src={cancion.preview_url}></audio>
                    )
                })
               }
            
            </>
        )

    }

   

}