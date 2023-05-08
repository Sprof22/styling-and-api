import { SessionProvider } from "next-auth/react"
import Navbar from "@/components/Navbar";
import "@/styles/yellow.css";
import "@/styles/blog.css";
import "../styles/globals.css";
import '../components/Navbar.css'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  if(Component.getLayout){
    return Component.getLayout( <Component {...pageProps} />)
  } //this is basically saying that if the component has a predefined layout... use the components layout
  return (
    <SessionProvider session={session}>
      <>
       <Navbar />
        <Component {...pageProps} />
      </>
    </SessionProvider>
  );
}

