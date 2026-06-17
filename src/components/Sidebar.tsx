import '../App.css';
import { useState } from 'react'; 

export function Sidebar() {
    const [sideState, setSideState] = useState(0);
    let arrow:string = '>';

    return (
        <>
            <div className={`absolute w-[50vw] transition ease-in-out duration-500 ${sideState === 0 ? "translate-x-0" : "-translate-x-80"}`}>
                <div 
                    className={`absolute bg-zinc-100 dark:bg-zinc-600 shadow-lg shadow-black p-1 w-xs h-screen z-10 transition ease-in-out duration-500`}
                >
                    <h2 className="ml-3 mt-2 font-bold font-mono text-zinc-300 ">Playlists</h2>
                    <hr className="ml-2 mr-2 mt-1 text-zinc-500"/> 
                </div> 

                <div 
                    onClick={() => setSideState(sideState === 0 ? 1 : 0)}
                    className={`absolute p-3 bg-zinc-100 dark:bg-zinc-500 shadow-md shadow-black z-0 translate-x-9 w-xs rounded transition ease-in-out duration-500`}
                >
                    <p className="font-bold font-mono text-1xl text-right">{sideState === 0 ? arrow = "<" : arrow = ">"}</p>
                </div>
            </div>
        </>
    );
}
