import { motion } from 'framer-motion';
import { MousePointer, MessageCircle, Package } from 'lucide-react';

const steps = [
    {
        icon: MousePointer,
        step: '1',
        title: 'Choose your mug',
        description: 'Browse our cozy collection and find the one that speaks to you.',
    },
    {
        icon: MessageCircle,
        step: '2',
        title: 'Tap "Order on WhatsApp"',
        description: "We'll confirm your order and answer any questions personally.",
    },
    {
        icon: Package,
        step: '3',
        title: 'Get it delivered safely',
        description: 'Your mug arrives gift-ready, wrapped with care.',
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
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1] as const,
        },
    },
};

const HowToOrder = () => {
    return (
        <section className="py-16 md:py-20 bg-secondary/30">
            <div className="container px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-terracotta bg-background rounded-full">
                        Simple & Personal
                    </span>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-medium text-foreground mb-3">
                        How to Order
                    </h2>
                    <p className="text-muted-foreground max-w-md mx-auto">
                        No carts, no checkout. Just a friendly conversation.
                    </p>
                </motion.div>

                {/* Steps */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto"
                >
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="relative text-center p-6 bg-background rounded-2xl shadow-soft"
                        >
                            {/* Step Number */}
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 flex items-center justify-center bg-primary text-primary-foreground text-sm font-medium rounded-full">
                                {step.step}
                            </div>

                            {/* Icon */}
                            <div className="inline-flex items-center justify-center w-14 h-14 mb-4 mt-2 rounded-full bg-blush">
                                <step.icon className="w-6 h-6 text-primary" />
                            </div>

                            {/* Content */}
                            <h3 className="text-lg font-serif font-medium text-foreground mb-2">
                                {step.title}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {step.description}
                            </p>

                            {/* Connector Line (hidden on mobile) */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-1/2 -right-4 w-8 border-t-2 border-dashed border-primary/30" />
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default HowToOrder;
