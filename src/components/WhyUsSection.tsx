import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Users, Hammer, Scale, Star, Clock } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "BIS Hallmark Certified",
    description: "Every gold piece is BIS hallmarked, guaranteeing authentic purity standards",
  },
  {
    icon: Users,
    title: "Trusted Local Jeweller",
    description: "Serving Dindigul families for over 25 years with unwavering trust",
  },
  {
    icon: Hammer,
    title: "Skilled Craftsmen",
    description: "Expert artisans with decades of experience in traditional and modern techniques",
  },
  {
    icon: Scale,
    title: "Fair & Transparent Pricing",
    description: "Honest pricing with no hidden charges — what you see is what you pay",
  },
  {
    icon: Star,
    title: "Premium Quality",
    description: "Only the finest materials and superior craftsmanship in every creation",
  },
  {
    icon: Clock,
    title: "Lifetime Service",
    description: "Complimentary cleaning and maintenance for all jewellery purchased from us",
  },
];

const WhyUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="why-us" className="py-24 lg:py-32 bg-charcoal relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-primary blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
            Why Choose Us
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-ivory mb-6">
            The Appu Jewellers
            <span className="text-gradient-gold block">Difference</span>
          </h2>
          <div className="divider-gold mb-6" />
          <p className="max-w-2xl mx-auto text-ivory/70 text-lg">
            When you choose Appu Jewellers, you choose a legacy of trust, 
            quality, and exceptional service that spans generations.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex gap-5 p-6 rounded-2xl bg-ivory/5 backdrop-blur-sm border border-ivory/10 hover:border-primary/30 hover:bg-ivory/10 transition-all duration-500"
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="w-7 h-7 text-primary-foreground" />
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="font-serif font-semibold text-lg text-ivory mb-2">
                  {reason.title}
                </h3>
                <p className="text-ivory/60 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
