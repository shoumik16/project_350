import Layout from "@/components/Layout";
import Link from "next/link";
export default function Products()
{
  return (
    <Layout>
      <div>
      <Link  href='/products/new' legacyBehavior>
        <a className="btn">add new product</a>
        </Link>
      </div>
        
    </Layout>
  )
}