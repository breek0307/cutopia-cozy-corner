import { motion } from 'framer-motion';
import { Package, Gift, Shield, Heart } from 'lucide-react';

const packagingFeatures = [
    {
        icon: Package,
        title: 'Bubble-Wrapped with Care',
        description: 'Every mug is cushioned in multiple layers to survive the journey.',
    },
    {
        icon: Gift,
        title: 'Gift-Ready Presentation',
        description: 'Beautiful packaging that makes unboxing a moment to remember.',
    },
    {
        icon: Shield,
        title: 'Safe Delivery Promise',
        description: "We stand behind every package. If it breaks, we'll make it right.",
    },
    {
        icon: Heart,
        title: 'Personal Touch',
        description: 'Each order includes a handwritten thank-you note.',
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
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
        },
    },
};

const PackagingPreview = () => {
    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="container px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-sm font-medium text-terracotta bg-secondary rounded-full">
                        <Gift className="w-4 h-4" />
                        Packaging & Delivery
                    </span>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-medium text-foreground mb-3">
                        Wrapped Like a Gift, Always
                    </h2>
                    <p className="text-muted-foreground max-w-md mx-auto">
                        Because every mug deserves to arrive looking its best
                    </p>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
                >
                    {packagingFeatures.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="text-center p-4 md:p-6 bg-secondary/30 rounded-2xl hover:bg-secondary/50 transition-colors duration-300"
                        >
                            <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 mb-4 rounded-full bg-background shadow-soft">
                                <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                            </div>
                            <h3 className="text-sm md:text-base font-medium text-foreground mb-1">
                                {feature.title}
                            </h3>
                            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default PackagingPreview;
