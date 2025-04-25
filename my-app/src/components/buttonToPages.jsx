
export default function ButtonToPages({
    url,
    page
}){

    return (
        <>
            <a href={url}>
                <div className="flex justify-center items-center bg-white w-100 h-15 m-1 rounded-b-[20] rounded-t-[20] font-bold text-xl hover:scale-105">
                    <span >
                        {page}
                    </span>
                </div>
            </a>
        </>
    )
}