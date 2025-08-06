const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Refund Policy
          </h1>
          
          <p className="text-muted-foreground mb-8 font-medium">
            <strong>Last Updated: August 6, 2025</strong>
          </p>
          
          <p className="text-foreground mb-8">
            Walking Out of Chaos provides digital products and coaching materials that are delivered instantly. As such:
          </p>
          
          <ul className="text-foreground mb-8 space-y-2 pl-6 text-lg">
            <li>• All purchases are <strong>final</strong></li>
            <li>• <strong>No refunds or returns</strong> are offered</li>
            <li>• <strong>No exceptions</strong>, including accidental purchases, unused access, or dissatisfaction</li>
          </ul>
          
          <p className="text-foreground mb-8">
            This policy is clearly stated prior to checkout and must be agreed to before purchase.
          </p>
          
          <p className="text-foreground">
            If you experience a technical issue accessing your product or coaching appointment, please contact <a href="mailto:support@walkingoutofchaos.com" className="text-primary hover:underline">support@walkingoutofchaos.com</a> and we will help resolve the issue.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;