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
                    <Link href={'./products/edit/'+x._id}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                     </svg>

                    Edit</Link>
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