"use client"
import { useEffect, useState } from "react"
import InputConversor from "./inputConversor"
import SelectConversor from "./selectConversor"

export default function Conversor({
    typeConversor,
    options,
    calculate,
    result
}){
    const [valueInitial, setValueInitial] = useState(1)
    const [option1, setOption1] = useState(options[0])
    const [option2, setOption2]= useState(options[1])
    
    useEffect(()=>{
        calculate(option1, option2, valueInitial)
    })

    return (
        <>
            <div className="flex flex-row justify-center items-center p-5 gap-5 bg-blue rounded-b-[20px] rounded-t-[20px] w-150">
                <div>
                    <SelectConversor setOption={setOption1} list={`${typeConversor}-de`} conversao={"de"} options={options} />
                    <InputConversor setValue={setValueInitial} value={valueInitial} readOnly={false}/>
                </div>
                <img src="./seta-direita.png" alt="" />
                <div>
                    <SelectConversor setOption={setOption2} list={`${typeConversor}-para`} conversao={"para"} options={options} />
                    <InputConversor setValue={setValueInitial} value={result} readOnly={true}/>
                </div>
            </div>
        </>
    )
}