"use client"
import { useState } from "react"

export default function NavHeader(){
    const [submenuOpen, setSubmenuOpen] = useState(false)

    const togleSubmenu = ()=>{
        setSubmenuOpen(!submenuOpen)
    }
    return (
        <>  
            <header>
                <nav className=" flex flex-row items-center justify-between bg-blue text-white h-[80] font-bold">
                    
                        <span className="text-[30px] ml-[30px]">
                            Conversor fácil
                        </span>
                    
                    <div className="flex flex-row justify-end gap-10 items-center ">
                        <div className="hover:scale-105">
                            <a href="./">
                                Home
                            </a>
                        </div>
                        <div onMouseEnter={togleSubmenu} onMouseLeave={togleSubmenu}>
                            <div className="flex flex-row gap-1 items-center hover:scale-105">
                                <span>
                                    Conversores 
                                </span>
                                <img className={submenuOpen ? "rotate-up size-[20]" : "rotate-down size-[20]"} src="seta.png" alt="seta para baixo" />
                            </div>
                            { submenuOpen && (
                                <div className="absolute flex flex-col bg-blue justify-center items-center gap-2 p-[20] rounded-bl-[10] rounded-br-[10] w-[125]">
                                    <a className="hover:scale-105" href="./moeda">
                                        moeda
                                    </a >
                                    <a className="hover:scale-105" href="./temperatura">
                                        temperatura
                                    </a>
                                    <a className="hover:scale-105" href="./medidas">
                                        medidas
                                    </a>
                                </div>
                            )}
                        </div>
                        <div className="hover:scale-105 mr-[50px]">
                            <a href="./sobre">
                                sobre
                            </a>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}