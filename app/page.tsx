/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { useState } from "react"
import { MoveRight, MoveLeft } from 'lucide-react'
import Link from "next/link"

const Page = () => {
  const [isOpen, setIsOpen] = useState(true)

    return (
      <div className="w-full h-screen flex">
        
        {/* Sidebar */}
        <div className={`h-screen bg-gray-900 text-white transition-all duration-300
          ${isOpen ? "w-72" : "w-16"}`}>
          {/* Toggle Button */}
          <div className="p-4 flex justify-end">
            {
              isOpen ? ( <MoveLeft className="cursor-pointer" onClick={() => setIsOpen(false)}/> ) : ( <MoveRight className="cursor-pointer" onClick={() => setIsOpen(true)} /> )
            }
          </div>

          {/* Sidebar Content */}
          {isOpen && (
            <ul className="px-4 space-y-3">
              <li className="cursor-pointer"><Link href='/'>Dashboard</Link></li>
              <li className="cursor-pointer"><Link href='/'>Profile</Link></li>
              <li className="cursor-pointer"><Link href='/'>Settings</Link></li>
            </ul>
          )}
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-gray-800 p-6">
          <h1 className="text-2xl font-bold">Main Content Area</h1>
        </div>

      </div>
    )
}

export default Page
  