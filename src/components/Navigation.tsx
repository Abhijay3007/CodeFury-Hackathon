import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Leaf, ShoppingCart, Trash2 } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const Navigation = () => {
  const { cartItems, getTotalItems, removeFromCart } = useCart();
  
  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border/50 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-full">
              <Leaf className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold text-foreground">AgriTech</span>
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="text-muted-foreground/80 hover:text-foreground transition-colors">
              Home
            </a>
            <a href="/farmerkit" className="text-muted-foreground/80 hover:text-foreground transition-colors">
              FarmerKit
            </a>
            <a href="/about" className="text-muted-foreground/80 hover:text-foreground transition-colors">
              About
            </a>
            <a href="#contact" className="text-muted-foreground/80 hover:text-foreground transition-colors" onClick={(e) => {
              e.preventDefault();
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.location.href = '/#contact';
              }
            }}>
              Contact
            </a>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Cart Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-muted-foreground hover:text-foreground relative" asChild>
                  <a href="/cart">
                    <ShoppingCart className="w-5 h-5" />
                  </a>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border border-border shadow-lg z-50 w-80">
                {cartItems.length === 0 ? (
                  <div className="p-4 text-center text-muted-foreground">
                    Your cart is empty
                  </div>
                ) : (
                  <div className="max-h-96 overflow-y-auto">
                    {cartItems.map((item) => (
                      <DropdownMenuItem key={item.id} className="flex items-center gap-3 p-3 cursor-default">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-12 h-12 object-cover rounded"
                        />
                        <div className="flex-1">
                          <p className="font-medium text-sm">{item.name}</p>
                          <p className="text-xs text-muted-foreground">{item.capacity}</p>
                          <p className="text-sm font-bold text-primary">{item.price} × {item.quantity}</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            removeFromCart(item.id);
                          }}
                          className="h-8 w-8 p-0 hover:bg-destructive/10 hover:text-destructive"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </DropdownMenuItem>
                    ))}
                  </div>
                )}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Sign In Button */}
            <Button variant="ghost" className="text-muted-foreground/80 hover:text-foreground" asChild>
              <a href="/signup">Sign In</a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;