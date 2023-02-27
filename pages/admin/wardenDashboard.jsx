import React from 'react'
import { useSignMessage } from "wagmi"
import { verifyMessage } from "ethers/lib/utils"
import WardenCard from '@/components/WardenCard'

function wardenDashboard() {

  const [odMls, setOdMls] = useState(null)

  const recoveredAddress = useRef()

  const { data, error, isLoading, signMessage } = useSignMessage({
    onSuccess(data, variables) {
      const address = verifyMessage(variables.message, data)
      recoveredAddress.current = address
    },
  })

  useEffect(() => {
    fetch("http://localhost:5000/viewOdMls", {
      method: "GET", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data)
        setOdMls(data)
      })
      .catch((error) => {
        console.error("Error:", error)
      })
  }, [])

  return (
    <div className='min-h-screen bg-[url("/imageb.png")]'>
      <div className=" flex-1 max-w-6xl mx-auto p-10">
        <h1 className="px-7 text-left py-3 h-fit w-fit bg-blue-500 rounded-t-lg text-xl font-bold text-white scrollbar scrollbar-track-black/20 scrollbar-thumb-[#93C5FD]">
          Warden Approval Dashboard
        </h1>

        <div>
          <div className=" bg-black/25 min-h-screen rounded-t-lg p-10 flex gap-7 overflow-x-scroll">
            {odMls &&
              odMls.map((data) => (
                <WardenCard
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

export default wardenDashboard