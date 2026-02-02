import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';
import mugBunny from '@/assets/mug-bunny.jpg';
import mugMellow from '@/assets/mug-mellow.jpg';
import mugNazar from '@/assets/mug-nazar.jpg';
import mugTeaInBloom from '@/assets/mug-teainbloom.jpg';

const collections = [
  {
    id: 1,
    name: 'Bunny',
    tagline: 'For hearts that love gently',
    image: mugBunny,
    color: 'bg-blush',
  },
  {
    id: 2,
    name: 'Mellow',
    tagline: 'Keep it bright, keep it breezy',
    image: mugMellow,
    color: 'bg-secondary',
  },
  {
    id: 3,
    name: 'Nazar',
    tagline: 'A quiet boundary in ceramic',
    image: mugNazar,
    color: 'bg-accent',
  },
  {
    id: 4,
    name: 'Tea in Bloom',
    tagline: 'Where mornings feel like spring',
    image: mugTeaInBloom,
    color: 'bg-sage',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const FeaturedCollection = () => {
  const scrollToShop = () => {
    const element = document.querySelector('#shop');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="collection" className="py-20 md:py-28 bg-background">
      <div className="container px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-terracotta bg-secondary rounded-full">
            Our Collections
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-foreground mb-4">
            Stories in Every Sip
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Each mug tells its own story. Find the one that speaks to you.
          </p>
        </motion.div>

        {/* Collection Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {collections.map((collection) => (
            <motion.div
              key={collection.id}
              variants={itemVariants}
              className="group cursor-pointer"
              onClick={scrollToShop}
            >
              <div
                className={`relative overflow-hidden rounded-2xl ${collection.color} aspect-square shadow-card card-hover`}
              >
                {/* Image */}
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* View Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="flex items-center gap-2 px-6 py-3 bg-background/95 text-foreground rounded-full text-sm font-medium shadow-lg">
                    <Eye className="w-4 h-4" />
                    View Mug
                  </span>
                </div>
              </div>

              {/* Text Content */}
              <div className="mt-4 text-center">
                <h3 className="text-xl font-serif font-medium text-foreground group-hover:text-primary transition-colors">
                  {collection.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {collection.tagline}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
