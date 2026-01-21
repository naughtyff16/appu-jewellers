import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import collectionGold from "@/assets/collection-gold.jpg";
import collectionSilver from "@/assets/collection-silver.jpg";
import collectionBridal from "@/assets/collection-bridal.jpg";
const collections = [{
  title: "Gold Collection",
  description: "Chains, rings, bangles, necklaces & more in 22K & 24K gold",
  image: collectionGold,
  items: ["Necklaces", "Bangles", "Rings", "Chains"]
}, {
  title: "Silver Collection",
  description: "Elegant earrings, bracelets & traditional silver designs",
  image: collectionSilver,
  items: ["Earrings", "Bracelets", "Anklets", "Pendants"]
}, {
  title: "Bridal Collection",
  description: "Exquisite wedding sets & traditional bridal jewellery",
  image: collectionBridal,
  items: ["Wedding Sets", "Maang Tikka", "Haarams", "Temple Jewellery"]
}];
const CollectionsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.1
  });
  return <section id="collections" className="py-24 lg:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.8
      }} className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Our Collections
          </span>
          <h2 className="text-3xl lg:text-5xl text-foreground mb-6 md:text-3xl font-sans font-semibold">
            Discover Timeless
            <span className="text-gradient-gold block">Elegance</span>
          </h2>
          <div className="divider-gold mb-6" />
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Explore our curated collections of handcrafted jewellery, 
            where tradition meets contemporary design.
          </p>
        </motion.div>

        {/* Collection Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => <motion.div key={collection.title} initial={{
          opacity: 0,
          y: 50
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.8,
          delay: index * 0.15
        }} className="group relative rounded-2xl overflow-hidden bg-card shadow-soft hover:shadow-elevated transition-all duration-500">
              {/* Image */}
              <div className="aspect-square overflow-hidden">
                <img src={collection.image} alt={collection.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-80" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                  <h3 className="font-serif text-2xl font-bold text-ivory mb-2">
                    {collection.title}
                  </h3>
                  <p className="text-ivory/80 text-sm mb-4">
                    {collection.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {collection.items.map(item => <span key={item} className="px-3 py-1 text-xs font-medium bg-primary/20 backdrop-blur-sm text-ivory rounded-full">
                        {item}
                      </span>)}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Explore Collection</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                <ArrowUpRight className="w-5 h-5 text-ivory" />
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default CollectionsSection;