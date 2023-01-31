import { ConnectButton } from "@rainbow-me/rainbowkit"

const Header = () => {
  return (
    <div className="flex items-center justify-around bg-transparent/75 p-2">
      <div className="flex items-center">
        <img src="/logo.png" alt="" />
        <h1 className="m-4 text-lg font-bold text-white">
          SRM Institute of Science <br />
          and Technology
        </h1>
      </div>
      <ConnectButton />
    </div>
  )
}

export default Header
