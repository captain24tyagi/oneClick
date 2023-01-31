import React from "react"

function onDuty() {
  return (
    <div className='h-full text-center items-center justify-between max-w-full py-20 px-10 bg-[url("/imageb.png")]'>
      <div className="items-center max-w-6xl mx-auto justify-center">
        <h1 className="px-7 text-left py-3 h-fit w-fit bg-orange-400 rounded-t-lg text-xl font-bold text-white">
          Application form for On Duty
        </h1>
        <form
          encType="multipart/form-data"
          action="http://localhost:5000/addOd"
          method="POST"
          className="p-10 bg-black/25 items-start rounded-b-lg"
        >
          <h2 className=" px-2 text-left font-sans text-xl text-white font-semibold max-w-fit">
            netId
          </h2>
          <input className="containinput" placeholder="Enter your netId" type="text" name="netId" />
          <h2 className=" px-2 text-left font-sans text-xl text-white font-semibold max-w-fit">
            Title
          </h2>
          <input
            className="containinput"
            placeholder="Enter the title of On Duty application here"
            type="text"
            name="title"
          />

          <h2 className=" px-2 text-left font-sans text-xl text-white font-semibold max-w-fit">
            Description
          </h2>
          <textarea
            className="containinput1"
            placeholder="Enter the description of On Duty application here"
            name="description"
          />

          <h2 className=" px-2 text-left font-sans text-xl text-white font-semibold max-w-fit">
            Tenure
          </h2>
          <div className="flex flex-row">
            <input name="from" className="containinput2 text-white" type="date" />
            <input name="to" className="containinput2 text-white" type="date" />
          </div>

          <h2 className="px-2 text-left font-sans text-xl text-white font-semibold max-w-fit mb-4">
            Upload Proof
          </h2>
          <input name="file" className="containinput3" type="file" />

          <button className="containinput5 mx-auto" type="submit">
            Submit for Review
          </button>
        </form>
      </div>
    </div>
  )
}

export default onDuty
