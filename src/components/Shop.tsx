import { motion } from 'framer-motion';
import { MessageCircle, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import mugBunny from '@/assets/mug-bunny.jpg';
import mugMellow from '@/assets/mug-mellow.jpg';
import mugNazar from '@/assets/mug-nazar.jpg';
import mugTeaInBloom from '@/assets/mug-teainbloom.jpg';
import mugBeloved from '@/assets/mug-beloved.jpg';
import mugBoo from '@/assets/mug-boo.jpg';

const products = [
  {
    id: 1,
    name: 'Bunny Mug',
    description: 'For hearts that love gently',
    price: '₹599',
    image: mugBunny,
    tag: 'Bestseller',
  },
  {
    id: 2,
    name: 'Mellow Bird',
    description: 'Keep it bright, keep it breezy',
    price: '₹549',
    image: mugMellow,
    tag: null,
  },
  {
    id: 3,
    name: 'Nazar Eye',
    description: 'A quiet boundary in ceramic',
    price: '₹649',
    image: mugNazar,
    tag: 'New',
  },
  {
    id: 4,
    name: 'Tea in Bloom',
    description: 'Where mornings feel like spring',
    price: '₹579',
    image: mugTeaInBloom,
    tag: null,
  },
  {
    id: 5,
    name: 'Beloved Hearts',
    description: 'Love in every sip',
    price: '₹529',
    image: mugBeloved,
    tag: 'Gift Ready',
  },
  {
    id: 6,
    name: 'Boo Bear',
    description: 'Your cozy companion',
    price: '₹699',
    image: mugBoo,
    tag: 'Limited',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Shop = () => {
  const openWhatsApp = (productName: string) => {
    const message = `Hi! I'm interested in ordering the ${productName} from Cutopia 🎀`;
    window.open(`https://wa.me/7071996737?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="shop" className="py-20 md:py-28 bg-background">
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
            Shop Now
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-foreground mb-4">
            Find Your Perfect Mug
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Order via WhatsApp for a personal touch. Pan-India delivery available.
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="group bg-card rounded-2xl overflow-hidden shadow-card card-hover"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {product.tag && (
                  <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium text-primary-foreground bg-primary rounded-full">
                    {product.tag}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-serif font-medium text-foreground">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {product.description}
                    </p>
                  </div>
                  <span className="text-lg font-semibold text-primary">
                    {product.price}
                  </span>
                </div>

                <Button
                  onClick={() => openWhatsApp(product.name)}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Order Now
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Don't see what you're looking for?
          </p>
          <Button
            variant="outline"
            onClick={() => openWhatsApp('custom order')}
            className="border-primary/30 text-primary hover:bg-primary/5 rounded-full px-8"
          >
            <ShoppingBag className="w-4 h-4 mr-2" />
            Request Custom Order
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Shop;
