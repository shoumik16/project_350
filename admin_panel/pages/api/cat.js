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
    const {name} =req.body
    const data=await Cat.create({
        name
    })
    res.json(data)
}
}