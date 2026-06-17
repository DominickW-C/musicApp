import '../App.css';
import { useState } from 'react';

function changeTheme () {
    if (document.documentElement.className == "dark") {
        document.documentElement.className = "light";
    } else {
        document.documentElement.className = "dark";
    }
}

export function ThemeSlider() {
    const [sliderState, setSliderState] = useState(0);

    return (
        <>
            <div className="flex flex-row justify-end pr-2">
                <svg width="34" height="34">
                    <defs>
                        <mask id="moonCut">
                            <circle r="100" cx="15" cy="17" fill="white"/> 
                            <circle r="10" cx="10" cy="15" fill="black"/> 
                        </mask>
                    </defs>
                    <circle r="11" cx="15" cy="17" className="fill-gray-800"/>
                    <circle r="9" cx="15" cy="17" mask="url(#moonCut)" className="fill-gray-50"/>
                </svg>
                <div 
                    onClick={() => {
                        changeTheme();
                        setSliderState(sliderState === 0 ? 1 : 0);
                    }} 
                    className="flex w-18 rounded-2xl bg-zinc-900 pl-4.5 pr-4.5 pt-1 pb-1 inset-shadow-xs inset-shadow-zinc-600"
                >
                    <div className={`rounded-full bg-gray-200 p-3 transition ease-in-out duration-500 ${sliderState === 0 ? "-translate-x-3" : "translate-x-6"}`}></div>
                </div>
                
                <svg width="34" height="34">
                    <circle r="11" cx="15" cy="17" className="fill-yellow-300"/>
                </svg>
            </div>
        </>
    );

}

