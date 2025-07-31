import { Mail, Phone, Instagram, Facebook, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Walking Out of Chaos</h3>
            <p className="text-white/80 text-sm">
              Transforming lives through brain-based coaching and personalized reset rituals.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4" />
                <a 
                  href="mailto:jimmy@walkingoutofchaos.com" 
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  jimmy@walkingoutofchaos.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4" />
                <div>
                  <a 
                    href="tel:+15551234567" 
                    className="text-white/80 hover:text-accent transition-colors"
                  >
                    (555) 123-4567
                  </a>
                  <p className="text-xs text-white/60">Business line only</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <Link to="/about" className="block text-white/80 hover:text-accent transition-colors">
                About
              </Link>
              <Link to="/services" className="block text-white/80 hover:text-accent transition-colors">
                Services
              </Link>
              <Link to="/testimonials" className="block text-white/80 hover:text-accent transition-colors">
                Testimonials
              </Link>
              <Link to="/contact" className="block text-white/80 hover:text-accent transition-colors">
                Contact
              </Link>
              <Link to="/book" className="block text-white/80 hover:text-accent transition-colors">
                Book Reset Call
              </Link>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Follow Us</h4>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com/walkingoutofchaos" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-accent transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://tiktok.com/@walkingoutofchaos" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-accent transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com/walkingoutofchaos" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-accent transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © 2024 Walking Out of Chaos. All rights reserved.
          </p>
          
          {/* Legal Links */}
          <div className="mt-4 pb-4">
            <div className="flex justify-center gap-6 text-sm">
              <Link 
                to="/terms-of-service" 
                className="text-white/60 hover:text-white/80 transition-colors"
              >
                Terms of Service
              </Link>
              <Link 
                to="/privacy-policy" 
                className="text-white/60 hover:text-white/80 transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;