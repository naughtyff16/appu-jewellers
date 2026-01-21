import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-jewellery.jpg";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Elegant gold jewellery"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-charcoal/40 to-charcoal/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 via-transparent to-charcoal/40" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/10 blur-3xl animate-float" />
      <div className="absolute bottom-40 right-20 w-48 h-48 rounded-full bg-primary/10 blur-3xl animate-float delay-1000" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 mb-8"
        >
          <MapPin className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-ivory">
            Trusted Jewellers in Dindigul
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold text-ivory leading-tight mb-6"
        >
          Trusted Gold & Silver
          <br />
          <span className="text-gradient-gold">Jewellery Experts</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-ivory/80 mb-10 leading-relaxed"
        >
          Experience the perfect blend of traditional craftsmanship and modern elegance. 
          Every piece tells a story of purity, artistry, and timeless beauty.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            variant="gold"
            size="lg"
            className="gap-2 text-base px-8"
            onClick={() => scrollToSection("collections")}
          >
            View Collections
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="gap-2 text-base px-8 border-ivory/40 text-ivory hover:bg-ivory/10 hover:text-ivory"
            onClick={() => scrollToSection("contact")}
          >
            Visit Store
          </Button>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 flex flex-wrap justify-center gap-8 text-ivory/70"
        >
          {[
            { label: "BIS Hallmark", value: "Certified" },
            { label: "Years of Trust", value: "25+" },
            { label: "Happy Customers", value: "10,000+" },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-serif font-bold text-primary">
                {item.value}
              </div>
              <div className="text-sm mt-1">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-ivory/40 flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
