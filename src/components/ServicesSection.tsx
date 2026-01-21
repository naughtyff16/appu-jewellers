import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PenTool, RefreshCcw, Sparkles, ArrowLeftRight } from "lucide-react";

const services = [
  {
    icon: PenTool,
    title: "Custom Design",
    description:
      "Transform your vision into reality with our bespoke jewellery design service. Our master craftsmen create unique pieces tailored to your preferences.",
  },
  {
    icon: ArrowLeftRight,
    title: "Gold Exchange",
    description:
      "Get the best value for your old gold with our transparent exchange program. Fair evaluation and instant exchange at competitive rates.",
  },
  {
    icon: Sparkles,
    title: "Jewellery Cleaning",
    description:
      "Restore the brilliance of your treasured pieces with our professional cleaning service. Ultrasonic cleaning and polishing for like-new results.",
  },
  {
    icon: RefreshCcw,
    title: "Repair & Restoration",
    description:
      "Expert repair and restoration services for all types of jewellery. From simple fixes to complete restorations, we handle it with care.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="services" className="py-24 lg:py-32 bg-secondary/50" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Our Services
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comprehensive
            <span className="text-gradient-gold block">Jewellery Services</span>
          </h2>
          <div className="divider-gold mb-6" />
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Beyond beautiful jewellery, we offer a complete range of services 
            to ensure your precious pieces remain stunning for generations.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-card p-8 rounded-2xl shadow-soft hover:shadow-gold transition-all duration-500 overflow-hidden"
            >
              {/* Background Decoration */}
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500" />
              
              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative w-16 h-16 rounded-2xl bg-gradient-gold flex items-center justify-center mb-6 shadow-gold"
              >
                <service.icon className="w-8 h-8 text-primary-foreground" />
              </motion.div>

              {/* Content */}
              <h3 className="font-serif font-bold text-xl text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Hover Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
