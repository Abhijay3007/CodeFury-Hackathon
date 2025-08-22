import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Users, Leaf, TrendingUp, Shield, Globe } from "lucide-react";

const About = () => {
  const goals = [
    {
      icon: Target,
      title: "Fair Trade",
      description: "Eliminate middlemen and ensure farmers get fair prices for their produce"
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Connect farmers, buyers, and suppliers in a transparent ecosystem"
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Promote sustainable farming practices and environmental responsibility"
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "Enable agricultural growth through technology and data-driven insights"
    }
  ];

  const objectives = [
    "Provide transparent pricing mechanisms for agricultural products",
    "Offer affordable and quality farming equipment and supplies",
    "Create a direct connection between farmers and end consumers",
    "Reduce post-harvest losses through efficient supply chain management",
    "Promote sustainable and organic farming practices",
    "Enable access to modern agricultural technologies for small-scale farmers"
  ];

  const useCases = [
    {
      title: "Direct Farm-to-Consumer Sales",
      description: "Farmers can sell directly to consumers, restaurants, and retailers without intermediaries",
      icon: Users
    },
    {
      title: "Equipment Marketplace",
      description: "Buy, sell, or rent farming equipment and tools from verified suppliers",
      icon: Shield
    },
    {
      title: "Seeds & Supplies Trading",
      description: "Access to quality seeds, fertilizers, and farming supplies at competitive prices",
      icon: Leaf
    },
    {
      title: "Global Market Access",
      description: "Connect with international buyers and expand market reach beyond local boundaries",
      icon: Globe
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
                About AgriTech
              </h1>
              <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
                Empowering farmers through technology, creating sustainable agricultural ecosystems, 
                and revolutionizing the way agricultural trade works globally.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="bg-gradient-card border-border/50">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-foreground">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To create a transparent, efficient, and sustainable digital platform that empowers farmers 
                    with fair pricing, direct market access, and modern agricultural solutions. We believe in 
                    eliminating barriers between farmers and consumers while promoting sustainable farming practices.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border/50">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-foreground">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To transform agriculture into a technology-driven, sustainable, and profitable sector that 
                    feeds the world while preserving our environment. We envision a future where every farmer 
                    has access to fair markets, modern tools, and the knowledge to thrive.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Goals */}
        <section className="py-20 bg-gradient-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Goals</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We are committed to achieving these core goals that drive our platform forward
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {goals.map((goal, index) => (
                <Card key={index} className="text-center group hover:shadow-medium transition-all duration-300">
                  <CardContent className="pt-8 pb-6">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <goal.icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{goal.title}</h3>
                    <p className="text-muted-foreground">{goal.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Objectives */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Key Objectives</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Strategic objectives that guide our platform development and growth
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid gap-4">
                {objectives.map((objective, index) => (
                  <div key={index} className="flex items-start gap-4 p-6 bg-card border border-border/50 rounded-lg hover:shadow-soft transition-shadow">
                    <Badge className="bg-primary text-primary-foreground min-w-[2rem] h-8 flex items-center justify-center">
                      {index + 1}
                    </Badge>
                    <p className="text-muted-foreground text-lg">{objective}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-gradient-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Platform Use Cases</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover how our platform serves different stakeholders in the agricultural ecosystem
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <Card key={index} className="group hover:shadow-medium transition-all duration-300 border-border/50">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <useCase.icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl font-bold text-foreground">{useCase.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{useCase.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;