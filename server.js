import dotenv from 'dotenv';
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

//middleware
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error: "))
db.once("open", () => console.log("Connected to MongoDB"))

const UserSchema = new mongoose.Schema({
  name: String, 
  email: String,
})
const User = mongoose.model("User", UserSchema)


app.get("/", (req, res) => {
  res.send("API is running...")
})


app.get("/users", async (req,res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({message: err.message})
  }
})


//new user
app.post("/users", async (req,res) => {
  const {name, email} = req.body;
  const newUser = new User({name, email})

  try {
    await newUser.save()
    res.status(201).json(newUser)
  } catch(err) {
    res.status(400).json({message: err.message})
  }
})


app.listen(PORT, () => console.log(`Server running on port ${PORT}`))