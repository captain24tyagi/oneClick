import { ConnectButton } from "@rainbow-me/rainbowkit"
import Link from "next/link"

const Header = () => {
  return (
    <div className='flex h-full text-center items-center max-w-full bg-[url("/imageb.png")] justify-around bg-transparent/75 py-5'>
      <Link href='/'>
      <div className="flex items-center">
        <img src="/logo.png" alt="" />
        <h1 className="m-4 text-lg font-bold text-white">
          SRM Institute of Science <br />
          and Technology
        </h1>
      </div>
      </Link>
     
      <ConnectButton />
    </div>
  )
}

export default Header
