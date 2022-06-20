interface params{
    Icon:any,
    label:String,
    onClick:()=>{}
}

export default function({Icon, label,onClick}:params){
    return (
        <div className="w-fit flex gap-2 items-center" onClick={onClick}>
            <Icon/>
            <div>
                {label}
            </div>
        </div>
    )
}
