import { motion } from 'framer-motion';
import { Truck, Package, MessageCircle, Gift } from 'lucide-react';

const deliveryFeatures = [
  {
    icon: Truck,
    title: 'Pan-India Delivery',
    description: 'We ship across India, right to your doorstep.',
  },
  {
    icon: Package,
    title: 'Secure Packaging',
    description: 'Each mug is bubble-wrapped with care.',
  },
  {
    icon: MessageCircle,
    title: 'Order via WhatsApp',
    description: 'Personal service, just a message away.',
  },
  {
    icon: Gift,
    title: 'Gifting Options',
    description: 'Special gift wrapping available on request.',
  },
];

const Delivery = () => {
  return (
    <section className="py-16 md:py-20 bg-blush/30">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-serif font-medium text-foreground mb-2">
            Delivery & Ordering
          </h2>
          <p className="text-muted-foreground">
            Making your mug journey smooth and simple
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {deliveryFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-4 md:p-6"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-background shadow-soft">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-sm md:text-base font-medium text-foreground mb-1">
                {feature.title}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Delivery;
