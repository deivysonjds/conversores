

export default function SelectConversor({
    list,
    conversao,
    options,
    setOption
}){ 

    function hangleoption(e){
        setOption(e.target.value)
    }

    return (
        <>  
            <div className="flex flex-col pl-[15px] w-40 h-15 bg-white rounded-b-[10px] rounded-t-[10px]">
                <span>{conversao}</span>
                <div className="flex justify-end ">
                    <select onChange={hangleoption} defaultValue={conversao==="para" ? options[1] : options[0]} className="mr-[10px] pl-2 pr-2" name={list} id={list}>
                        {options.map((e)=> <option key={e} value={e}>{e}</option>
                        )}
                    </select>
                </div>  
            </div>
        </>
    )
}