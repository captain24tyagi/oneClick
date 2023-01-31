import DashboardCard from "@/components/DashboardCard"
import React, { useEffect, useState } from "react"

function studentDashboard() {
  const [odMl, setOdMl] = useState(null)
  useEffect(() => {
    const data = { netId: "dadsd" }

    fetch("http://localhost:5000/viewOdMl", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data)
        setOdMl(data)
      })
      .catch((error) => {
        console.error("Error:", error)
      })
  }, [])
  return (
    <div className='h-full bg-[url("/imageb.png")]'>
      <div className=" flex-1 max-w-6xl mx-auto p-10">
        <h1 className="px-7 text-left py-3 h-fit w-fit bg-blue-500 rounded-t-lg text-xl font-bold text-white scrollbar scrollbar-track-black/20 scrollbar-thumb-[#93C5FD]">
          Student Dashboard
        </h1>

        <div>
          <div className=" bg-black/25 min-h-screen rounded-t-lg p-10 flex gap-7 overflow-x-scroll ">
            {odMl &&
              odMl.map((data) => (
                <DashboardCard
                  key={data._id}
                  netId={data.netId}
                  title={data.title}
                  type={data.type}
                  file={data.file}
                  description={data.description}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default studentDashboard
