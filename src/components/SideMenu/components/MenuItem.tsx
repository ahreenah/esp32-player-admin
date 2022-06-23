interface params{
    Icon:any,
    label:String,
    onClick:()=>{},
    open:Boolean
}

export default function({Icon, label, onClick, open}:params){
    return (
        <div className={`w-fit flex gap-2 p-1 min-w-full items-center hover:text-neutral-500 hover:bg-white hover:pl-1 duration-200 rounded`} onClick={onClick}>
            <Icon/>
            <div className="ml-2">
                {label}
            </div>
        </div>
    )
}
