import { createGlobalStyle } from "styled-components";
const Gs=createGlobalStyle`
body
{
padding:0;
margin:0;
}
`

export default function App({ Component, pageProps }) {
  return (
    <>
     <Component {...pageProps} />
    <Gs />
    </>
   
  )
}
