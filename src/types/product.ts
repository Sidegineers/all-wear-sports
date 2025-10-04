export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'equipment' | 'accessories' | 'jerseys';
  image: string;
  inStock: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}
