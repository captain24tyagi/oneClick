const express = require("express")
const mongoose = require("mongoose")
const path = require("path")
const multer = require("multer")
var cors = require("cors")

require("dotenv").config()

const BulletinBoard = require("./schema/BulletinBoard")

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use("/uploads", express.static(path.join(__dirname, "uploads")))

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads")
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname))
  },
})
const upload = multer({ storage: storage })

mongoose.set("strictQuery", false)
mongoose.connect(process.env.DB_URI, () => {
  console.log("Connected to MongoDB")
})

// BULLETINS
app.post("/addBulletin", upload.single("file"), async (req, res) => {
  const { title, description } = req.body
  await BulletinBoard.create({ title, description, file: req.file.filename })
})

app.post("/deleteBulletin", upload.single("file"), async (req, res) => {
  try {
    const { id } = req.body
    const bulletin = await BulletinBoard.findByIdAndDelete(id)
    res.json({ bulletin })
  } catch (error) {
    console.error(error)
    res.json(error)
  }
})

app.get("/bulletins", async (req, res) => {
  const bulletins = await BulletinBoard.find()
  res.json(bulletins)
})

app.listen(5000)
