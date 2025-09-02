import Header from "@/components/Header";
import Featured from "@/components/Featured";
import { Product } from "@/models/Product";
import { mongooseConnect } from "@/lib/mongoose";
import LatestProducts from "@/components/LatestProducts";
export default function Home({featuredProduct,newProducts}) {
  
  //console.log(featuredProduct.productProperties)
  return (
   
    <div>
      <div>
      </div>
      <Header />
      <Featured featuredProduct={featuredProduct}/>
      <LatestProducts newProducts={newProducts}/>
     
      
    </div>
  );
}
export async function getServerSideProps() {
  const featuredProductId = '685e8e3b79ffda4b6fad9573';
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);
    const newProducts = await Product.find({}, null, {sort: {'_id':-1}, limit:10});
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
    },
  };
}

