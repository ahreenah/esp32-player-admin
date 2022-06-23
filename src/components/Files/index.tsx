import FileList from './components/FileList/index.tsx'


export default function (){
    return <div className="flex flex-col gap-2 p-3 bg-neutral-100 flex-1 m-2 rounded shadow-lg shadow-cyan-500/50">
        <div className="text-xl mt-0 text-2xl">File browser</div>
        {/* <div className="text-xl mt-0 text-neutral-500">Ace Of Base</div> */}
        <FileList />
    </div>
}