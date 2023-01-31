const express = require("express")
const mongoose = require("mongoose")
const path = require("path")
const multer = require("multer")
var cors = require("cors")

require("dotenv").config()

const BulletinBoard = require("./schema/BulletinBoard")
const ODML = require("./schema/ODML")

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
  try {
    const { title, description } = req.body
    const bulletin = await BulletinBoard.create({ title, description, file: req.file.filename })
    res.redirect("http://localhost:3000/")
  } catch (e) {
    console.error(e.message)
    res.status(400).json({ error: e.message })
  }
})

app.post("/deleteBulletin", upload.single("file"), async (req, res) => {
  try {
    const { id } = req.body
    const bulletin = await BulletinBoard.findByIdAndDelete(id)
    res.json({ bulletin })
  } catch (error) {
    console.error(error)
    res.status(400).json(error)
  }
})

app.get("/bulletins", async (req, res) => {
  const bulletins = await BulletinBoard.find()
  res.json(bulletins)
})

// OD
app.post("/addOd", upload.single("file"), async (req, res) => {
  const { title, description, netId, from, to } = req.body
  const od = await ODML.create({
    type: "OD",
    netId,
    title,
    description,
    file: req.file.filename,
    from,
    to,
  })
  res.json(od)
})

// ML
app.post("/addMl", upload.single("file"), async (req, res) => {
  try {
    const { title, description, netId, from, to } = req.body
    const ml = await ODML.create({
      type: "ML",
      netId,
      title,
      description,
      file: req.file.filename,
      from,
      to,
    })
    res.redirect("http://localhost:3000/studentDashboard")
  } catch (error) {
    console.error(error)
    res.status(400).json(error)
  }
})

app.post("/approve", async (req, res) => {
  const { id } = req.body
  await ODML.findByIdAndUpdate(id, { ciApproved: true })
  res.json(od)
})

app.post("/approved", async (req, res) => {
  const { id } = req.body
  await ODML.findByIdAndUpdate(id, { hodApproved: true })
  res.json(od)
})

app.listen(5000)
