import Item from './components/Item.tsx'
import BackIcon from '../../../../assets/icons/back.tsx'
import {useState, useEffect} from 'react'




export default function FileList(){
    const [demoFiles,setDemoFiles] = useState([
        {name:'audio',type:'FOLDER'},
        {name:'some data',type:'FOLDER'},
        {name:'downloads',type:'FOLDER'},
        {name:'Цой - звезда по имени Солнце.mp3',type:'FILE'},
        {name:'J:Морс - босиком по мостовой.mp3',type:'FILE'},
    ])
    useEffect(()=>{
        fetch('http://192.168.0.106/files').then(async i=>{
            let res = await i.json()
            console.log(res.files.map(i=>i?.name))
            setDemoFiles(res.files.map(i=>({...i,type:i?.isDir?'FOLDER':'FILE'})))
        })
    })
    return (<div className=' flex-1 flex flex-col'>
        <div className='flex'>
            <BackIcon/>
            <div className='text-left text-xl mb-8 ml-3'>/</div>
        </div>
        <div className="flex flex-1">
            <div className="w-1/2 mr-4 overflow-y-scroll" style={{
                maxHeight: 'calc(100vh - 147px)',}}
            >
                {demoFiles.filter(i=>i.type=='FOLDER').map(i=><Item name={i.name} type={i.type}/>)}
                new folder
            </div>
            <div className="w-1/2 border-1 overflow-y-scroll" style={{
                maxHeight: 'calc(100vh - 147px)',}}>
                {demoFiles.filter(i=>i.type=='FILE').map(i=><Item name={i.name} type={i.type}/>)}
                <div className="mt-9">
                    <input type="file" id="uploadFile" className='hidden'/>
                    <label for="uploadFile" className='bg-blue-400 cursor-pointer text-white p-4 rounded-xl'>
                        Upload
                    </label>
                </div>
            </div>
        </div>
        
        </div>)
}