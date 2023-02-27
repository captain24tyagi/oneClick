const express = require("express")
const mongoose = require("mongoose")
const path = require("path")
const multer = require("multer")
var cors = require("cors")
const nodemailer = require("nodemailer")

require("dotenv").config()

const BulletinBoard = require("./schema/BulletinBoard")
const ODML = require("./schema/ODML")
const Grievance = require("./schema/Grievance")

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use("/uploads", express.static(path.join(__dirname, "uploads")))

async function sendMail(title, description) {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "oneclick962@gmail.com",
      pass: process.env.APP_PW,
    },
  })

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: "oneclick962@gmail.com", // sender address
    to: "sarthak2002tyagi@gmail.com, aritrasaha65@gmail.com, soumil13@gmail.com", // list of receivers
    subject: `${title}`, // Subject line
    text: `${description} : `, // plain text body
  })
}

async function sendNotif(title, description) {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "oneclick962@gmail.com",
      pass: process.env.APP_PW,
    },
  })

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: "oneclick962@gmail.com", // sender address
    to: "soumil13@gmail.com", // list of receivers
    subject: `${title}`, // Subject line
    text: `${description} : `, // plain text body
  })
}

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
    await sendMail(title, description)
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
  res.redirect("http://localhost:3000/studentDashboard")
})

app.post("/addGrievance", upload.single("file"), async (req, res) => {
  const { title, description, netId, type } = req.body
  await Grievance.create({
    type,
    netId,
    title,
    description,
    file: req.file.filename,
  })
  res.redirect("http://localhost:3000/hostelDashboard")
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

app.get("/viewodMls", upload.single("file"), async (req, res) => {
  const odMls = await ODML.find()
  res.json(odMls)
})

app.post("/viewOdMl", async (req, res) => {
  try {
    const { netId } = req.body
    const odml = await ODML.find({ netId })
    res.json(odml)
  } catch (error) {
    console.error(error)
    res.status(400).json(error)
  }
})

app.post("/viewGrievances", async (req, res) => {
  try {
    const { netId } = req.body
    const odml = await Grievance.find({ netId })
    res.json(odml)
  } catch (error) {
    console.error(error)
    res.status(400).json(error)
  }
})

app.post("/approve", async (req, res) => {
  const { id } = req.body
  const odml = await ODML.findByIdAndUpdate(id, { hodApproved: true })
  await sendNotif(odml.title, odml.description)
  res.redirect("http://localhost:3000/admin/facultyDashboard")
})

app.post("/approved", async (req, res) => {
  const { id } = req.body
  await ODML.findByIdAndUpdate(id, { hodApproved: true })
  res.json(od)
})

app.listen(5000)
