import PlayIcon from "../../../assets/icons/play.tsx"
import Arrow from '../../../assets/icons/Arrow.tsx'

export default function({onChange}){
    async function playPrevTrack(){
        await fetch(window.serverName+'/prev')

        onChange()
    }
    async function playNextTrack(){
        await fetch(window.serverName+'/next')
        // alert('res')
        setTimeout(()=>onChange()
        ,500)
        
    }
    return <div className="flex mx-auto items-center ">
        <button onClick={playPrevTrack}>
            <Arrow left size={90} />
        </button>
        <button className='ml-2'>
            <PlayIcon/>
        </button>
        <button onClick={playNextTrack}>
            <Arrow  size={90}/>
        </button>
    </div>
}