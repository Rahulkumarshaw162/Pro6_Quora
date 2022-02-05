const res = require("express/lib/response")

data = req.body
const createDat = await userModel.findOneAndUpdate({_id:questionId},{name:name,price:price,phone},{newtue:true})
res.status(200).send({ })