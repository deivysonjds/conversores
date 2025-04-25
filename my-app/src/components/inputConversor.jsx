
export default function InputConversor({
    readOnly,
    value,
    setValue
}){

    function handleChange(e){
        setValue(e.target.value)
    }
    return (
        <>
            <input onChange={handleChange} value={value} readOnly={readOnly} className="flex flex-col pl-[15px] mt-5 mb-2 w-40 h-15 bg-white rounded-b-[10px] rounded-t-[10px]" type="number"/>
        </>
    )
}