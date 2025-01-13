'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import './login.css'


export default function Layout({child}){
    const pathName=usePathname();

    child
    return(<div>
    { 
        pathName!=="http://localhost:3000/about"? 
        <center> <ul className="login-menu">
     <li>
                    <h4>Login Navbar</h4>
                </li>
        <li>
            <Link href="/login">Login Admin</Link>
        </li>
      </ul>
      This is common layout Area
        <main>{child}</main></center>:<h3>Go to Home</h3>
    }
    </div>)
}