import SeekBar from './components/SeekBar.tsx'
import Buttons from './components/Buttons.tsx'
import { useEffect, useState } from 'react'


export default function (){
    let [data, setData]=useState({})
    const load =()=>{ 
        fetch(window.serverName+'/state').then(i=>i.json().then(setData))
    }
    useEffect(
     load   
    ,[])
    return <div className="flex flex-col gap-2 p-3 bg-neutral-100 flex-1 m-2 rounded shadow-lg shadow-cyan-500/50">
    
        <div className="text-xl mt-12 text-neutral-400">Now Playing</div>
        <div className="text-xl mt-0 text-2xl">{data?.fileName}</div>
        {/* <div className="text-xl mt-0 text-neutral-500">Ace Of Base</div> */}
        <SeekBar progress={10}/>
        <Buttons onChange={load}/>
    </div>
}