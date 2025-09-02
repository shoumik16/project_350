import { createGlobalStyle } from "styled-components";
import { CartContextProvider } from "@/components/Cart";
const Gs=createGlobalStyle`
body
{
background-color:#eee;
padding:0;
margin:0;
}
`

export default function App({ Component, pageProps }) {
  return (
    <>
         <Gs />
     
     <CartContextProvider>
       <Component {...pageProps} />
     </CartContextProvider>
    </>
   
  )
}
