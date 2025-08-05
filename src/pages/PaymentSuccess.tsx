import { useEffect } from 'react';
import { CheckCircle, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PaymentSuccess = () => {
  useEffect(() => {
    // Redirect to Calendly after 2 seconds
    const timer = setTimeout(() => {
      window.location.href = 'https://calendly.com/jimmy-walkingoutofchaos/30min';
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-20">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <div className="bg-card p-8 rounded-2xl shadow-lg">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-primary mb-4">Payment Successful!</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Thank you for your purchase. You're being redirected to schedule your Reset Call...
          </p>
          
          <div className="mb-8">
            <Button 
              onClick={() => window.open('https://walkingoutofchaos.com/downloads/Chaos%20Reset%20Ritual.pdf', '_blank')}
              size="lg"
              className="text-lg px-8 py-4 h-auto bg-accent hover:bg-accent/90 text-primary font-semibold mb-4"
              aria-label="Download PDF booklet"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Your Chaos Reset Ritual (PDF)
            </Button>
            
            <p className="text-sm text-muted-foreground">
              If you're not redirected, 
              <a 
                href="https://calendly.com/jimmy-walkingoutofchaos/30min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 underline ml-1"
              >
                click here to book manually
              </a>
            </p>
          </div>

          <div className="flex items-center justify-center space-x-2">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
            <span className="text-sm text-muted-foreground">Redirecting in 2 seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;