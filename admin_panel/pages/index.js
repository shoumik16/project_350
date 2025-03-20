import { useSession, signIn, signOut } from "next-auth/react"
import Nav from "@/components/Nav";
export default function Home() {
  const { data: session } = useSession()
  if(!session)
  {return (
    
    <div className="w-screen h-screen flex items-center bg-blue-600">
      <div className="text-center w-full">
        <button className="bg-white p-2 rounded-md" onClick={()=>signIn('google')}>Login with google</button>
      </div>
      
    </div>
  )}
  return (
    
    <div className="bg-blue-600 w-screen h-screen">
      <Nav />
     logged in {session.user.name}
      
    </div>
  );
}
