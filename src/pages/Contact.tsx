import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Instagram, Facebook, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        form.reset();
        setShowSuccess(true);
      } else {
        alert("There was an issue. Please try again.");
      }
    } catch (error) {
      alert("There was an issue. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-primary mb-6">Get in Touch</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have questions about the coaching process? Want to learn more about how we can help? 
            We're here to support you every step of the way.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <form action="https://formspree.io/f/xyzpnroe" method="POST" onSubmit={handleSubmit}>
                <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '600px', width: '100%'}}>
                  <input type="text" name="name" placeholder="Your Name" required style={{padding: '12px', fontSize: '16px', border: '1px solid #ccc'}} />
                  <input type="email" name="email" placeholder="Your Email" required style={{padding: '12px', fontSize: '16px', border: '1px solid #ccc'}} />
                  <textarea name="message" placeholder="Your Message" required rows={5} style={{padding: '12px', fontSize: '16px', border: '1px solid #ccc'}}></textarea>
                  <button type="submit" style={{padding: '12px', fontSize: '16px', backgroundColor: '#000', color: '#fff', border: 'none', cursor: 'pointer'}}>Send Message</button>
                  {showSuccess && (
                    <div style={{display: 'block', marginTop: '20px', color: 'green', fontWeight: 'bold'}}>
                      Thanks! Your message has been sent.
                    </div>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-primary mb-6">Direct Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-accent" />
                    <div>
                      <p className="font-medium text-primary">Email</p>
                      <a 
                        href="mailto:jimmy@walkingoutofchaos.com" 
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        jimmy@walkingoutofchaos.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-accent" />
                    <div>
                      <p className="font-medium text-primary">Call or Text</p>
                      <a 
                        href="tel:+12819405408" 
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        (281) 940-5408
                      </a>
                      <p className="text-sm text-muted-foreground/70">Business line only — Text-friendly</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <MessageCircle className="w-6 h-6 text-accent" />
                    <div>
                      <p className="font-medium text-primary">Response Time</p>
                      <p className="text-muted-foreground">Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-primary mb-6">Follow Us</h3>
                <div className="space-y-4">
                  <a 
                    href="https://instagram.com/walkingoutofchaos" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-accent/10 transition-colors group"
                  >
                    <Instagram className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="font-medium text-primary">Instagram</p>
                      <p className="text-muted-foreground">@walkingoutofchaos</p>
                    </div>
                  </a>
                  
                  <a 
                    href="https://www.tiktok.com/@walking_out_of_chaos" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-accent/10 transition-colors group"
                  >
                    <MessageCircle className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="font-medium text-primary">TikTok</p>
                      <p className="text-muted-foreground">@walking_out_of_chaos</p>
                    </div>
                  </a>

                  <a 
                    href="https://facebook.com/walkingoutofchaos" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-accent/10 transition-colors group"
                  >
                    <Facebook className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="font-medium text-primary">Facebook</p>
                      <p className="text-muted-foreground">Walking Out of Chaos</p>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-accent/10">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold text-primary mb-4">Ready to Get Started?</h3>
                <p className="text-muted-foreground mb-6">
                  Skip the contact form and book your reset call directly.
                </p>
                <Button 
                  onClick={() => window.open('https://buy.stripe.com/8x2dR25Mx92VaM4efH7ss03', '_blank')}
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-primary font-semibold"
                  aria-label="Book coaching call"
                >
                  Book My Reset Call – $29.99
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="font-semibold text-primary mb-3">How quickly will I hear back?</h3>
                <p className="text-muted-foreground">We respond to all inquiries within 24 hours, usually much sooner during business hours.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="font-semibold text-primary mb-3">What if I'm not sure coaching is right for me?</h3>
                <p className="text-muted-foreground">That's exactly why we offer the $29.99 reset call - it's a low-risk way to experience our approach and see if it resonates with you.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="font-semibold text-primary mb-3">Do you work with people without ADHD?</h3>
                <p className="text-muted-foreground">Absolutely! While our methods are ADHD-friendly, they work for anyone dealing with overwhelm, burnout, or scattered focus.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="font-semibold text-primary mb-3">What happens after the reset call?</h3>
                <p className="text-muted-foreground">You'll receive a personalized action plan, and if you want ongoing support, we'll discuss longer-term coaching options that fit your needs and budget.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;