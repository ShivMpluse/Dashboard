'use client'

import Navbar from "@/components/navbar.jsx"

const Page = () => {

    return (
      <div className="w-full h-screen flex">

        {/* Main Content */}

        <div className="flex-1 bg-lime-800 p-4">
          <Navbar />
          <h1 className="text-2xl font-bold">Main Content Area</h1>
        </div>

      </div>
    )
}

export default Page
  