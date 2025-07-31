import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      role: "Marketing Professional",
      content: "Jimmy's method is the first thing that ever worked for my ADHD. I finally feel like I have control again. The ritual-based approach doesn't feel overwhelming like other systems I've tried.",
      rating: 5
    },
    {
      name: "Michael K.",
      role: "Software Developer",
      content: "I booked one call and felt seen, understood, and ready to act. Jimmy doesn't try to fix you — he helps you build a system that works with how your brain actually functions.",
      rating: 5
    },
    {
      name: "Jennifer L.",
      role: "Small Business Owner",
      content: "After years of burnout and feeling scattered, I thought something was wrong with me. Jimmy showed me that I just needed the right tools. My productivity and peace of mind have completely transformed.",
      rating: 5
    }
  ];

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex justify-center mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-accent text-accent" />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-primary mb-6">Real People. Real Change.</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what people are saying about their transformation journey 
            with Walking Out of Chaos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 relative">
              <CardContent className="p-8">
                <Quote className="w-8 h-8 text-accent/30 mb-4" />
                <StarRating rating={testimonial.rating} />
                <blockquote className="text-muted-foreground text-center leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </blockquote>
                <div className="text-center">
                  <cite className="font-semibold text-primary not-italic">{testimonial.name}</cite>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-primary/5 rounded-3xl p-12 mb-16">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">500+</div>
              <p className="text-muted-foreground">People Coached</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">95%</div>
              <p className="text-muted-foreground">Report Improved Focus</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">4.9/5</div>
              <p className="text-muted-foreground">Average Rating</p>
            </div>
          </div>
        </div>

        {/* Detailed Testimonial */}
        <Card className="border-0 shadow-xl mb-16">
          <CardContent className="p-12">
            <div className="max-w-4xl mx-auto text-center">
              <Quote className="w-12 h-12 text-accent/30 mx-auto mb-6" />
              <blockquote className="text-2xl text-primary font-medium leading-relaxed mb-8 italic">
                "I was skeptical about coaching because I'd tried everything. But Jimmy's approach is different. 
                He doesn't give you generic advice or try to turn you into someone you're not. He helps you 
                understand how your brain works and builds a system around that. For the first time in years, 
                I have structure without stress, focus without forcing it."
              </blockquote>
              <div className="text-center">
                <StarRating rating={5} />
                <cite className="text-xl font-semibold text-primary not-italic">Alex R.</cite>
                <p className="text-muted-foreground">Creative Director & ADHD Advocate</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Common Transformations */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Common Transformations</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">Before Working Together:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Feeling scattered and overwhelmed daily</li>
                <li>• Starting projects but never finishing them</li>
                <li>• Constant self-doubt and imposter syndrome</li>
                <li>• Burnout cycles that seem impossible to break</li>
                <li>• Feeling like everyone else has it figured out</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">After Our System:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Clear daily structure that actually works</li>
                <li>• Completing projects with sustained focus</li>
                <li>• Confidence in their unique strengths</li>
                <li>• Sustainable energy and motivation</li>
                <li>• Understanding that their brain is an asset, not a liability</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-3xl p-12 shadow-lg">
          <h3 className="text-3xl font-bold text-primary mb-6">Ready to Write Your Success Story?</h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of others who have transformed their relationship with ADHD, overwhelm, and burnout. 
            Your breakthrough is just one conversation away.
          </p>
          <Button asChild size="lg" className="text-lg px-8 py-4 h-auto bg-accent hover:bg-accent/90 text-primary font-semibold">
            <Link to="/book">Start Your Transformation - $29.99</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;