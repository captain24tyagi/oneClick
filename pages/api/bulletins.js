import connectDB from "@/util/connectDB"
import BulletinBoard from "@/schema/BulletinBoard"
connectDB()

export default async function handler(req, res) {
  const { title, description } = req.body
  const bulletin = await BulletinBoard.create({ title, description, file: req.file.filename })
  res.status(200).json({ bulletin })
}
