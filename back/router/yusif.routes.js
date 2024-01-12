const express=require("express")
const routes=express.Router()
const {YusifController}=require("../controller/yusif.controler")

routes.get("/",YusifController.getAll)
routes.get("/:id",YusifController.getByid)
routes.post("/",YusifController.post)
routes.delete("/:id",YusifController.delete)
 
module.exports =routes