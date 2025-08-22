import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { Separator } from "@/components/ui/separator";
import { ShoppingCart, Star } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

const FarmerKit = () => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (product: any, category: string) => {
    const cartItem = {
      id: `${category}-${product.name}`,
      name: product.name,
      price: product.price,
      capacity: product.capacity,
      image: product.image,
      category: category
    };
    
    addToCart(cartItem);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };
  const productCategories = [
    {
      category: "Vegetables",
      products: [
        {
          name: "Organic Tomatoes",
          price: "₹1,299",
          capacity: "5 lbs",
          image: "https://images.unsplash.com/photo-1546470427-e28b47d1b3cd?w=400&h=300&fit=crop",
          rating: 4.8,
          inStock: true
        },
        {
          name: "Fresh Carrots",
          price: "₹850",
          capacity: "3 lbs",
          image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&h=300&fit=crop",
          rating: 4.6,
          inStock: true
        },
        {
          name: "Green Lettuce",
          price: "₹625",
          capacity: "2 lbs",
          image: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=400&h=300&fit=crop",
          rating: 4.4,
          inStock: false
        }
      ]
    },
    {
      category: "Seeds",
      products: [
        {
          name: "Cucumber Seeds",
          price: "₹1,599",
          capacity: "50 seeds",
          image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
          rating: 4.9,
          inStock: true
        },
        {
          name: "Corn Seeds",
          price: "₹2,250",
          capacity: "100 seeds",
          image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=400&h=300&fit=crop",
          rating: 4.7,
          inStock: true
        },
        {
          name: "Pepper Seeds",
          price: "₹1,875",
          capacity: "25 seeds",
          image: "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?w=400&h=300&fit=crop",
          rating: 4.5,
          inStock: true
        }
      ]
    },
    {
      category: "Equipment",
      products: [
        {
          name: "Garden Tractor",
          price: "₹2,49,900",
          capacity: "42-inch cutting deck",
          image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=300&fit=crop",
          rating: 4.8,
          inStock: true
        },
        {
          name: "Irrigation System",
          price: "₹89,999",
          capacity: "Covers 2 acres",
          image: "https://images.unsplash.com/photo-1574263867128-a3d5c1b1deaa?w=400&h=300&fit=crop",
          rating: 4.6,
          inStock: true
        },
        {
          name: "Fertilizer Spreader",
          price: "₹34,950",
          capacity: "50 lb capacity",
          image: "https://images.unsplash.com/photo-1574263867128-a3d5c1b1deaa?w=400&h=300&fit=crop",
          rating: 4.3,
          inStock: false
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground">
                FarmerKit Marketplace
              </h1>
              <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
                Everything you need for successful farming - from fresh produce to premium seeds and professional equipment
              </p>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            {productCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-16">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {category.category}
                  </h2>
                  <Separator className="w-24 mx-auto" />
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.products.map((product, productIndex) => (
                    <Card 
                      key={productIndex} 
                      className="group hover:shadow-medium transition-all duration-300 border-border/50 bg-card"
                    >
                      <div className="relative overflow-hidden rounded-t-lg">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {!product.inStock && (
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <Badge variant="destructive" className="text-sm font-medium">
                              Out of Stock
                            </Badge>
                          </div>
                        )}
                      </div>
                      
                      <CardHeader className="pb-3">
                        <CardTitle className="text-xl font-bold text-foreground flex items-center justify-between">
                          {product.name}
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm text-muted-foreground">{product.rating}</span>
                          </div>
                        </CardTitle>
                      </CardHeader>
                      
                      <CardContent className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-2xl font-bold text-primary">{product.price}</span>
                          <Badge variant="secondary" className="bg-primary/5 text-primary">
                            {product.capacity}
                          </Badge>
                        </div>
                        
                        <div className="flex gap-2">
                          <Button 
                            className="flex-1 bg-primary hover:bg-primary/90 disabled:opacity-50" 
                            disabled={!product.inStock}
                            onClick={() => handleAddToCart(product, category.category)}
                          >
                            <ShoppingCart className="w-4 h-4 mr-2" />
                            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                          </Button>
                          <Button 
                            variant="outline"
                            className="px-6 border-primary text-primary hover:bg-primary/5 disabled:opacity-50" 
                            disabled={!product.inStock}
                          >
                            Buy
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default FarmerKit;