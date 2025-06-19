import { Product } from "@/models/Product"
import { mongooseConnect } from "@/lib/mongoose"
import { isAdminRequest  } from "./auth/[...nextauth]"
export default async function handle(req,res)
{   
    const {method} =req
    await mongooseConnect()
     await isAdminRequest(req,res);
    if(method==='POST')
    {
         const {name,about,price,images,category,productProperties}=req.body
         const data=await Product.create(
            {
                name,about,price,images,category,productProperties
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
        const {name,about,price,_id,images,category} =req.body
        await Product.updateOne({_id},{name,about,price,images,category,productProperties})
        res.json(true)
    }
    if(method==='DELETE')
    {
        if(req.query?.id)
        {
            await Product.deleteOne({_id:req.query?.id})
            res.json(true)
        }
    }
 }
