const express=require("express")
const app=express()
const cors=require("cors")
const mongoose=require("mongoose")
const YusifRoutes=require("./router/yusif.routes")
app.use(cors())
require('dotenv').config()
const PORT=process.env.PORT || 6565
app.use(express.json())
mongoose.connect("mongodb+srv://tu7ljr8ww:Allahverdi123@cluster0.hlwgpfm.mongodb.net/").then(res=>{
    console.log("connetcre to mongoose")
})
app.use("/yusif",YusifRoutes)

app.listen(PORT, (()=>{
    console.log("backend conneted")
}))