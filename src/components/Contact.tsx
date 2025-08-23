import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+91 98765 43210", "+91 87654 32109"]
    },
    {
      icon: Phone,
      title: "Telephone",
      details: ["022-2845-6789"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["contact@agritech.com"]
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Agriculture Hub", "Mumbai, Maharashtra 400001"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <Card className="max-w-5xl mx-auto bg-card border-border/50 shadow-strong">
          <CardContent className="p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Get In Touch
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Have questions or need support? We're here to help you grow your agricultural business.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <div key={index} className="text-center space-y-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mx-auto">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {contact.title}
                    </h3>
                    <div className="space-y-2">
                      {contact.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="text-center mt-12 pt-8 border-t border-border/50">
              <p className="text-muted-foreground">
                Available 24/7 • Response within 2 hours during business days
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;