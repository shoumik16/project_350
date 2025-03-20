import { useSession, signIn, signOut } from "next-auth/react"
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
    
    <div>
     logged in {session.user.image}
      
    </div>
  );
}
