import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { Separator } from "@/components/ui/separator";
import { TrendingUp, TrendingDown, Minus, BarChart3 } from "lucide-react";

const MarketPrices = () => {
  const cropPrices = [
    {
      name: "Wheat",
      currentPrice: "₹2,150",
      pricePerUnit: "per quintal",
      change: "+2.5%",
      trend: "up",
      historical: [
        { period: "1 Week", price: "₹2,098" },
        { period: "1 Month", price: "₹2,035" },
        { period: "3 Months", price: "₹1,950" }
      ],
      marketInfo: {
        volume: "15,000 quintals",
        highPrice: "₹2,200",
        lowPrice: "₹2,100"
      }
    },
    {
      name: "Rice",
      currentPrice: "₹3,450",
      pricePerUnit: "per quintal",
      change: "-1.2%",
      trend: "down",
      historical: [
        { period: "1 Week", price: "₹3,492" },
        { period: "1 Month", price: "₹3,380" },
        { period: "3 Months", price: "₹3,250" }
      ],
      marketInfo: {
        volume: "22,500 quintals",
        highPrice: "₹3,500",
        lowPrice: "₹3,420"
      }
    },
    {
      name: "Sugarcane",
      currentPrice: "₹315",
      pricePerUnit: "per quintal",
      change: "0%",
      trend: "stable",
      historical: [
        { period: "1 Week", price: "₹315" },
        { period: "1 Month", price: "₹312" },
        { period: "3 Months", price: "₹305" }
      ],
      marketInfo: {
        volume: "8,750 quintals",
        highPrice: "₹320",
        lowPrice: "₹310"
      }
    },
    {
      name: "Cotton",
      currentPrice: "₹6,800",
      pricePerUnit: "per quintal",
      change: "+4.8%",
      trend: "up",
      historical: [
        { period: "1 Week", price: "₹6,490" },
        { period: "1 Month", price: "₹6,250" },
        { period: "3 Months", price: "₹5,950" }
      ],
      marketInfo: {
        volume: "12,000 quintals",
        highPrice: "₹6,850",
        lowPrice: "₹6,750"
      }
    },
    {
      name: "Soybeans",
      currentPrice: "₹4,250",
      pricePerUnit: "per quintal",
      change: "+1.8%",
      trend: "up",
      historical: [
        { period: "1 Week", price: "₹4,175" },
        { period: "1 Month", price: "₹4,100" },
        { period: "3 Months", price: "₹3,950" }
      ],
      marketInfo: {
        volume: "18,200 quintals",
        highPrice: "₹4,300",
        lowPrice: "₹4,200"
      }
    },
    {
      name: "Maize",
      currentPrice: "₹1,850",
      pricePerUnit: "per quintal",
      change: "-0.5%",
      trend: "down",
      historical: [
        { period: "1 Week", price: "₹1,859" },
        { period: "1 Month", price: "₹1,825" },
        { period: "3 Months", price: "₹1,780" }
      ],
      marketInfo: {
        volume: "25,400 quintals",
        highPrice: "₹1,875",
        lowPrice: "₹1,840"
      }
    }
  ];

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="w-4 h-4 text-leaf-green" />;
      case "down":
        return <TrendingDown className="w-4 h-4 text-destructive" />;
      default:
        return <Minus className="w-4 h-4 text-muted-foreground" />;
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case "up":
        return "text-leaf-green";
      case "down":
        return "text-destructive";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-6">
              <div className="flex justify-center mb-4">
                <BarChart3 className="w-16 h-16 text-primary-foreground" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground">
                Market Prices
              </h1>
              <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
                Real-time and historical market prices for major crops to help you make informed selling decisions
              </p>
              <Badge className="bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/20">
                Updated Every Hour
              </Badge>
            </div>
          </div>
        </section>

        {/* Market Prices Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Current Market Rates
              </h2>
              <Separator className="w-24 mx-auto" />
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                Transparent pricing information from major agricultural markets across India
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cropPrices.map((crop, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-medium transition-all duration-300 border-border/50 bg-card"
                >
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center justify-between text-foreground">
                      <span className="text-xl font-bold">{crop.name}</span>
                      <div className="flex items-center gap-2">
                        {getTrendIcon(crop.trend)}
                        <span className={`text-sm font-medium ${getTrendColor(crop.trend)}`}>
                          {crop.change}
                        </span>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    {/* Current Price */}
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-1">
                        {crop.currentPrice}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {crop.pricePerUnit}
                      </div>
                    </div>

                    {/* Market Info */}
                    <div className="bg-gradient-card rounded-lg p-4 space-y-2">
                      <h4 className="font-semibold text-sm text-foreground">Today's Market</h4>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div>
                          <span className="text-muted-foreground">High:</span>
                          <span className="font-medium ml-1 text-foreground">{crop.marketInfo.highPrice}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Low:</span>
                          <span className="font-medium ml-1 text-foreground">{crop.marketInfo.lowPrice}</span>
                        </div>
                        <div className="col-span-2">
                          <span className="text-muted-foreground">Volume:</span>
                          <span className="font-medium ml-1 text-foreground">{crop.marketInfo.volume}</span>
                        </div>
                      </div>
                    </div>

                    {/* Historical Prices */}
                    <div>
                      <h4 className="font-semibold text-sm text-foreground mb-3">Historical Prices</h4>
                      <div className="space-y-2">
                        {crop.historical.map((period, periodIndex) => (
                          <div key={periodIndex} className="flex justify-between text-sm">
                            <span className="text-muted-foreground">{period.period}:</span>
                            <span className="font-medium text-foreground">{period.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Market Insights */}
            <div className="mt-16">
              <Card className="border-border/50 bg-gradient-card">
                <CardHeader>
                  <CardTitle className="text-center text-foreground">Market Insights</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-muted-foreground">
                    Prices are sourced from major agricultural mandis and commodity exchanges. 
                    Historical data helps you identify the best selling opportunities.
                  </p>
                  <div className="flex justify-center gap-4 text-sm">
                    <Badge variant="outline" className="border-leaf-green text-leaf-green">
                      Live Updates
                    </Badge>
                    <Badge variant="outline" className="border-harvest-gold text-harvest-gold">
                      Historical Data
                    </Badge>
                    <Badge variant="outline" className="border-sky-blue text-sky-blue">
                      Market Trends
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MarketPrices;