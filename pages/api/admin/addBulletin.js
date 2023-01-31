import connectDB from "@/util/connectDB"
import BulletinBoard from "@/schema/BulletinBoard"
connectDB()

export default async function handler(req, res) {
  const bulletins = await BulletinBoard.find()
  res.status(200).json({ bulletins })
}
