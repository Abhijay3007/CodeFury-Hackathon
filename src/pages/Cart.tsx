import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";
import { Trash2, ShoppingBag, Plus, Minus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart, addToCart } = useCart();
  const { toast } = useToast();

  const handleRemoveItem = (itemId: string, itemName: string) => {
    removeFromCart(itemId);
    toast({
      title: "Item removed",
      description: `${itemName} has been removed from your cart.`,
    });
  };

  const handleClearCart = () => {
    clearCart();
    toast({
      title: "Cart cleared",
      description: "All items have been removed from your cart.",
    });
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace('₹', '').replace(',', ''));
      return total + (price * item.quantity);
    }, 0);
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main className="pt-20">
          <div className="container mx-auto px-4 py-20">
            <div className="text-center max-w-md mx-auto">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingBag className="w-12 h-12 text-muted-foreground" />
              </div>
              <h1 className="text-2xl font-bold text-foreground mb-4">Your cart is empty</h1>
              <p className="text-muted-foreground mb-8">
                Start shopping to add items to your cart
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90">
                <a href="/farmerkit">Continue Shopping</a>
              </Button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Header */}
        <section className="py-16 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">
                My Cart
              </h1>
              <p className="text-xl text-primary-foreground/90">
                Review your selected items before checkout
              </p>
            </div>
          </div>
        </section>

        {/* Cart Items */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-foreground">
                  Cart Items ({cartItems.length})
                </h2>
                <Button 
                  variant="outline" 
                  onClick={handleClearCart}
                  className="text-destructive border-destructive hover:bg-destructive/10"
                >
                  Clear Cart
                </Button>
              </div>

              <div className="grid gap-6 lg:grid-cols-3">
                {/* Items List */}
                <div className="lg:col-span-2 space-y-4">
                  {cartItems.map((item) => (
                    <Card key={item.id} className="border-border/50 hover:shadow-soft transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex gap-4">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-24 h-24 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="text-lg font-semibold text-foreground">{item.name}</h3>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleRemoveItem(item.id, item.name)}
                                className="text-destructive hover:bg-destructive/10 hover:text-destructive"
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                            <Badge variant="secondary" className="mb-3">
                              {item.category}
                            </Badge>
                            <p className="text-sm text-muted-foreground mb-3">{item.capacity}</p>
                            <div className="flex justify-between items-center">
                              <div className="flex items-center gap-3">
                                <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                                  <Minus className="w-3 h-3" />
                                </Button>
                                <span className="font-medium text-foreground min-w-[2rem] text-center">
                                  {item.quantity}
                                </span>
                                <Button 
                                  variant="outline" 
                                  size="sm" 
                                  className="h-8 w-8 p-0"
                                  onClick={() => addToCart({
                                    id: item.id,
                                    name: item.name,
                                    price: item.price,
                                    capacity: item.capacity,
                                    image: item.image,
                                    category: item.category
                                  })}
                                >
                                  <Plus className="w-3 h-3" />
                                </Button>
                              </div>
                              <div className="text-right">
                                <p className="text-lg font-bold text-primary">{item.price}</p>
                                <p className="text-sm text-muted-foreground">each</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                  <Card className="border-border/50 sticky top-24">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-foreground">Order Summary</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        {cartItems.map((item) => (
                          <div key={item.id} className="flex justify-between text-sm">
                            <span className="text-muted-foreground">
                              {item.name} × {item.quantity}
                            </span>
                            <span className="text-foreground font-medium">
                              ₹{(parseFloat(item.price.replace('₹', '').replace(',', '')) * item.quantity).toLocaleString()}
                            </span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="border-t border-border pt-4">
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-bold text-foreground">Total</span>
                          <span className="text-2xl font-bold text-primary">
                            ₹{calculateTotal().toLocaleString()}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-3 pt-4">
                        <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                          Proceed to Checkout
                        </Button>
                        <Button variant="outline" className="w-full" asChild>
                          <a href="/farmerkit">Continue Shopping</a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Cart;