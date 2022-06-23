export default function ({progress}){
    return <div className="flex mx-auto h-3 w-50 bg-neutral-300 shadow-blue-200 rounded-xl flex items-center mt-5" style={{width:600}}>
        <div className="w-5 h-5 bg-orange-500 rounded-xl shadow-200" style={{marginLeft:progress+"%"}}></div>
    </div>
}