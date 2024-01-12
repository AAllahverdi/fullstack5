const { Yusif } = require("../models/yusif.model")

const YusifController = {
    getAll: async (req, res) => {
        try {
            const target=await Yusif.find()
            res.send(target)

        } catch (error) {
       res.send("tapmadm")
        }
    },
    getByid: async (req, res) => {
        try {
            const {id}=req.params
            const orxan= await Yusif.findById(id)
            res.send(orxan)



        } catch (error) {
     res.send("tapmadi")
        }
    }
    , post: async (req, res) => {
        try {
            const {name,price,image}=req.body
            const NewOrxan= new Yusif({name,price,image})
             await NewOrxan.save()
             res.send("yarandi")

        } catch (error) {
            res.send("yaranmadi")
        }
    },
    delete: async(req,res)=>{
        try{
            const {id}=req.params
            await Yusif.findByIdAndDelete(id)
            res.sen("siliondi")
        }catch(error){
            res.send("silonmedi")

        }
    }




}
module.exports={YusifController}