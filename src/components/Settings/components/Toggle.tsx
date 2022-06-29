
export default function ({value, onChange}:{value:Boolean, onChange:()=>{}}){
    return <div className="bg-neutral-400 rounded-xl w-10 p-1 flex" style={{
        boxShadow:"inset 0px 0px 3px #4c4c4c"
    }} onClick={()=>onChange(!value)}>
        <div className={`rounded-xl  w-5 h-5  duration-100 ${value? "ml-3 bg-neutral-600" : "ml-0 bg-neutral-500"}`} ></div>        
    </div>
}