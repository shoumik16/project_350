import { workUnitAsyncStorage } from "next/dist/server/app-render/work-unit-async-storage.external";
import { createContext,useState } from "react";
export const CartContext=createContext({});
export function CartContextProvider({children})
{
     const[cartProducts,setcartProducts]=useState([])
     const ls=typeof window !== "undefined"? window.localStorage : null;
     
     function addtocart(productId)
{ 
           setcartProducts(prev=>[...prev,productId])
}
    return(

        <CartContext.Provider value={{cartProducts,setcartProducts,addtocart}}>
           {children}
        </CartContext.Provider>
    )
}