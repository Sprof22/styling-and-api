import Footer from "@/components/Footer";
import { getSession } from "next-auth/react";
import Head from "next/head";

function Blog({ data }) {
  return (
    <>
      <Head>
        <title>Blog Page</title>
        <meta dest />
      </Head>

      <h1 className="red-color">Blog Page</h1>
      <p>{data}</p>
    </> 
  );
}

export default Blog;

Blog.getLayout = function PageLayout(page) {
  return (
    <>
      <div style={{minHeight: "100vh"}}>
      {page}
      </div>
      <Footer />
    </>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if(!session){
    return {
      redirect: {
        destination: "/api/auth/signin?callbackUrl=http://localhost:3000/blog",
        permanent: false,
      }
    }
  }
  return {
    props: {
      data: session ? "PREMIUM Shii" : "REGULAR Shii",
    }
  }
}
