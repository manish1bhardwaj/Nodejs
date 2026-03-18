const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");


mongoose.connect("mongodb://localhost:27017/DataStore")
    .then(()=>{
    console.log("DB Connected");
    })
    .catch((err)=>{
    console.log("DB Not Connected");
    });

app.use(express.static(path.join(__dirname,"public")));

const userSchema = new mongoose.Schema({
    email:String,
    password:String
});

const Users = mongoose.model("Users",userSchema);
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "login.html"));
});

app.post("/submit", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Users.create({
      email,
      password
    });

    res.send(
      `<p>User created successfully (id: ${user._id}).</p><p><a href="/">Create another</a></p>`
    );
  } catch (err) {
    console.error("Error creating user:", err);
    res.status(500).send("Failed to create user.");
  }
});

const port =4000;
app.listen(port,()=>{
    console.log("Server is running at port 4000")
});





