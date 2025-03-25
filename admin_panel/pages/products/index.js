import Layout from "@/components/Layout";
import { useState } from "react";
import Link from "next/link";
import { useEffect } from "react";
import axios from "axios";
export default function Products()
{
const [info,setInfo]=useState([])
useEffect(()=>{
     axios.get('/api/products').then(res=>{
      setInfo(res.data)
     })
},[])
  return (
    <Layout>
      <div>
      <Link  href='/products/new' >
        <button className="btn">add new product</button>
        <table className="basic">
          <thead>
            <tr>
              <td>Product</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {
              info.map(x=>(
                <tr>
                  <td>
                    {x.name}
                  </td>
                  <td>
                    Buttons
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
        </Link>
      </div>
        
    </Layout>
  )
}