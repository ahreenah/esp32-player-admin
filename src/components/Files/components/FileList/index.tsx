import Item from './components/Item.tsx'
import BackIcon from '../../../../assets/icons/back.tsx'


const demoFiles = [
    {name:'audio',type:'FOLDER'},
    {name:'some data',type:'FOLDER'},
    {name:'downloads',type:'FOLDER'},
    {name:'Цой - звезда по имени Солнце.mp3',type:'FILE'},
    {name:'J:Морс - босиком по мостовой.mp3',type:'FILE'},
]

export default function FileList(){
    return (<div>
        <div className='flex'>
            <BackIcon/>
            <div className='text-left text-xl mb-8 ml-3'>/</div>
        </div>
        <div className="flex">
            <div className="w-1/2">
                {demoFiles.filter(i=>i.type=='FOLDER').map(i=><Item name={i.name} type={i.type}/>)}
            </div>
            <div className="w-1/2 border-1">
                {demoFiles.filter(i=>i.type=='FILE').map(i=><Item name={i.name} type={i.type}/>)}
            </div>
        </div>
        
        </div>)
}