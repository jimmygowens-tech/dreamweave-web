const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Privacy Policy
          </h1>
          
          <p className="text-muted-foreground mb-8 font-medium">
            <strong>Effective as of July 31, 2025</strong>
          </p>
          
          <p className="text-foreground mb-8">
            Walking Out of Chaos is committed to protecting your privacy. This policy outlines how we collect, use, and protect your data.
          </p>
          
          <hr className="border-border my-8" />
          
          <section className="mb-8">
            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
              1. What We Collect
            </h3>
            <p className="text-foreground mb-4">We may collect:</p>
            <ul className="text-foreground mb-4 space-y-1 pl-6">
              <li>• Your name, email, and phone number</li>
              <li>• Payment data (handled securely via Stripe)</li>
              <li>• Coaching session usage data</li>
              <li>• Any voluntary responses via forms or messages</li>
            </ul>
          </section>
          
          <hr className="border-border my-8" />
          
          <section className="mb-8">
            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
              2. How We Use It
            </h3>
            <p className="text-foreground mb-4">We use your data to:</p>
            <ul className="text-foreground mb-4 space-y-1 pl-6">
              <li>• Deliver coaching services and customer support</li>
              <li>• Communicate with you about appointments and services</li>
              <li>• Improve our offerings and platform experience</li>
              <li>• Comply with business or legal requirements</li>
            </ul>
          </section>
          
          <hr className="border-border my-8" />
          
          <section className="mb-8">
            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
              3. Who We Share It With
            </h3>
            <p className="text-foreground mb-4">
              We do <strong>not sell or trade your information</strong>. We only share with:
            </p>
            <ul className="text-foreground mb-4 space-y-1 pl-6">
              <li>• Trusted tools (e.g., Stripe, Calendly)</li>
              <li>• Legal authorities if required by law</li>
            </ul>
          </section>
          
          <hr className="border-border my-8" />
          
          <section className="mb-8">
            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
              4. Data Security
            </h3>
            <p className="text-foreground">
              We use secure tools and platforms to protect your personal information. No sensitive financial info is stored on our servers.
            </p>
          </section>
          
          <hr className="border-border my-8" />
          
          <section className="mb-8">
            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
              5. Your Rights
            </h3>
            <p className="text-foreground mb-4">
              You may request access to your data or request deletion by contacting:
            </p>
            <div className="text-foreground">
              <p>Jimmy Gowens</p>
              <p>Email: <a href="mailto:Jimmy@WalkingOutOfChaos.com" className="text-primary hover:underline">Jimmy@WalkingOutOfChaos.com</a></p>
            </div>
          </section>
          
          <hr className="border-border my-8" />
          
          <section className="mb-8">
            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
              6. Cookies
            </h3>
            <p className="text-foreground">
              Our website may use cookies or similar technologies to improve your browsing experience. You can opt out by adjusting your browser settings.
            </p>
          </section>
          
          <hr className="border-border my-8" />
          
          <section className="mb-8">
            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
              7. Children's Privacy
            </h3>
            <p className="text-foreground">
              Our services are not intended for children under 18.
            </p>
          </section>
          
          <hr className="border-border my-8" />
          
          <section className="mb-8">
            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
              8. Policy Updates
            </h3>
            <p className="text-foreground">
              This policy may change over time. Continued use of our services implies acceptance of the latest version.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;