import {useState, useRef} from 'react';
import MenuItem from './components/MenuItem.tsx'
import Play from '../../assets/icons/folder.tsx'
import Files from '../../assets/icons/files.tsx'
import {useRouter} from '../../router/index.ts'

interface params{
    onOpen: (path:String)=>{}
}

export default function ({onOpen}:params){
    const router = useRouter();
    const [open, setOpen] = useState(false);
    let self = useRef(null)
    // const open = false;
    return <div className={`flex flex-col gap-2 p-3 h-full text-white duration-75 ${open?'w-12':''}`} ref={self}>
        {/* {JSON.stringify(router)} */}
        <MenuItem label='Playing' onClick={()=>router.goto('/')} Icon={Play}/>
        <MenuItem label='Files' Icon={Files} onClick={()=>router.goto('/files')}/>
        {/* <MenuItem label='Files'/> */}
        
        <div className="w-fit flex gap-2 items-center mt-auto" onClick={()=>setOpen(!open)   }>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <div>
                Close
            </div>
        </div>
    </div>
    
}