import FileIcon from '../../../../../assets/icons/files.tsx'
import AudioIcon from '../../../../../assets/icons/audio.tsx'
import UnknownIcon from '../../../../../assets/icons/unknown.tsx'


export interface FileItemProps{
    name:String,
    type:'FILE'|'FOLDER',
    onClick:()=>{}
}


export default function (props:FileItemProps){
    let extension = ''
    if(props.type=='FILE'){
        let nameParts = props.name.split('.')
        extension = nameParts[nameParts.length-1]
    }
    const AUDIO_FORMATS = ['mp3','wav']
    const isAudio = AUDIO_FORMATS.indexOf(extension)!=-1
    return <div className="flex mb-1 text-left cursor-pointer  hover:bg-neutral-300 p-1 rounded hover:text-neutral-800" onClick={props.onClick}>
        <div>
        {
            props.type=='FOLDER'?<FileIcon/>:
            props.type=='FILE'?(
                isAudio?<AudioIcon/>:<UnknownIcon/>
                ):
        <></>}
        </div>
        <div className="text-xl ml-4" style={{lineHeight:'36px'}}>{props.name.split('/')[props.name.split('/').length-1].toLocaleLowerCase()}</div>
    </div>
}