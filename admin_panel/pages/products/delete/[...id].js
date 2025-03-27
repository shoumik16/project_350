import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Layout from "@/components/Layout";
export default function DeleteProduct()
{
    const router=useRouter()
    const[pro,setPro]=useState(null)
    const{id}=router.query
    useEffect(()=>
    {
        if(!id)
        {
            return
        }
    axios.get('/api/products?id='+id).then(response=>{
        console.log(response.data)
        setPro(response.data)
    })
    },[id])
function goBack()
{
    router.push('/products')
}
 async function del()
{
     await axios.delete('/api/products?id='+id)
     goBack()
}
   return(
    <Layout>
        <h1>
            Do you want to delete
        &nbsp;"{pro?.name}"?
        </h1>
       <div>
       <button className="red" onClick={del}>
            Yes
        </button>
        <button onClick={goBack} className="btn-default">
            No
        </button>
       </div>
    </Layout>
   )
}