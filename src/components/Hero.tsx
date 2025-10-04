import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/cricket-hero.jpg";

const Hero = () => {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60" />
      </div>
      
      <div className="container relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Elevate Your Game
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Premium cricket equipment, accessories, and jerseys for champions
        </p>
        <div className="flex gap-4 justify-center">
          <Link to="/shop">
            <Button size="lg" variant="secondary" className="text-lg">
              Shop Now
            </Button>
          </Link>
          <Link to="/shop?category=equipment">
            <Button size="lg" variant="outline" className="text-lg bg-white/10 text-white border-white hover:bg-white hover:text-primary">
              View Equipment
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
