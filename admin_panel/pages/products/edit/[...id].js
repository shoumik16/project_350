import Layout from "@/components/Layout";
import { useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { useState } from "react";
import Productform from "@/components/Productform";
export default function editProduct()
{
       const router=useRouter()
       const[productinfo,setProductinfo]=useState(null)
       const {id} =router.query
       useEffect(()=>{
        if(!id)
        {
            return
        }
        axios.get('/api/products?id='+id).then(res=>{
            setProductinfo(res.data)
        })
       },[id])
       if (!productinfo) {
        return <div>Loading...</div>; // Loading state until product info is fetched
    }
    return (
        <Layout>
            <h1>Edit Product Details</h1>
            <Productform {...productinfo}/>
        </Layout>
    )
}