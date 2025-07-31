import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            You're Not Broken —<br />
            <span className="text-accent">You're Rebuilding.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Book a 30-minute coaching call and get a personalized reset ritual to transform your focus and life.
          </p>
          <Button asChild size="lg" className="text-lg px-8 py-4 h-auto bg-accent hover:bg-accent/90 text-primary font-semibold">
            <Link to="/book">Book My Reset Call</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">From Chaos to Clarity</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A proven system designed specifically for people dealing with burnout, ADHD, and overwhelm.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-accent">1</span>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">Brain-Based Rewiring</h3>
                <p className="text-muted-foreground">
                  Transform limiting patterns using neuroscience-backed techniques tailored for ADHD minds.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-accent">2</span>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">Ritual-Based Structure</h3>
                <p className="text-muted-foreground">
                  Build sustainable daily rituals that create order without overwhelming your already busy mind.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-accent">3</span>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">Personal Coaching</h3>
                <p className="text-muted-foreground">
                  One-on-one support that meets you where you are, without judgment or one-size-fits-all solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Walk Out of Chaos?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Your transformation starts with a single conversation. Book your reset call today.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-4 h-auto">
            <Link to="/book">Start Your Journey - $29.99</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;