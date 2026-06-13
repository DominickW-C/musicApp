import '../App.css';
import { ThemeSlider } from './ThemeSlider.tsx';
//import { useState } from 'react';

export function NavHeader() {
    return (
        <>
            <div className="grid grid-cols-3 items-center bg-zinc-300 dark:bg-zinc-900 pt-3 pb-3 transition duration-500">
                <div className="">
                    <p className="font-mono text-gray-600 dark:text-gray-400 pl-2 transition duration-500">Something</p>
                </div>
                <div className="">
                    <h1 className="font-mono text-center font-bold text-gray-800 dark:text-gray-300 transition duration-500">Music App</h1>
                </div>
                <div className="">
                    <ThemeSlider/>
                </div>
            </div>
        </>
    );
}
