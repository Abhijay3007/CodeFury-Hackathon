import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ShoppingCart, 
  TrendingUp, 
  Shield, 
  Leaf, 
  Users, 
  BarChart3 
} from "lucide-react";
import marketplaceImage from "@/assets/marketplace-equipment.jpg";
import tradingImage from "@/assets/crop-trading.jpg";

const Features = () => {
  const features = [
    {
      icon: ShoppingCart,
      title: "Equipment Marketplace",
      description: "Access affordable, quality farming equipment through our transparent marketplace",
      image: marketplaceImage,
      benefits: ["Verified Sellers", "Fair Pricing", "Quality Assurance"]
    },
    {
      icon: TrendingUp,
      title: "Transparent Crop Trading",
      description: "Direct connection between farmers and buyers with real-time market pricing",
      image: tradingImage,
      benefits: ["Real-time Pricing", "Direct Trading", "Market Analytics"]
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Blockchain-powered transparency ensuring fair deals for all participants",
      benefits: ["Secure Transactions", "Verified Users", "Dispute Resolution"]
    },
    {
      icon: Leaf,
      title: "Sustainability Focus",
      description: "Promoting eco-friendly farming practices and sustainable agriculture",
      benefits: ["Green Certification", "Carbon Tracking", "Sustainable Methods"]
    },
    {
      icon: Users,
      title: "Community Network",
      description: "Connect with fellow farmers, share knowledge, and grow together",
      benefits: ["Expert Advice", "Peer Support", "Knowledge Sharing"]
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Smart insights to optimize crop yields and maximize profits",
      benefits: ["Yield Prediction", "Market Trends", "Performance Metrics"]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Comprehensive Agricultural Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything farmers need in one powerful, integrated platform
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isHighlighted = index < 2;
            
            return (
              <Card 
                key={index} 
                className={`group hover:shadow-medium transition-all duration-300 ${
                  isHighlighted ? 'md:col-span-2 lg:col-span-1' : ''
                } border-border/50 bg-card`}
              >
                {feature.image && (
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                )}
                
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground">
                      {feature.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {feature.benefits.map((benefit, idx) => (
                      <Badge 
                        key={idx} 
                        variant="secondary" 
                        className="bg-primary/5 text-primary hover:bg-primary/10"
                      >
                        {benefit}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;