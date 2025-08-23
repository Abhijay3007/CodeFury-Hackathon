import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { Separator } from "@/components/ui/separator";
import { ShoppingCart, Star } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { CertificationBadge } from "@/components/CertificationBadge";

// Import product images
import organicTomatoesImg from "@/assets/products/organic-tomatoes.jpg";
import freshCarrotsImg from "@/assets/products/fresh-carrots.jpg";
import greenLettuceImg from "@/assets/products/green-lettuce.jpg";
import cucumberSeedsImg from "@/assets/products/cucumber-seeds.jpg";
import cornSeedsImg from "@/assets/products/corn-seeds.jpg";
import pepperSeedsImg from "@/assets/products/pepper-seeds.jpg";
import gardenTractorImg from "@/assets/products/garden-tractor.jpg";
import irrigationSystemImg from "@/assets/products/irrigation-system.jpg";
import fertilizerSpreaderImg from "@/assets/products/fertilizer-spreader.jpg";

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
          image: organicTomatoesImg,
          rating: 4.8,
          inStock: true,
          certifications: [
            { name: "USDA Organic", type: "organic" as const, verified: true },
            { name: "Non-GMO", type: "quality" as const, verified: true }
          ]
        },
        {
          name: "Fresh Carrots",
          price: "₹850",
          capacity: "3 lbs",
          image: freshCarrotsImg,
          rating: 4.6,
          inStock: true,
          certifications: [
            { name: "Organic Certified", type: "organic" as const, verified: true },
            { name: "Pesticide Free", type: "safety" as const, verified: true }
          ]
        },
        {
          name: "Green Lettuce",
          price: "₹625",
          capacity: "2 lbs",
          image: greenLettuceImg,
          rating: 4.4,
          inStock: false,
          certifications: [
            { name: "Organic", type: "organic" as const, verified: true }
          ]
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
          image: cucumberSeedsImg,
          rating: 4.9,
          inStock: true,
          certifications: [
            { name: "Certified Seeds", type: "quality" as const, verified: true },
            { name: "High Yield", type: "quality" as const, verified: true }
          ]
        },
        {
          name: "Corn Seeds",
          price: "₹2,250",
          capacity: "100 seeds",
          image: cornSeedsImg,
          rating: 4.7,
          inStock: true,
          certifications: [
            { name: "Premium Grade", type: "quality" as const, verified: true },
            { name: "Hybrid Variety", type: "quality" as const, verified: true }
          ]
        },
        {
          name: "Pepper Seeds",
          price: "₹1,875",
          capacity: "25 seeds",
          image: pepperSeedsImg,
          rating: 4.5,
          inStock: true,
          certifications: [
            { name: "Disease Resistant", type: "quality" as const, verified: true }
          ]
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
          image: gardenTractorImg,
          rating: 4.8,
          inStock: true,
          certifications: [
            { name: "ISO 9001", type: "iso" as const, verified: true },
            { name: "Safety Certified", type: "safety" as const, verified: true },
            { name: "CE Marked", type: "safety" as const, verified: true }
          ]
        },
        {
          name: "Irrigation System",
          price: "₹89,999",
          capacity: "Covers 2 acres",
          image: irrigationSystemImg,
          rating: 4.6,
          inStock: true,
          certifications: [
            { name: "Water Efficient", type: "quality" as const, verified: true },
            { name: "ISO 14001", type: "iso" as const, verified: true }
          ]
        },
        {
          name: "Fertilizer Spreader",
          price: "₹34,950",
          capacity: "50 lb capacity",
          image: fertilizerSpreaderImg,
          rating: 4.3,
          inStock: false,
          certifications: [
            { name: "Quality Tested", type: "quality" as const, verified: false }
          ]
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
                        
                        {/* Certification Badges */}
                        <div className="flex flex-wrap gap-1 mt-2">
                          {product.certifications.map((cert, certIndex) => (
                            <CertificationBadge
                              key={certIndex}
                              certification={cert}
                              className="text-xs"
                            />
                          ))}
                        </div>
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