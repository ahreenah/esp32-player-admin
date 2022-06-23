import FileIcon from '../../../../../assets/icons/files.tsx'
import AudioIcon from '../../../../../assets/icons/audio.tsx'


export interface FileItemProps{
    name:String,
    type:'FILE'|'FOLDER'
}


export default function (props:FileItemProps){
    return <div className="flex mb-4">
        {
            props.type=='FOLDER'?<FileIcon/>:
            props.type=='FILE'?<AudioIcon/>:
        <></>}
        <div className="text-xl ml-4">{props.name}</div>
    </div>
}