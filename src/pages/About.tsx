import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";


const About = () => {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-primary mb-6">Meet Your Coach</h1>
          <p className="text-xl text-muted-foreground">
            Real experience. Real transformation. Real results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            {/* Photo placeholder */}
            <div className="aspect-square bg-muted rounded-2xl flex items-center justify-center text-muted-foreground">
              <span className="text-lg">Jimmy Gowens Photo</span>
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-primary">Jimmy Gowens</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm Jimmy Gowens, founder of Walking Out of Chaos. After years in the oil and gas industry 
              and struggling with ADHD, burnout, and chaotic patterns, I built a system that helped me 
              reset everything — mentally, spiritually, physically.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Now I coach others through the same transformation. Because if someone like me — who felt 
              completely lost and overwhelmed — can walk out of chaos, so can you.
            </p>
            <Button 
              onClick={() => window.open('https://buy.stripe.com/8x2dR25Mx92VaM4efH7ss03', '_blank')}
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-primary"
              aria-label="Book coaching call"
            >
              Book My Reset Call – $29.99
            </Button>
          </div>
        </div>

        <div className="space-y-12">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">What qualifies me to help?</h3>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  I've been where you are. The overwhelm, the scattered thoughts, the feeling that everyone else 
                  has it figured out while you're drowning in chaos. I spent years in high-pressure environments 
                  in the oil and gas industry, all while managing ADHD and the burnout that comes with trying 
                  to function in systems not built for minds like ours.
                </p>
                <p className="leading-relaxed">
                  Through trial, error, and a lot of research into neuroscience and habit formation, I developed 
                  a system that actually works for ADHD brains. Not the generic advice that works for neurotypical 
                  people, but real strategies designed for how we actually think and process information.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">What makes this different?</h3>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  Most coaching approaches try to force you into someone else's system. I meet you where you are 
                  and build a system that works with your brain, not against it. We focus on small, sustainable 
                  changes that compound over time rather than dramatic overhauls that lead to burnout.
                </p>
                <p className="leading-relaxed">
                  Every strategy is backed by neuroscience research on ADHD and executive function, but delivered 
                  in a way that's practical and immediately actionable. No fluff, no generic advice — just real 
                  tools for real transformation.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">How I walk with you, not ahead of you</h3>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  I don't pretend to have all the answers or to be "fixed." Personal growth is an ongoing journey, 
                  and I'm committed to walking alongside you, sharing what I've learned while acknowledging that 
                  your path will be uniquely yours.
                </p>
                <p className="leading-relaxed">
                  My role isn't to be another voice telling you what you should do. It's to be a guide who understands 
                  the terrain, someone who can help you navigate the obstacles because I've faced them too. Together, 
                  we'll build a system that works for your life, your brain, and your goals.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-primary mb-6">Ready to start your transformation?</h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book your reset call today and take the first step toward building a life that works with your brain, not against it.
          </p>
          <Button 
            onClick={() => window.open('https://buy.stripe.com/8x2dR25Mx92VaM4efH7ss03', '_blank')}
            size="lg" 
            className="text-lg px-8 py-4 h-auto bg-accent hover:bg-accent/90 text-primary"
            aria-label="Book coaching call"
          >
            Book My Reset Call – $29.99
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;