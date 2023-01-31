import Image from 'next/image'
import React from 'react'
// import Electricity.png from "./public"

function HostelGrid() {
  return (
    <div className='min-h-screen bg-[url("/imageb.png")]'>

        <div className=' flex-1 max-w-6xl mx-auto p-10'>
        <h1 className='px-7 text-left py-3 h-fit w-fit bg-blue-500 rounded-t-lg text-xl font-bold text-white'>
            Hostel Facility Grievances
        </h1>

        <div className=' bg-black/25 min-h-screen rounded-t-lg p-10'>
            <div className='flex flex-row'>
                <div className='flex flex-col'>
                    <div className='flex'>
                        <div>
                            <img src="/Electricity.png" width={440}/>
                        </div>
                        <div>
                            <img src="/Laundry.png" />
                            <img src = "/Internet.png"/>
                        </div>
                    </div>
                    <div>
                        <img src = "/Food.png"/>
                    </div>
                </div>
                <div>
                    <img width={510} src="/House-Keeping.png" />
                </div>
            </div>
        </div>

        
        </div>
    </div>
  )
}

export default HostelGrid