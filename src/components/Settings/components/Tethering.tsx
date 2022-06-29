import Toggle from './Toggle.tsx'
import { useState } from 'react'

export default function (){
    let [enabled, setEnabled] = useState<Boolean>(false)
    return <div className="bg-neutral-400 rounded-md mt-2 p-5 text-left flex flex-col text-xl" style={{
        boxShadow: '0px 0px 7px #444444 inset',
        background:' #d0d0d0'
    }}>
        <div className='flex align-center'>
            <div className='mr-2'>
                enabled
            </div>
            <Toggle value={enabled} className="ml-auto" onChange={setEnabled}/>
        </div>
        <div className="mt-2">SSID</div>
        <input className="rounded p-2"/>
        <div className="mt-2">Password</div>
        <input className="rounded p-2"/>
    </div>
}