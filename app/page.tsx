'use client'
import Navbar from "@/components/ui/navbar";
import MainCard from "@/components/mainCard";
import { cardData } from "@/components/cardData"


const Page = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="flex-1 bg-gray-800 p-4">
        <Navbar />
        <ul className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {
            cardData.map((card, index) => (
              <li key={index} className="border-2 rounded-2xl">
                <MainCard
                  title={card.title}
                  amount={card.amount}
                  icon={card.icon}
                />
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Page
