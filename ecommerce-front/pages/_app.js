import { createGlobalStyle } from "styled-components";
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
     <Component {...pageProps} />
    
    </>
   
  )
}
