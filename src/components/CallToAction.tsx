import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle } from "lucide-react";

const CallToAction = () => {
  const benefits = [
    "Free platform registration",
    "24/7 customer support",
    "Transparent pricing model",
    "Secure payment gateway",
    "Community of 10M+ farmers"
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <Card className="max-w-5xl mx-auto bg-card border-border/50 shadow-strong">
          <CardContent className="p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Ready to Join the Revolution?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Be part of the digital transformation that's empowering farmers across the nation. 
                Start your journey towards sustainable and profitable agriculture today.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  What you get:
                </h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="text-center md:text-left space-y-6">
                <div className="space-y-4">
                  <Button 
                    size="lg" 
                    className="w-full md:w-auto bg-gradient-feature hover:opacity-90 px-8 py-4 text-lg font-semibold shadow-soft group"
                  >
                    Get Started Now
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="w-full md:w-auto border-primary text-primary hover:bg-primary/5 px-8 py-4 text-lg font-semibold"
                  >
                    Schedule Demo
                  </Button>
                </div>
                
                <p className="text-sm text-muted-foreground">
                  No credit card required • Free forever plan available
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CallToAction;