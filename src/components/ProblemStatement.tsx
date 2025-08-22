import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, TrendingDown, Wrench } from "lucide-react";

const ProblemStatement = () => {
  const problems = [
    {
      icon: TrendingDown,
      title: "Unfair Pricing",
      description: "Farmers struggle with lack of transparent pricing and often receive below-market rates for their produce",
      impact: "40% below fair market value"
    },
    {
      icon: Wrench,
      title: "Limited Equipment Access",
      description: "High costs and limited availability of modern farming equipment hinders agricultural efficiency",
      impact: "60% productivity loss"
    },
    {
      icon: AlertTriangle,
      title: "Fragmented Ecosystem",
      description: "Disconnected supply chains create inefficiencies and reduce sustainability in agricultural practices",
      impact: "30% waste increase"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            The Agricultural Challenge
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Farmers face critical challenges that limit their potential and impact the global food supply chain
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <Card key={index} className="bg-gradient-card border-border/50 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-destructive/10 rounded-full mb-4">
                      <Icon className="w-8 h-8 text-destructive" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {problem.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {problem.description}
                  </p>
                  
                  <div className="inline-flex items-center px-4 py-2 bg-destructive/5 rounded-full">
                    <span className="text-destructive font-semibold">{problem.impact}</span>
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

export default ProblemStatement;