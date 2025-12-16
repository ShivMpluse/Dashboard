"use client";

import { useState } from "react";
import { MoveRight, MoveLeft } from "lucide-react";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <aside className={`bg-slate-900 text-white p-4 transition-all duration-300 ${ isOpen ? "w-64" : "w-16" }`} >
            <div className="flex justify-end mb-4">
                {
                    isOpen ? (<MoveLeft className="cursor-pointer" onClick={() => setIsOpen(false)} /> ) : ( <MoveRight className="cursor-pointer" onClick={() => setIsOpen(true)} />
                )}
            </div>

            {isOpen && (
                <ul className="space-y-3">
                    <li className="font-bold cursor-pointer">Dashboard</li>
                    <li className="cursor-pointer">Profile</li>
                    <li className="cursor-pointer">Settings</li>
                </ul>
            )}
        </aside>
    );
};

export default Sidebar;
