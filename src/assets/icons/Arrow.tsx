export default function({left, size}){
    return <svg xmlns="http://www.w3.org/2000/svg" 
    className={`h-9 w-9 duration-150 ${left?'-scale-x-100':''}`} 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor" 
    strokeWidth={2}
    style={size?{
        width:size,
        height:size
    }:{}}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
}