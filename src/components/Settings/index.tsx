import TetheringSettings from "./components/Tethering.tsx"
import Networks from './components/Networks.tsx'

export default function (){
    return <div className="flex flex-col gap-2 p-3 bg-neutral-100 flex-1 m-2 rounded shadow-lg shadow-cyan-500/50">
        <div className="text-xl mt-0 text-2xl">Setings</div>
        <div className="flex gap-4">
            <div className="w-1/2">
                <div className="text-xl">
                    Tethering
                </div>
                <TetheringSettings/>
            </div>
            <div className="w-1/2">
                <div className="text-xl">
                    Networks
                </div>        
                <Networks/>
            </div>
        </div>
        {/* <div className="text-xl mt-0 text-neutral-500">Ace Of Base</div> */}
    </div>
}