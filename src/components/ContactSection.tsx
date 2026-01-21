import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 98765 43210", "+91 04512 234567"],
    action: "tel:+919876543210",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@appujewellers.com"],
    action: "mailto:info@appujewellers.com",
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["123, Main Road, Near Clock Tower", "Dindigul - 624001, Tamil Nadu"],
    action: "https://maps.google.com",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Sat: 10:00 AM - 9:00 PM", "Sunday: 10:00 AM - 2:00 PM"],
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Get In Touch
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Visit Our
            <span className="text-gradient-gold block">Showroom</span>
          </h2>
          <div className="divider-gold mb-6" />
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Step into our elegant showroom and experience our exquisite collection. 
            Our team is ready to help you find the perfect piece.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.action}
              target={item.action?.startsWith("http") ? "_blank" : undefined}
              rel={item.action?.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-card p-6 rounded-2xl shadow-soft hover:shadow-gold transition-all duration-500 text-center cursor-pointer"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-gold flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-serif font-semibold text-lg text-foreground mb-3">
                {item.title}
              </h3>
              {item.details.map((detail, i) => (
                <p key={i} className="text-muted-foreground text-sm">
                  {detail}
                </p>
              ))}
            </motion.a>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center bg-gradient-gold rounded-3xl p-10 lg:p-16 relative overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary-foreground/10 -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-primary-foreground/10 translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
              Have Questions? Chat with Us!
            </h3>
            <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
              Get instant answers about our collections, pricing, or any custom requirements. 
              We're just a message away!
            </p>
            <Button
              variant="secondary"
              size="lg"
              className="gap-3 text-base font-semibold px-8 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              asChild
            >
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
