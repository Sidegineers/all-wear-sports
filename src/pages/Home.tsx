import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Home = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-muted-foreground text-lg">
              Handpicked selection of our best cricket gear
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/shop">
              <Button size="lg">View All Products</Button>
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏏</span>
              </div>
              <h3 className="font-bold text-xl mb-2">Quality Guaranteed</h3>
              <p className="text-muted-foreground">
                All products are certified and tested for professional standards
              </p>
            </div>
            
            <div className="p-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚚</span>
              </div>
              <h3 className="font-bold text-xl mb-2">Fast Delivery</h3>
              <p className="text-muted-foreground">
                Quick and secure shipping across the UK
              </p>
            </div>
            
            <div className="p-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💯</span>
              </div>
              <h3 className="font-bold text-xl mb-2">Expert Support</h3>
              <p className="text-muted-foreground">
                Get advice from cricket professionals
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
