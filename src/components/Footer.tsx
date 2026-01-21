import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal py-10 border-t border-ivory/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="font-serif text-2xl font-bold text-gradient-gold">
            Appu Jewellers
          </div>

          {/* Copyright */}
          <p className="text-ivory/60 text-sm text-center">
            © {currentYear} Appu Jewellers, Dindigul. All rights reserved.
          </p>

          {/* Made with Love */}
          <div className="flex items-center gap-2 text-ivory/60 text-sm">
            <span>Crafted with</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span>in Dindigul</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
