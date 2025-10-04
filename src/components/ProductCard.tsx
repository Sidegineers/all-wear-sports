import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-[var(--shadow-card-hover)] group">
      <CardHeader className="p-0">
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
        <CardDescription className="text-sm">{product.description}</CardDescription>
        <p className="text-2xl font-bold text-primary mt-4">£{product.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          onClick={handleAddToCart} 
          className="w-full"
          disabled={!product.inStock}
        >
          {product.inStock ? "Add to Cart" : "Out of Stock"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
