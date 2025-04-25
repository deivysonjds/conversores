"use client"
import { useState } from "react"

export default function NavHome(){
    const [submenuOpen, setSubmenuOpen] = useState(false)

    const togleSubmenu = ()=>{
        setSubmenuOpen(!submenuOpen)
    }
    return (
        <>
            <nav className="flex flex-row justify-end gap-10 items-center text-white h-[80] font-bold bg-blue">
                <div>
                    <a href="./">
                        Home
                    </a>
                </div>
                <div onMouseEnter={togleSubmenu} onMouseLeave={togleSubmenu}>
                    <div className="flex flex-row gap-1 items-center">
                        <span>
                            Conversores 
                        </span>
                        <img className={submenuOpen ? "rotate-180 size-[20]" : "size-[20]"} src="seta.png" alt="seta para baixo" />
                    </div>
                    { submenuOpen && (
                        <div className="absolute flex flex-col bg-blue justify-center items-center gap-2 p-[20] rounded-bl-[10] rounded-br-[10] w-[125]">
                            <a href="./moeda">
                                moeda
                            </a >
                            <a href="./temperatura">
                                temperatura
                            </a>
                            <a href="./distancia">
                                distancia
                            </a>
                        </div>
                    )}
                </div>
                <div className="mr-[50px]">
                    <a href="./sobre">
                        sobre
                    </a>
                </div>
            </nav>
        </>
    )
}