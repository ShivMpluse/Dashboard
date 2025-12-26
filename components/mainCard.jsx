import SimpleAreaChart from "@/components/chart/areaChart"

const MainCard = ({ title, amount, icon: Icon }) => {
  return (
    <div className="text-white rounded-lg shadow-md p-4 ">
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl text-gray-200 font-bold flex flex-wrap">{ title }</h2>
          <p className="text-2xl font-bold text-gray-200 flex flex-wrap">{ amount }</p>
        </div>
        <span><Icon size={28} /></span>
      </div>
      <div className="mt-1">
        <SimpleAreaChart />
      </div>
    </div>
  )
}

export default MainCard
