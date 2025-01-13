'use client'
import Link from "next/link"
import { useRouter } from "next/navigation";

 const Login=()=>{
const router = useRouter();
    return(<>
        <center><h2>This is Login page</h2>
        <Link href="/">Home</Link></center>
        <button onClick={()=>router.push("/studentlist")}>Student List</button>
    </>)

}
export default Login