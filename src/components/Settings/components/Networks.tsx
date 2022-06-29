import WiFiIcon from '../../../assets/icons/Wifi.tsx'

export default function ({}){
    return <div className="bg-neutral-400 rounded-md mt-2 p-5 text-left flex flex-col text-xl" style={{
        boxShadow: '0px 0px 7px #444444 inset',
        background:' #d0d0d0'
    }}>
        <WiFiIcon level={2} className="w-4" title="Network 1"/>
        <WiFiIcon level={4} className="w-4" title="Network 1"/>
        <WiFiIcon level={1} className="w-4" title="Network 1"/>
    </div>
}