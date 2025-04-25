
export default function TitlePage({title}){

    return (
        <>
        <div className="w-[100%] flex justify-center mt-[40px] mb-[40px]">
            <h1 className="text-[60px] font-bold">
                {title}
            </h1>
        </div>
        </>
    )
}