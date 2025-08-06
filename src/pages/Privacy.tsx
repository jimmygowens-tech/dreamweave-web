const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Privacy Policy
          </h1>
          
          <p className="text-muted-foreground mb-8 font-medium">
            <strong>Last Updated: August 6, 2025</strong>
          </p>
          
          <p className="text-foreground mb-8">
            Walking Out of Chaos values your privacy. This Privacy Policy outlines how we collect, use, and protect your information when you visit walkingoutofchaos.com or purchase our products.
          </p>
          
          <hr className="border-border my-8" />
          
          <section className="mb-8">
            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
              1. INFORMATION WE COLLECT
            </h3>
            <ul className="text-foreground mb-4 space-y-1 pl-6">
              <li>• Name and email address (when purchasing or contacting us)</li>
              <li>• Payment details (processed securely via Stripe or Stan Store)</li>
              <li>• Booking or scheduling info (when using our coaching services)</li>
              <li>• Website analytics (via cookies and tracking tools)</li>
            </ul>
          </section>
          
          <hr className="border-border my-8" />
          
          <section className="mb-8">
            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
              2. HOW WE USE YOUR INFORMATION
            </h3>
            <ul className="text-foreground mb-4 space-y-1 pl-6">
              <li>• To deliver products and services you request</li>
              <li>• To communicate with you regarding your purchase or service</li>
              <li>• To improve site performance and functionality</li>
            </ul>
          </section>
          
          <hr className="border-border my-8" />
          
          <section className="mb-8">
            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
              3. THIRD-PARTY PROCESSORS
            </h3>
            <ul className="text-foreground mb-4 space-y-1 pl-6">
              <li>• Payments are handled via Stripe and/or Stan Store. We never store full credit card information.</li>
              <li>• Calendar appointments may be scheduled through Calendly or other integrated tools.</li>
            </ul>
          </section>
          
          <hr className="border-border my-8" />
          
          <section className="mb-8">
            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
              4. DATA RETENTION
            </h3>
            <p className="text-foreground">
              We retain your information only as long as necessary for legal, contractual, or business obligations. You may request data deletion at any time.
            </p>
          </section>
          
          <hr className="border-border my-8" />
          
          <section className="mb-8">
            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
              5. COOKIES
            </h3>
            <p className="text-foreground">
              We use cookies to understand user behavior and improve user experience. You can adjust cookie settings in your browser.
            </p>
          </section>
          
          <hr className="border-border my-8" />
          
          <section className="mb-8">
            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
              6. YOUR RIGHTS
            </h3>
            <p className="text-foreground">
              You have the right to access, correct, or request deletion of your personal data. Email <a href="mailto:support@walkingoutofchaos.com" className="text-primary hover:underline">support@walkingoutofchaos.com</a> for any privacy-related inquiries.
            </p>
          </section>
          
          <hr className="border-border my-8" />
          
          <section className="mb-8">
            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
              7. SECURITY
            </h3>
            <p className="text-foreground">
              We implement industry-standard safeguards to protect your information. However, no online transmission is 100% secure.
            </p>
          </section>
          
          <hr className="border-border my-8" />
          
          <section className="mb-8">
            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
              8. CHANGES TO THIS POLICY
            </h3>
            <p className="text-foreground">
              We may update this policy from time to time. Continued use of the site indicates your acceptance of any changes.
            </p>
          </section>
          
          <hr className="border-border my-8" />
          
          <section className="mb-8">
            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
              9. CONTACT
            </h3>
            <p className="text-foreground">
              Questions? Email us at: <a href="mailto:support@walkingoutofchaos.com" className="text-primary hover:underline">support@walkingoutofchaos.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;