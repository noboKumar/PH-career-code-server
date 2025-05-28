require("dotenv").config();
const express = require("express");
const cors = require('cors');
const app = express();
const port = process.env.port || 3000;

// middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res)=>{
    res.send(`server is running... port: ${port}`)
})

app.listen(port, ()=>{
    console.log(`server is running on ${port}`);
})
