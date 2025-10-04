import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";

const Shop = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryParam);

  useEffect(() => {
    setSelectedCategory(categoryParam);
  }, [categoryParam]);

  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products;

  const categories = [
    { value: null, label: "All Products" },
    { value: "equipment", label: "Equipment" },
    { value: "jerseys", label: "Jerseys" },
    { value: "accessories", label: "Accessories" },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Shop Cricket Gear</h1>
          <p className="text-muted-foreground text-lg">
            Browse our complete collection of premium cricket products
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category.label}
              variant={selectedCategory === category.value ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.value)}
            >
              {category.label}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
