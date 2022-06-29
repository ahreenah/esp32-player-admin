interface Props{
    level:number,
    title:String
}

export default function ({level, title}:Props){
    const lightActive = "#00A6F9",
          darkActive = "#0093F7",
          lightInactive="#c0c0c0",
          darkInactive = "#b0b0b0";
    return(
        <div className="flex items-center mb-3 last:mb-0"> 
        <svg x="0px" y="0px" viewBox="0 0 504.8 504.8" className="w-9">
            <path style={{fill:level<4?lightInactive:lightActive}} d="M480,203.5c-6.4,0-12-2.4-16.8-7.2c-116.8-116-305.6-116-422.4,0c-9.6,9.6-24.8,9.6-33.6,0   c-9.6-9.6-9.6-24.8,0-33.6c135.2-135.2,355.2-135.2,490.4,0c9.6,9.6,9.6,24.8,0,33.6C492.8,201.1,486.4,203.5,480,203.5z"/>
            <path style={{fill:level<4?darkInactive:darkActive}} d="M7.2,189.1c-0.8,0.8-2.4,2.4-3.2,4c0.8,1.6,1.6,2.4,3.2,4c9.6,9.6,24.8,9.6,33.6,0   c116.8-116.8,305.6-116.8,422.4,0c4.8,4.8,11.2,7.2,16.8,7.2s12-2.4,16.8-7.2c0.8-0.8,2.4-2.4,3.2-4c-0.8-1.6-1.6-2.4-3.2-4   C361.6,53.9,142.4,53.9,7.2,189.1z"/>

            <path style={{fill:level<3?lightInactive:lightActive}} d="M396,288.3c-6.4,0-12-2.4-16.8-7.2c-70.4-70.4-184-70.4-254.4,0c-9.6,9.6-24.8,9.6-33.6,0   c-9.6-9.6-9.6-24.8,0-33.6c88.8-88.8,232.8-88.8,321.6,0c9.6,9.6,9.6,24.8,0,33.6C408,285.9,402.4,288.3,396,288.3z"/>
            <path style={{fill:level<3?darkInactive:darkActive}} d="M91.2,273.9c-0.8,0.8-2.4,2.4-3.2,4c0.8,1.6,1.6,2.4,3.2,4c9.6,9.6,24.8,9.6,33.6,0   c70.4-70.4,184-70.4,254.4,0c4.8,4.8,11.2,7.2,16.8,7.2s12-2.4,16.8-7.2c0.8-0.8,2.4-2.4,3.2-4c-0.8-1.6-1.6-2.4-3.2-4   C324,185.1,180,185.1,91.2,273.9z"/>
            
            <path style={{fill:level<2?lightInactive:lightActive}} d="M309.6,369.1c-6.4,0-12-2.4-16.8-7.2c-22.4-22.4-59.2-22.4-81.6,0c-9.6,9.6-24.8,9.6-33.6,0   c-9.6-9.6-9.6-24.8,0-33.6c40.8-40.8,108-40.8,148.8,0c9.6,9.6,9.6,24.8,0,33.6C321.6,366.7,316,369.1,309.6,369.1z"/>
            <path style={{fill:level<2?darkInactive:darkActive}} d="M177.6,354.7c-0.8,0.8-2.4,2.4-3.2,4c0.8,1.6,1.6,2.4,3.2,4c9.6,9.6,24.8,9.6,33.6,0   c22.4-22.4,59.2-22.4,81.6,0c4.8,4.8,11.2,7.2,16.8,7.2s12-2.4,16.8-7.2c0.8-0.8,2.4-2.4,3.2-4c-0.8-1.6-1.6-2.4-3.2-4   C285.6,313.1,218.4,313.1,177.6,354.7z"/>
            
            <circle style={{fill:lightActive}} cx="252" cy="419.5" r="24"/>    
            <path style={{fill:darkActive}} d="M252,421.9c-8,0-16,4-20,10.4c4,6.4,12,10.4,20,10.4s16-4,20-10.4C268,426.7,260,421.9,252,421.9z"/>
            
        </svg>
        <div className="ml-5">{title}</div>
        </div>
    )
}