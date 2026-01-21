import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Award, Gem, Users } from "lucide-react";

const values = [
  {
    icon: Gem,
    title: "Purity Guaranteed",
    description: "Every piece crafted with BIS hallmarked gold and certified precious metals",
  },
  {
    icon: Heart,
    title: "Crafted with Love",
    description: "Traditional artistry meets modern design in every creation",
  },
  {
    icon: Award,
    title: "Quality Excellence",
    description: "Uncompromising standards in craftsmanship and finishing",
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Building relationships that last generations",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" className="py-24 lg:py-32 bg-secondary/50" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Our Story
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              A Legacy of
              <span className="text-gradient-gold block">Trust & Excellence</span>
            </h2>
            <div className="divider-gold !mx-0 mb-8" />
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              For over two decades, Appu Jewellers has been Dindigul's most trusted destination 
              for exquisite gold and silver jewellery. Our journey began with a simple promise — 
              to offer the finest craftsmanship with unmatched purity and honest pricing.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Today, we continue to uphold these values, serving generations of families with 
              jewellery that celebrates life's precious moments. From traditional designs 
              that honor our heritage to contemporary pieces that embrace modern elegance, 
              every creation carries our commitment to excellence.
            </p>
          </motion.div>

          {/* Right - Value Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-5"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-card p-6 rounded-2xl shadow-soft hover:shadow-gold transition-all duration-500 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-serif font-semibold text-lg text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
