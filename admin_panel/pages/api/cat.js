import {Cat} from "@/models/Cat"
import { mongooseConnect } from "@/lib/mongoose"
export default async function handle (req,res)
{
const {method}=req
 await mongooseConnect()

 if(method==='GET')
 {
    res.json(await Cat.find())
 }

if(method==='POST')
{
    const {name,parent} =req.body
    console.log("xxxxx")
    console.log(parent)
    const data=await Cat.create({
        name,parentcat:parent
    })
    res.json(data)
}
}