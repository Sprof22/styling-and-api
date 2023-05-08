import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

function Navbar() {
  const { data: session } = useSession();
  return (
    <nav className="header">
      <h1 className="logo">
        <a href="/">NextAuth</a>
      </h1>
      <ul className={`main-nav`}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        {session ? ( <li onClick={()=>signOut() }>
          <Link href="/api/auth/signout">Sign Out</Link>
        </li>): <li onClick={()=>signIn('github') }>
          <Link href="/api/auth/signin">Sign in</Link>
        </li>}
       

        
      </ul>
    </nav>
  );
}

export default Navbar;