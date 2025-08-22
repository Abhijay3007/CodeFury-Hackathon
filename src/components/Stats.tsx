import { Card, CardContent } from "@/components/ui/card";

const Stats = () => {
  const stats = [
    {
      number: "10M+",
      label: "Farmers Connected",
      description: "Growing community of agricultural professionals"
    },
    {
      number: "₹500Cr+",
      label: "Fair Trade Value",
      description: "Transparent transactions completed"
    },
    {
      number: "85%",
      label: "Price Improvement",
      description: "Average increase in farmer income"
    },
    {
      number: "50K+",
      label: "Equipment Listed",
      description: "Quality farming tools available"
    }
  ];

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Transforming Agriculture
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Real impact, measurable results for the farming community
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="text-4xl md:text-5xl font-bold text-harvest-gold mb-4">
                  {stat.number}
                </div>
                <h3 className="text-xl font-semibold text-primary-foreground mb-2">
                  {stat.label}
                </h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;