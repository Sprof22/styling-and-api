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
          <a href="/api/auth/signout">Sign Out</a>
        </li>): <li onClick={()=>signIn('github') }>
          <a href="/api/auth/signin">Sign in</a>
        </li>}
       

        
      </ul>
    </nav>
  );
}

export default Navbar;
