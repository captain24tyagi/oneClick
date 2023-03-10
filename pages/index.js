import Head from "next/head"
import BulletinCard from "@/components/BulletinCard"
import { useEffect, useState } from "react"

export default function Home() {
  const [data, setData] = useState(null)
  useEffect(() => {
    const data = fetch("http://localhost:5000/bulletins", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      })
  }, [])

  return (
    <div className='h-full text-center items-center justify-between max-w-full p-10 bg-[url("/imageb.png")]'>
      <Head>
        <title>oneClick</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-6xl mx-auto my-8">
        <h1 className="px-7 text-left py-3 h-fit w-fit bg-[#086DC9] rounded-t-lg text-xl font-bold text-white">
          Updates / News
        </h1>

        <div className="max-w-6xl space-y-8 bg-black/25 p-12 rounded-b-xl rounded-tr-xl">
          {data &&
            data.map((data) => (
              <BulletinCard
                key={data._id}
                title={data.title}
                description={data.description}
                file={data.file}
                createdAt={data.createdAt}
              />
            ))}
        </div>
      </div>
    </div>
  )
}
