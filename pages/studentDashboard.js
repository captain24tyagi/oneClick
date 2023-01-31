import DashboardCard from "@/components/DashboardCard"
import React from "react"

function FacultyDashboard(props) {
  return (
    <div className='min-h-screen bg-[url("/imageb.png")]'>
      <div className=" flex-1 max-w-6xl mx-auto p-10">
        <h1 className="px-7 text-left py-3 h-fit w-fit bg-blue-500 rounded-t-lg text-xl font-bold text-white">
          Student Dashboard
        </h1>

        <div>
          <div className=" bg-black/25 min-h-screen rounded-t-lg p-10 flex gap-7 overflow-x-scroll">
            <DashboardCard
              name="Soumil"
              title="Attending A Conference"
              type="OD"
              filename="sarthakRandi.png "
              desc="bgfvytfuyguyfufu6f"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FacultyDashboard