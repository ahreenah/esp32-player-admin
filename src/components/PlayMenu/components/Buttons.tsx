import PlayIcon from "../../../assets/icons/play.tsx"
import Arrow from '../../../assets/icons/Arrow.tsx'

export default function(){
    return <div className="flex mx-auto items-center ">
        <Arrow left size={90}/>
        <button className='ml-2'>
            <PlayIcon/>
        </button>
        <Arrow  size={90}/>
    </div>
}