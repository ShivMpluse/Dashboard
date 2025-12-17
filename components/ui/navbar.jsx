'use client'
import  Input  from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { BellDot, Fullscreen } from 'lucide-react';
import { MessageSquareText } from 'lucide-react';
import profile from '@/public/assets/profile.png'
import Image from "next/image";

const Navbar = () => {
    return (
        <div className="flex gap-10  justify-between bg-gray-600">
            <div className="flex items-center gap-2 text-white font-bold text-2xl rounded-md p-2 focus:outline-none">
                <Input placeholder="Search..." className="h-10 w-72 border-2"/>
                <Button className='text-white active:scale-105'>Search</Button>
            </div>
            <ul className="flex gap-8 justify-center items-center p-3 text-white">
                <li className="cursor-pointer"><MessageSquareText /></li>
                <li className="cursor-pointer"><BellDot /></li>
                <li className="cursor-pointer flex gap-4 items-center">
                    <div className="flex h-14 w-14 border-2 rounded-full overflow-hidden">
                        <Image src={profile} alt="User Avatar" height={48} width={48}/>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-white font-bold">John Doe</span>
                        <span className="text-white text-sm">Admin</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Navbar