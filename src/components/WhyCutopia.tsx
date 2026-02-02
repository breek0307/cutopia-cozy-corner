import { motion } from 'framer-motion';
import { Heart, Gift, Sparkles, Users } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Handcrafted Ceramics',
    description: 'Each mug is carefully made with love and attention to detail.',
  },
  {
    icon: Gift,
    title: 'Made for Gifting',
    description: 'Perfect presents for loved ones or a treat for yourself.',
  },
  {
    icon: Heart,
    title: 'Instagram-Loved Designs',
    description: 'Aesthetic mugs that look as good as they feel.',
  },
  {
    icon: Users,
    title: 'Small Business, Big Heart',
    description: 'Supporting dreams, one cup at a time.',
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const WhyCutopia = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/50">
      <div className="container px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-terracotta bg-background rounded-full">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-foreground mb-4">
            Why Cutopia?
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            More than just mugs — we're crafting comfort, one sip at a time.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group text-center p-8 bg-background rounded-2xl shadow-soft hover:shadow-card transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 mb-6 rounded-full bg-blush group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-serif font-medium text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyCutopia;
