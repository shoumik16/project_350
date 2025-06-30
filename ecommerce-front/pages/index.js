import Header from "@/components/Header";
//import Center from "@/components/Center";
import Featured from "@/components/Featured";
import { Product } from "@/models/Product";
import { mongooseConnect } from "@/lib/mongoose";
export default function Home({featuredProduct}) {
  
  //console.log(featuredProduct.productProperties)
  return (
   
    <div>
      <div>
        
      </div>
      <Header />


      <Featured featuredProduct={featuredProduct}/>
      
     
      
    </div>
  );
}
export async function getServerSideProps() {
  const featuredProductId = '686259f7ab9ffe135eaa2a2c';
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);
  console.log(featuredProduct)
  //const newProducts = await Product.find({}, null, {sort: {'_id':-1}, limit:10});
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      //newProducts: JSON.parse(JSON.stringify(newProducts)),
    },
  };
}

