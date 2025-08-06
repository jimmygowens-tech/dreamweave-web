const Privacy = () => {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-primary mb-8">Privacy Policy</h1>
          
          <p className="text-lg text-muted-foreground mb-8">
            <strong>Effective Date:</strong> August 6, 2025
          </p>

          <p className="text-lg text-muted-foreground mb-8">
            This privacy policy outlines how Walking Out of Chaos collects, uses, and protects your information.
          </p>

          <hr className="my-8 border-border" />

          <h2 className="text-2xl font-semibold text-primary mb-4">1. Information We Collect</h2>
          <p className="text-muted-foreground mb-4">We collect personal information when you:</p>
          <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
            <li>Submit a contact form</li>
            <li>Schedule a coaching session</li>
            <li>Purchase a digital product</li>
            <li>Subscribe to our email list</li>
          </ul>
          <p className="text-muted-foreground mb-6">
            This may include your name, email address, billing details, and optional notes.
          </p>

          <hr className="my-8 border-border" />

          <h2 className="text-2xl font-semibold text-primary mb-4">2. How We Use Your Information</h2>
          <p className="text-muted-foreground mb-4">We use your information to:</p>
          <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
            <li>Process transactions</li>
            <li>Deliver purchased content</li>
            <li>Respond to inquiries</li>
            <li>Improve our website and services</li>
          </ul>
          <p className="text-muted-foreground mb-6">
            We do not sell or rent your personal data.
          </p>

          <hr className="my-8 border-border" />

          <h2 className="text-2xl font-semibold text-primary mb-4">3. Data Security</h2>
          <p className="text-muted-foreground mb-6">
            Your information is protected through secure payment platforms and Formspree integration. We do not store your credit card details.
          </p>

          <hr className="my-8 border-border" />

          <h2 className="text-2xl font-semibold text-primary mb-4">4. Cookies</h2>
          <p className="text-muted-foreground mb-6">
            Our website uses cookies for basic analytics and performance optimization. You can disable cookies via your browser settings.
          </p>

          <hr className="my-8 border-border" />

          <h2 className="text-2xl font-semibold text-primary mb-4">5. Third-Party Services</h2>
          <p className="text-muted-foreground mb-6">
            We may use trusted third-party tools such as Stripe, Calendly, and Formspree to provide services. Each provider has their own privacy policies.
          </p>

          <hr className="my-8 border-border" />

          <h2 className="text-2xl font-semibold text-primary mb-4">6. Contact</h2>
          <p className="text-muted-foreground mb-6">
            For any questions regarding your data or this policy, email: <a href="mailto:support@walkingoutofchaos.com" className="text-accent hover:underline"><strong>support@walkingoutofchaos.com</strong></a>
          </p>

          <hr className="my-8 border-border" />

          <p className="text-muted-foreground">
            View online: <a href="https://www.walkingoutofchaos.com/privacy" className="text-accent hover:underline">https://www.walkingoutofchaos.com/privacy</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;