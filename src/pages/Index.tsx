import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import ProblemStatement from "@/components/ProblemStatement";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ProblemStatement />
      <Features />
      <Stats />
      <CallToAction />
    </div>
  );
};

export default Index;
