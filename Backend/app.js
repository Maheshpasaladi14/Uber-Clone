const express = require("express");
const dotEnv = require("dotenv");
dotEnv.config();

const app = express();

app.get("/",(req,res)=>{
    res.send("Welcome to Uber clone and Server is running on 8080")
})
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
