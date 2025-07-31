import { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

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
          <p className="text-lg text-muted-foreground mb-6">
            Thank you for your purchase. You're being redirected to schedule your Reset Call...
          </p>
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