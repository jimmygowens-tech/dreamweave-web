import { Button } from "@/components/ui/button";

const BookCall = () => {
  const handleBookCall = () => {
    window.open('https://buy.stripe.com/cNi6oA7UFgvn5rKdbD7ss02', '_blank');
  };

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-primary mb-6">Let's Reset Your Focus</h1>
          <p className="text-2xl text-muted-foreground mb-4">
            <strong>30-minute Zoom coaching session + ritual plan + motivational audio</strong>
          </p>
          <div className="text-6xl font-bold text-accent mb-8">$29.99</div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Get a personalized reset that helps you break free from burnout and ADHD-driven chaos. One call. One checklist. Big change.
          </p>
        </div>

        <Button 
          onClick={handleBookCall}
          size="lg" 
          className="text-lg px-8 py-4 h-auto bg-accent hover:bg-accent/90 text-primary font-semibold"
        >
          Book My Reset Call — $29.99
        </Button>
      </div>
    </div>
  );
};

export default BookCall;