import React from "react"

function DashboardCard(props) {
  return (
    <div className="w-fit bg-black/25  min-w-100  pb-10">
      <div className="flex flex-row  h-fit w-fill items-center justify-center rounded-t-lg ">
        <h1 className="px-7 text-left py-3 w-fit text-xl font-bold text-white bg-orange-300">
          {props.type}
        </h1>
        <h1 className=" px-7  py-3 w-[230px] text-center bg-blue-500 text-xl font-bold text-white">
          {props.netId}
        </h1>
      </div>

      <div className="mt-2 p-6 mb-3 text-left">
        <h1 className="text-white font-medium text-[23px] tracking-[1px] ">{props.title}</h1>
      </div>
      <div className="mt-2 px-7 py-3 text-left">
        <h1 className="text-white font-[90px] text-[23px] tracking-[1px]">Description </h1>
      </div>

      <div className="flex w-[280px] bg-black/25 h-[150px]  pb-10 m-auto rounded-t-lg rounded-b-lg">
        <p className="text-white break-all overflow-hidden p-3">{props.description}</p>
      </div>

      <div className="mt-2 px-7 py-3 text-left">
        <h1 className="text-white font-[90px] text-[23px] tracking-[1px]">Proof </h1>
      </div>

      <div className="flex w-[280px] bg-black/25 h-[50px]  pb-10 m-auto rounded-t-lg rounded-b-lg ">
        <button className="flex  bg-white h-[30px] w-[90px] rounded-t-lg rounded-b-lg m-2.5">
          <h2 className="text-gray-500 text-[10px] m-auto p-1">{props.file}</h2>
        </button>
      </div>

     
    </div>
  )
}

export default DashboardCard
