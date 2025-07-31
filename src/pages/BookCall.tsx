import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const BookCall = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    struggle: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for Stripe/PayPal integration
    toast({
      title: "Form Submitted",
      description: "Payment integration will be connected here. Redirecting to payment...",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-primary mb-6">Let's Get You Back on Track</h1>
          <div className="text-6xl font-bold text-accent mb-4">$29.99</div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            This 30-minute Zoom session is designed to help you reset your mind, eliminate chaos, and build your personal ritual plan. 
            You'll leave with clarity, a custom checklist, and a motivational audio message to keep you moving.
          </p>
        </div>

        <Card className="shadow-xl border-0">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-primary">Book Your Reset Call</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-sm font-medium">Full Name</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="h-12"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="struggle" className="text-sm font-medium">What are you currently struggling with?</Label>
                <Textarea
                  id="struggle"
                  name="struggle"
                  value={formData.struggle}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  placeholder="Tell me about your current challenges with focus, overwhelm, burnout, or daily structure..."
                />
              </div>

              <div className="pt-6">
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full h-14 text-lg bg-accent hover:bg-accent/90 text-primary font-semibold"
                >
                  Schedule My Call - $29.99
                </Button>
                <p className="text-sm text-muted-foreground text-center mt-4">
                  Secure payment via Stripe. You'll receive your Zoom link within 24 hours.
                </p>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Benefits Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="font-semibold text-primary mb-2">Personalized Plan</h3>
            <p className="text-sm text-muted-foreground">Custom reset ritual designed for your specific challenges</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">✅</span>
            </div>
            <h3 className="font-semibold text-primary mb-2">Action Checklist</h3>
            <p className="text-sm text-muted-foreground">Clear, actionable steps you can implement immediately</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎵</span>
            </div>
            <h3 className="font-semibold text-primary mb-2">Motivational Audio</h3>
            <p className="text-sm text-muted-foreground">Personal message to keep you motivated and on track</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCall;