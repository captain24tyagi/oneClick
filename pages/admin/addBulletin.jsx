const addBulletin = () => {
  return (
    <div>
      <div className='h-full text-center items-center justify-between max-w-full py-10 px-10 bg-[url("/imageb.png")]'>
        <div className="items-center max-w-6xl mx-auto justify-center">
          <h1 className="px-7 text-left py-3 h-fit w-fit bg-orange-400 rounded-t-lg text-xl font-bold text-white">
            ADMIN: Add Bulletin
          </h1>
          <form className="p-10 bg-black/25 items-start" onSubmit={(e) => e.preventDefault()}>
            <h2 className="px-2 text-left font-sans text-xl text-white font-semibold max-w-fit">
              Title
            </h2>
            <input className="containinput" placeholder="Enter bulletin title" type="text" />
            <h2 className=" px-2 text-left font-sans text-xl text-white font-semibold max-w-fit">
              Description
            </h2>
            <textarea className="containinput1" placeholder="Enter bulletin description" />
            <h2 className="px-2 text-left font-sans text-xl text-white font-semibold max-w-fit">
              Upload Circular
            </h2>
            <input
              className="text-white border-white border-2 border-dashed px-64 py-8 m-4 bg-black/25 rounded-xl"
              type="file"
            />{" "}
            <br />
            <input
              className="text-white bg-orange-400 cursor-pointer py-4 px-6 rounded-xl"
              type="submit"
              value="Add Bulletin"
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default addBulletin
