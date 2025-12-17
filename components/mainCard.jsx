

const MainCard = ({ title, amount, icon: Icon }) => {
  return (
    <div className="text-white rounded-lg shadow-md p-6">
      <div className="flex justify-between">
        <div className="flex flex-col gap-4">
          <h2 className="text-xl text-gray-200 font-bold">{ title }</h2>
          <p className="text-2xl font-bold text-gray-200">{ amount }</p>
        </div>
        <span><Icon size={28} /> </span>
      </div>
    </div>
  )
}

export default MainCard
