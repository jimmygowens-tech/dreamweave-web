import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { Brain, Repeat, Shield, User, Smartphone } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Brain-based habit rewiring",
      description: "Transform limiting patterns using neuroscience-backed techniques specifically designed for ADHD minds and executive function challenges."
    },
    {
      icon: Repeat,
      title: "Ritual-based structure creation",
      description: "Build sustainable daily rituals that create order and predictability without overwhelming your already busy mind."
    },
    {
      icon: Shield,
      title: "ADHD and burnout recovery systems",
      description: "Specialized strategies for managing overwhelm, improving focus, and preventing burnout before it derails your progress."
    },
    {
      icon: User,
      title: "One-on-one personal coaching",
      description: "Personalized support that meets you where you are, without judgment or one-size-fits-all solutions."
    },
    {
      icon: Smartphone,
      title: "App integration (Coming Soon)",
      description: "Digital tools and reminders to support your transformation journey and keep you on track between sessions."
    }
  ];

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-primary mb-6">Our Model: Chaos to Clarity</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive system designed specifically for people dealing with ADHD, burnout, and overwhelm. 
            Every element works together to create lasting transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/30 transition-colors">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-4 text-center">{service.title}</h3>
                  <p className="text-muted-foreground text-center leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="bg-primary/5 rounded-3xl p-12 mb-16">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Assessment & Understanding</h3>
              <p className="text-muted-foreground">
                We start by understanding your unique challenges, patterns, and goals. No judgment, just clarity on where you are now.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Custom System Design</h3>
              <p className="text-muted-foreground">
                Together, we build a personalized system of rituals, habits, and structures that work with your brain, not against it.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Implementation & Support</h3>
              <p className="text-muted-foreground">
                We implement changes gradually with ongoing support, adjustments, and accountability to ensure lasting transformation.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonial Preview */}
        <div className="bg-white rounded-3xl p-12 shadow-lg mb-16">
          <div className="text-center">
            <blockquote className="text-2xl text-primary font-medium mb-6 italic">
              "Jimmy's method is the first thing that ever worked for my ADHD. I finally feel like I have control again."
            </blockquote>
            <cite className="text-muted-foreground">— Sarah M., Marketing Professional</cite>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-primary mb-6">Ready to Transform Your Life?</h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Your journey from chaos to clarity starts with a single conversation. Book your reset call and begin building 
            a system that finally works for your unique brain.
          </p>
          <Button 
            onClick={() => window.open('https://buy.stripe.com/8x2dR25Mx92VaM4efH7ss03', '_blank')}
            size="lg" 
            className="text-lg px-8 py-4 h-auto bg-accent hover:bg-accent/90 text-primary font-semibold"
            aria-label="Book coaching call"
          >
            Book My Reset Call – $29.99
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;