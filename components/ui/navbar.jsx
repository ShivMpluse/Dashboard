'use client'
import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"

const Navbar = () => {
    return (
        <div className="flex gap-10  justify-between">
            <div className="flex flex-col items-center gap-6 text-white font-bold text-2xl bg-red-300 flex-wrap">
                <Input placeholder="Search..." className="h-24 w-72 "/>
                <p className='bg-yellow-400 text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, repellat?</p>
                {/* <Button text='search' className='text-white' /> */}
            </div>
            <span className="bg-blue-500 p-3">jkdhfs</span>
        </div>
    )
}

export default Navbar