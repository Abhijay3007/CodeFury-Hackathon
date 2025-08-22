import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-agriculture.jpg";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img src={heroImage} alt="Modern agricultural technology platform" className="w-full h-full object-cover" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-tight text-center">
            Revolutionizing
            <span className="block bg-gradient-to-r from-harvest-gold to-primary-glow bg-clip-text text-transparent">
              Agricultural Trade
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            A transparent digital platform connecting farmers with fair pricing, 
            affordable equipment, and sustainable farming solutions. 
            Empowering the agricultural ecosystem for a better tomorrow.
          </p>
          
          <div className="flex justify-center items-center pt-8">
            
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>;
};
export default Hero;