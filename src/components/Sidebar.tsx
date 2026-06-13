import '../App.css';
import { useState } from 'react'; 

export function Sidebar() {
    const [sideState, setSideState] = useState(0);

    return (
        <>
            <div className="grid grid-cols-2">
                <div 
                    onClick={() => setSideState(sideState === 0 ? 1 : 0)}
                    className={`col-start-1 col-end-1 bg-amber-200 p-3 transition ease-in-out duration-500 ${sideState === 0 ? "translate-x-0" : "-translate-x-60"}`}>

                </div> 
            </div>
        </>
    );
}
