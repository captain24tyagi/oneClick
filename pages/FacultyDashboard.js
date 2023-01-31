import DashboardCard from "@/components/DashboardCard"
import React from "react"

function facultyDashboard(props) {
  return (
    <div className='min-h-screen bg-[url("/imageb.png")]'>
      <div className=" flex-1 max-w-6xl mx-auto p-10">
        <h1 className="px-7 text-left py-3 h-fit w-fit bg-blue-500 rounded-t-lg text-xl font-bold text-white scrollbar scrollbar-track-black/20 scrollbar-thumb-[#93C5FD]">
          Faculty Approval Dashboard
        </h1>

        <div>
          <div className=" bg-black/25 min-h-screen rounded-t-lg p-10 flex gap-7 overflow-x-scroll">
            <DashboardCard
              name="Soumil"
              title="Attending A Conference"
              type="OD"
              filename="RR.png "
              desc="nuiyguihjiogi8y8ihnuiyguihjiogi8y8ihnuiyguihjiogi8y8ihnuiyguihjiogi8y8ihnuiyguihjiogi8y8ihnuiyguihjiogi8y8ihnuiyguihjiogi8y8ihnuiyguihjiogi8y8ihnuiyihohhhhhhhhhhhhhhhhhhhhhhguihjiogi8y8ih"
            />
            <DashboardCard
              name="Sarthak"
              title="Severe Case of Asthma"
              type="ML"
              filename="RR.png"
              desc="bgfvytfuyguyfufu6f"
            />
            <DashboardCard
              name="Aritra"
              title="Wiring Issues"
              type="HG"
              filename="RR.png"
              desc="bgfvytfuyguyfufu6f"
            />
            <DashboardCard
              name="Nikhil"
              title="Wiring Issues"
              type="HG"
              filename="RR.png"
              desc="bgfvytfuyguyfufu6f"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default facultyDashboard
