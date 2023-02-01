import { useSignMessage } from "wagmi"
import { verifyMessage } from "ethers/lib/utils"
import { useRef, useState } from "react"

function medical() {
  const recoveredAddress = useRef()
  const [desc, setDesc] = useState("")
  const { data, error, isLoading, signMessage } = useSignMessage({
    onSuccess(data, variables) {
      const address = verifyMessage(variables.message, data)
      recoveredAddress.current = address
    },
  })
  return (
    <div className='h-full text-center items-center justify-between max-w-full py-20 px-10 bg-[url("/imageb.png")]'>
      <div className="items-center max-w-6xl mx-auto justify-center">
        <h1 className="px-7 text-left py-3 h-fit w-fit bg-orange-400 rounded-t-lg text-xl font-bold text-white">
          Application form for Medical Leave
        </h1>
        <form
          className="p-10 bg-black/25 items-start rounded-b-lg"
          encType="multipart/form-data"
          action="http://localhost:5000/addMl"
          method="POST"
        >
          <h2 className=" px-2 text-left font-sans text-xl text-white font-semibold max-w-fit">
            netId
          </h2>
          <input name="netId" className="containinput" placeholder="Enter your netId" type="text" />

          <h2 className=" px-2 text-left font-sans text-xl text-white font-semibold max-w-fit">
            Title
          </h2>
          <input
            className="containinput"
            placeholder="Enter the title of medical leave here"
            type="text"
            name="title"
          />

          <h2 className=" px-2 text-left font-sans text-xl text-white font-semibold max-w-fit">
            Description
          </h2>
          <textarea
            className="containinput1"
            placeholder="Enter the description of medical leave here"
            name="description"
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
          />

          <h2 className=" px-2 text-left font-sans text-xl text-white font-semibold max-w-fit">
            Tenure
          </h2>
          <div className="flex flex-row">
            <input name="from" className="containinput2 text-white" type="date" />
            <input name="to" className="containinput2 text-white" type="date" />
          </div>

          <h2 className=" px-2 text-left font-sans text-xl text-white font-semibold max-w-fit mb-4">
            Upload medical certificates
          </h2>
          <input name="file" className="containinput3" type="file" />

          <button
            onClick={() => signMessage({ message: desc })}
            className="containinput5 mx-auto bg-blue-600 hover:bg-blue-600"
            type="button"
          >
            Sign
          </button>
          <button className="containinput5 mx-auto" type="submit">
            Submit for Review
          </button>
        </form>
      </div>
    </div>
  )
}

export default medical
