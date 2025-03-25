import { Product } from "@/models/Product"
import { mongooseConnect } from "@/lib/mongoose"
export default async function handle(req,res)
{   
    const {method} =req
    await mongooseConnect()
    if(method==='POST')
    {
         const {name,about,price}=req.body
         const data=await Product.create(
            {
                name,about,price
            }

         )
         res.status(200).json(data)
    }  
    if(method==='GET')
       {
        res.json(await Product.find())
       }
 }
