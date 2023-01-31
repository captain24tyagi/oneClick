const BulletinCard = (props) => {
  return (
    <div className="border border-black p-12 flex text-left items-center justify-center space-x-8 rounded-xl bg-white">
      <div className="border-r-2 border-black w-80 pr-4">
        <h2 className="font-bold text-xl pr-3 mb-4">{props.title}</h2>
        <a className="text-[#086DC9] underline" href={props.file} target="_blank">
          View Circular
        </a>
      </div>
      <p className="text-blue-500 font-medium text-lg max-w-[650px]">{props.description}</p>
    </div>
  )
}

export default BulletinCard
