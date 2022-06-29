import FileIcon from '../../../../../assets/icons/files.tsx'
import AudioIcon from '../../../../../assets/icons/audio.tsx'


export interface FileItemProps{
    name:String,
    type:'FILE'|'FOLDER'
}


export default function (props:FileItemProps){
    return <div className="flex mb-1 text-left cursor-pointer  hover:bg-neutral-300 p-1 rounded hover:text-neutral-800">
        {
            props.type=='FOLDER'?<FileIcon/>:
            props.type=='FILE'?<AudioIcon/>:
        <></>}
        <div className="text-xl ml-4" style={{lineHeight:'36px'}}>{props.name}</div>
    </div>
}