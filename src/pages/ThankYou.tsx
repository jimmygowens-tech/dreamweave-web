import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CheckCircle, Instagram, ArrowLeft } from "lucide-react";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-20">
      <div className="container mx-auto px-4 max-w-2xl">
        <Card className="shadow-xl border-0 text-center">
          <CardContent className="p-12">
            <div className="mb-8">
              <CheckCircle className="w-20 h-20 text-accent mx-auto mb-6" />
              <h1 className="text-4xl font-bold text-primary mb-4">Schedule Your Call</h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Thank you for booking! Now pick a time for your 30-minute Zoom call using the calendar below.
              </p>
              
              <div className="bg-accent/10 rounded-lg p-8 mb-8">
                <p className="text-lg text-muted-foreground">
                  [Calendly embed goes here]
                </p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="bg-accent/10 rounded-lg p-6">
                <h3 className="font-semibold text-primary mb-2">What happens next?</h3>
                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                  <li>• Check your email for the Zoom link and meeting details</li>
                  <li>• Prepare to discuss your current challenges and goals</li>
                  <li>• Join the call ready to take notes and ask questions</li>
                  <li>• Receive your personalized reset ritual and action plan</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline" size="lg" className="flex items-center gap-2">
                <a 
                  href="https://instagram.com/walkingoutofchaos" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Instagram size={20} />
                  Follow Us on Instagram
                </a>
              </Button>
              
              <Button asChild size="lg" className="flex items-center gap-2">
                <Link to="/" className="flex items-center gap-2">
                  <ArrowLeft size={20} />
                  Go Back to Home
                </Link>
              </Button>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Need help? Email{" "}
                <a href="mailto:jimmy@walkingoutofchaos.com" className="text-accent hover:underline">
                  jimmy@walkingoutofchaos.com
                </a>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ThankYou;