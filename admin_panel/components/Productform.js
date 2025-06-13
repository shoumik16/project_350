import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Spinners from "@/components/Spinners"; // Adjust the path based on your project structure
import { useEffect } from "react";
export default function Productform({
  _id,
  name:existingName,
  about:existingAbout,
  price:existingPrice,
  images:existingImage,
  category:existingCategory
})
{   
    const [name,setName]=useState(existingName || '')
    const [about,setAbout]=useState(existingAbout || '')
    const [price,setPrice]=useState(existingPrice || '')
    const [images,setImage]=useState(existingImage || [])
    const [goproduct,setGoproduct]=useState(false)
    const [uploading,setUpload]=useState(false)
    const[category,setCategory]=useState(existingCategory || '')
    const[categories,setCategories]=useState([])
    const router=useRouter()
    useEffect(()=>{
         axios.get('/api/cat').then(res =>{
                    
                     setCategories(res.data)
             })
    },[])
    async function f(ev)
     {     
        ev.preventDefault()
           const productInfo={name,about,price,images,category}
          
           if(_id)
           {
            await axios.put('/api/products',{...productInfo,_id,category})
           }
           else
           {
            await axios.post('/api/products',productInfo).then(res=>{
              console.log(res.data)
            })
            
           }
           setGoproduct(true)
          
     }
     if(goproduct)
     {
     router.push('/products')
     }
     async function uploadPhotos(ev)
     {
        const files=ev.target?.files
        if(files?.length>0)
        { 
          setUpload(true)
          const data = new FormData()
          for(const file of files)
          {
            data.append('file',file)
          }
          const res=await axios.post('/api/upload',data)
          setImage(im=>{
            return [...im,...res.data.urls]
          })
          setUpload(false)
         }
     }

     

    return (
      
        <form onSubmit={f}>
        <label>name</label>
        <input type="text" placeholder="product name" value={name} onChange={ev=>setName(ev.target.value)}/>
        <label>
          Photos
        </label>
       
        <div className="mb-2 flex gap-2">
        {!!images?.length && images.map(l => (
            <div key={l} className="h-24">
              <img src={l} alt=""/>
              </div>
          ))}
           {
            uploading&&(
              <div className="h-24">
                <Spinners />
                </div>
            )
          }
        <label className=" w-24 h-24 border bg-gray-500 text-center flex items-center justify-center gap-1">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
  </svg>
  <div>Upload</div>
  <input type="file" className="hidden" onChange={uploadPhotos} name="file" />
</label>

        {!images?.length&&(<div>
            No Photo
            </div>)}
        </div>
        <label>
          Add Category
        </label>
        <select value={category} onChange={ev=>setCategory(ev.target.value)}>
          
        <option value="">No Category</option>
                {categories.length >0 && categories.map(x =>(
                        <option value={x._id}>
                            {x.name}
                        </option>
                    ))} 
        </select>
          
        <label>about</label>
        <textarea placeholder="descripion" value={about} onChange={ev=>setAbout(ev.target.value)}/>
        <label> price</label>
        <input type="number" placeholder="price" value={price} onChange={ev=>setPrice(ev.target.value)}/>
        <button className="btn">Save It</button>
        </form>
        
    )
}