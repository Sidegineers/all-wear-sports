import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";

const Header = () => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-primary">All Wear Sports</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link to="/shop" className="text-sm font-medium transition-colors hover:text-primary">
            Shop
          </Link>
          <Link to="/shop?category=equipment" className="text-sm font-medium transition-colors hover:text-primary">
            Equipment
          </Link>
          <Link to="/shop?category=jerseys" className="text-sm font-medium transition-colors hover:text-primary">
            Jerseys
          </Link>
          <Link to="/shop?category=accessories" className="text-sm font-medium transition-colors hover:text-primary">
            Accessories
          </Link>
        </nav>

        <Link to="/cart">
          <Button variant="outline" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            {totalItems > 0 && (
              <Badge
                variant="destructive"
                className="absolute -right-2 -top-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
              >
                {totalItems}
              </Badge>
            )}
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
