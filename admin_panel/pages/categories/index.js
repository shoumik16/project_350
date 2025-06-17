import Layout from "@/components/Layout"
import { useState } from "react"
import axios from "axios"
import { useEffect } from "react"

export default function categories()
{   
    const[name,setName] = useState('')
    const[cat,setCat] =useState([])
    const[parent,setParent]=useState('')
    const[edited,setEdited]=useState('')
    const[features,setFeatures]=useState([])
    useEffect(()=>{
        f1()
     },[])
    function edit(x)
    {
        setEdited(x)
        setParent(x.parentcat?._id)
        setName(x.name)
        setFeatures(x.feat)
    }
    function handleName(index,feature,newName)
    {
           setFeatures(prev =>{
            const pro = [...prev]
            pro[index].Name=newName
            return pro
           })
           console.log(features)
    }
     function handleValues(index,feature,newValue)
    {
           setFeatures(prev =>{
            const pro = [...prev]
            pro[index].values=newValue
            return pro
           })
            console.log(features)
    }
    function rmv(index)
    {
            setFeatures(pp =>{
                return [...pp].filter((p,pi)=>{
                    return pi !== index
                })
            })
    }
    
    function add ()
    {
        setFeatures(x=>{
            return [...x, {Name:'',values:''}]
        })
         console.log(features)
    }

    function f1()
    {
        axios.get('/api/cat').then(res =>{
            console.log(res.data)
            setCat(res.data)
    })
    }
    async function deletecat(x)
    {
        const{_id}=x
        await axios.delete('/api/cat?_id='+_id)
        f1()
    }
    async function  f(ev) {
        ev.preventDefault()
        const data={name,parent,features}
        if(edited)
        {   
            data._id=edited._id
            const res=await axios.put('/api/cat',data)
            console.log(res)
            f1()
            setEdited('')
            setParent('')
            setName('')
            setFeatures([])

        }
        else
        {
        const res=await axios.post('/api/cat',{name,parent,
            features:features.map(pp=>(
                {
                    Name:pp.Name,
                    values:pp.values.split(',')
                }
            ))

        })
        console.log(res)
        setParent('')
            setName('')
            setFeatures([])
        f1()
        }
    }
    return (
        <Layout>
            <h1>
                Categories
            </h1>
            <label>{edited? `Edit Category ${edited.name}` :`New Category`}</label>
            <form  onSubmit={f}>
                <div className="flex gap-1"><input className="mb-0"  type="text" placeholder={'Category Name'}
                onChange={ev=>setName(ev.target.value)} value={name} />


                <select className="mb-0"   onChange={ev=>setParent(ev.target.value)} value={parent}>
                  
                   
                    <option value="">No Parent Category</option>
                {cat.length >0 && cat.map(x =>(
                        <option value={x._id}>
                            {x.name}
                        </option>
                    ))} 
                </select>
                </div>
                
                 <div className="mb-2">
                    <label className="block">
                        Features

                    </label>
                    {
                           features.length>0&&features.map((feature,index)=>(
                            <div className="flex">
                              <input type="text"  onChange={ev => handleName(index,feature,ev.target.value)} value={feature.Name} />

                              <input type="text" placeholder="Values"  onChange={ev => handleValues(index,feature,ev.target.value)} value={feature.values}/>
                              <div>
                                <button className="btn" type="button" onClick={()=>rmv(index)}>
                                    Delete
                                </button>
                                </div>
                           </div>

                           ))
                    } 

                    <button type="button" className="btn py-3" onClick={add}>Add New Feature</button>

                 </div>
                  {
                    edited && (
                        <button className="btn" type="button " onClick={()=>{
                             setEdited('')
            setParent('')
            setName('')
            setFeatures([])
                        }}>
                            cancel it
                        </button>
                    )
                  }
                 <button type="submit" className="btn">
                    save
                </button>
               
            </form>
            {
                !edited&&(
                     <table className="basic mt-4">
              <thead>
                <tr>
                    <td>Category</td>
                    <td>Parent Category</td>
                    <td>Option</td>
                </tr>
              </thead>
              <tbody>
                {cat.length >0 && cat.map(x =>(
                        <tr>
                            <td>{x.name}</td>
                           <td>{x?.parentcat?.name}</td>
                           <td>
                            <button className="btn" onClick={()=>edit(x)}>
                                Edit
                            </button>
                            <button className="btn" onClick={()=>deletecat(x)}>
                                Delete
                            </button>
                           </td>
                        </tr>
                    ))}
              </tbody>
            </table>
                )
            }
            </Layout>
           
    )
}