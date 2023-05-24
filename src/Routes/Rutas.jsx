import { Route, Routes } from "react-router-dom"

import {Home} from "../Home/Home"
import {Members} from "../Members/Members"
import{Menu} from "../shared/Menu/Menu"
import { Carga } from "../Hook/Carga"
import { Music } from "../Music/Music"

export function Rutas(){
    return(
        <>
        <Menu/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/integrantes" element={<Members />} />
            <Route path="/hooks" element={<Carga />} />
            <Route path="/musica" element={<Music />} />
        </Routes>
        
        </>
       
        
        
    )
}