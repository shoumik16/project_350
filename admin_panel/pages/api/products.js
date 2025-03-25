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
        if(req.query?.id)
        {
          res.json(await Product.findOne({_id:req.query.id}))
        }
        else
       {
        res.json(await Product.find())
       }
    }
    if(method==='PUT')
    {
        const {name,about,price,_id} =req.body
        await Product.updateOne({_id},{name,about,price})
        res.json(true)
    }
 }
