import Item from './components/Item.tsx'
import BackIcon from '../../../../assets/icons/back.tsx'
import {useState, useEffect, useRef} from 'react'




export default function FileList(){
    const [demoFiles,setDemoFiles] = useState([
        // {name:'audio',type:'FOLDER'},
        // {name:'some data',type:'FOLDER'},
        // {name:'downloads',type:'FOLDER'},
        // {name:'Цой - звезда по имени Солнце.mp3',type:'FILE'},
        // {name:'J:Морс - босиком по мостовой.mp3',type:'FILE'},
    ])
    let uploader=useRef(null);
    let [path, setPath]=useState('/')
    let [loading, setLoading] = useState(true)
    function load(){
        
        setLoading(true)
        fetch(window.serverName+'/files?path='+path).then(async i=>{
            
        // alert('a')
            console.log(i)
            let res = await i.json()
            console.log(res)
            setLoading(false)
            setDemoFiles(res.filter(i=>i).map(i=>({...i,type:i?.isDir?'FOLDER':'FILE'})))
        })
    }
    useEffect(()=>{
        // setDemoFiles([])
        load()
    },[path])
    function goUp(){
        // alert('up')
        let newPath = path.split('/').filter((_,num)=>num!=path.split('/').length-1).join('/')
        if(!newPath) newPath = '/'
        // alert(newPath)

        setPath(newPath)
    }
    return (<div className=' flex-1 flex flex-col'>
        <div className='flex'>
            <BackIcon onClick={goUp}/>
            <div className='text-left text-xl mb-8 ml-3'>{path}</div>
        </div>
        {/* {JSON.stringify(demoFiles)} */}
        <div className="flex flex-1">
            <div className="w-1/2 mr-4 overflow-y-scroll" style={{
                maxHeight: 'calc(100vh - 147px)',}}
            >
                {!loading && demoFiles.filter(i=>i.type=='FOLDER').map(i=><Item name={i.name} type={i.type} onClick={()=>setPath(i.name)}/>)}
                {!loading && 'new folder'}
                {loading && 
                <div class="rounded-md p-4 w-full mx-auto">
                <div class="animate-pulse flex space-x-4">
                  <div class="rounded-full bg-slate-700 h-10 w-10"></div>
                  <div class="flex-1 space-y-6 py-1">
                    <div class="h-2 bg-slate-700 rounded"></div>
                    <div class="space-y-3">
                      <div class="grid grid-cols-3 gap-4">
                        <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                        <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                      </div>
                      <div class="h-2 bg-slate-700 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
                }
            </div>
            <div className="w-1/2 border-1 overflow-y-scroll" style={{
                maxHeight: 'calc(100vh - 147px)',}}>
                {!loading && demoFiles.filter(i=>i.type=='FILE').map(i=><Item name={i.name} type={i.type}/>)}
                {!loading && 'new folder'}
                {loading && 
                <div class="rounded-md p-4 w-full mx-auto">
                <div class="animate-pulse flex space-x-4">
                  <div class="rounded-full bg-slate-700 h-10 w-10"></div>
                  <div class="flex-1 space-y-6 py-1">
                    <div class="h-2 bg-slate-700 rounded"></div>
                    <div class="space-y-3">
                      <div class="grid grid-cols-3 gap-4">
                        <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                        <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                      </div>
                      <div class="h-2 bg-slate-700 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
                }
                
                {!loading && <div className="mt-9">
                    <input type="file" id="uploadFile" className='hidden' ref={uploader}/>
                    <label for="uploadFile" className='bg-blue-400 cursor-pointer text-white p-4 rounded-xl' >
                        Select
                    </label>
                    <button onClick={()=>{
                        
                        var data = new FormData()
                        data.append('file', uploadFile.files[0])
                        fetch(window.serverName+'/upload-demo',{method:'POST',body:data}).then(()=>{
                            console.log(uploader)
                            uploader.current.value = null
                            // uploader.value=null
                            load()
                        }
                            )
                    }}>
                        upload
                    </button>
                </div>}

            </div>
        </div>
        
        </div>)
}