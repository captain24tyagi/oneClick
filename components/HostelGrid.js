import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
// import Electricity.png from "./public"

function HostelGrid() {

    // const [title,setTitle] = useState('');

    return (
    <div className='min-h-screen bg-[url("/imageb.png")]'>

        <div className=' flex-1 max-w-6xl mx-auto p-10'>
        <h1 className='px-7 text-left py-3 h-fit w-fit bg-blue-500 rounded-t-lg text-xl font-bold text-white'>
            Hostel Facility Grievances
        </h1>

        <div className=' bg-black/25 min-h-300 rounded-t-lg p-10 '>
            <div className='flex flex-row'>
                <div className='flex flex-col'>
                    <div className='flex'>
                        <div>
                            <Link href='/electricity'>
                                lmao<img src="/Electricity.png" width={440} className="hover:animate-pulse"/>
                            </Link>
                        </div>
                        <div>
                           <Link href='/laundry'>
                            <img src="/Laundry.png" className="hover:animate-pulse"/>
                            </Link>
                            <Link href='/internet'>
                            <img src = "/Internet.png" className="hover:animate-pulse"/>
                           </Link>
                        </div>
                    </div>
                    <div>
                        <Link href='/food'>
                        <img src = "/Food.png" className="hover:animate-pulse"/>
                        </Link>
                    </div>
                </div>
                <div>
                    <Link href='/housekeeping'>
                    <img width={510} src="/House-Keeping.png" className="hover:animate-pulse"  />  
                    </Link>
                </div>
            </div>
        </div>

        
        </div>
    </div>
  )
}

export default HostelGrid
