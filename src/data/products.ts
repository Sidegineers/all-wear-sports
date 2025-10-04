import { Product } from "@/types/product";
import cricketBat from "@/assets/cricket-bat.jpg";
import cricketHelmet from "@/assets/cricket-helmet.jpg";
import cricketJersey from "@/assets/cricket-jersey.jpg";
import cricketGloves from "@/assets/cricket-gloves.jpg";
import cricketBall from "@/assets/cricket-ball.jpg";

export const products: Product[] = [
  {
    id: "1",
    name: "Professional Cricket Bat",
    description: "Premium English willow bat for professional players",
    price: 299.99,
    category: "equipment",
    image: cricketBat,
    inStock: true,
  },
  {
    id: "2",
    name: "Cricket Helmet",
    description: "Safety-certified helmet with titanium grille",
    price: 89.99,
    category: "equipment",
    image: cricketHelmet,
    inStock: true,
  },
  {
    id: "3",
    name: "Team Jersey",
    description: "Official team jersey with moisture-wicking fabric",
    price: 49.99,
    category: "jerseys",
    image: cricketJersey,
    inStock: true,
  },
  {
    id: "4",
    name: "Batting Gloves",
    description: "Premium leather batting gloves with finger protection",
    price: 44.99,
    category: "accessories",
    image: cricketGloves,
    inStock: true,
  },
  {
    id: "5",
    name: "Cricket Ball (Pack of 6)",
    description: "Match-quality leather cricket balls",
    price: 54.99,
    category: "accessories",
    image: cricketBall,
    inStock: true,
  },
  {
    id: "6",
    name: "Kashmir Willow Bat",
    description: "Affordable Kashmir willow bat for practice",
    price: 79.99,
    category: "equipment",
    image: cricketBat,
    inStock: true,
  },
  {
    id: "7",
    name: "Training Jersey",
    description: "Lightweight training jersey for practice sessions",
    price: 29.99,
    category: "jerseys",
    image: cricketJersey,
    inStock: true,
  },
  {
    id: "8",
    name: "Wicket Keeping Gloves",
    description: "Professional wicket keeping gloves with extra padding",
    price: 64.99,
    category: "accessories",
    image: cricketGloves,
    inStock: true,
  },
];
