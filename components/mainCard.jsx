

const MainCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Main Card Title</h2>
          <p className="text-base text-gray-700">This is a description inside the main card component.</p>
        </div>
        <span>icon</span>
      </div>
    </div>
  )
}

export default MainCard