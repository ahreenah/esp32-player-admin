import {useState, useRef} from 'react';
import MenuItem from './components/MenuItem.tsx'
import PlayIcon from '../../assets/icons/folder.tsx'
import FilesIcon from '../../assets/icons/files.tsx'
import ArrowIcon from '../../assets/icons/Arrow.tsx'
import SettingsIcon from '../../assets/icons/settings.tsx'
import {useRoute} from '../../router/index.tsx'


interface params{
    onOpen: (path:String)=>{}
}

export default function ({onOpen}:params){
    const router = useRoute();
    const [open, setOpen] = useState(false);
    let self = useRef(null)
    // const open = false;
    return <div className={`flex flex-col gap-2 p-3  pl-1.5 h-full text-white duration-75 ${open?'w-48':'w-12'}`} ref={self}>
        {/* {JSON.stringify(router)} */}
        <MenuItem label='Playing' onClick={()=>router.goto('/')} Icon={PlayIcon}/>
        <MenuItem label='Files' Icon={FilesIcon} onClick={()=>router.goto('/files')}/>
        <MenuItem label='Settings' Icon={SettingsIcon} onClick={()=>router.goto('/settings')}/>
        {/* <MenuItem label='Files'/> */}
        {/* <div className={`duration-100 ${open?'-scale-x-100':''}`} > */}
            {/* </div> */}
        <div className="w-fit flex gap-2 items-center mt-auto" onClick={()=>setOpen(!open)   }>
            <ArrowIcon left={open}/>
            <div className="ml-2">
                Close
            </div>
        </div>
    </div>
    
}