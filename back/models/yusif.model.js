const mongoose=require("mongoose")

const Yusif=mongoose.model("yusif", new mongoose.Schema({
    name:String,
    price:Number,
    image:String
}))
module.exports={Yusif}