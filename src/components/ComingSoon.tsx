import { motion } from 'framer-motion';
import { Pencil, Clock, Gift, Sparkles } from 'lucide-react';

const comingItems = [
    {
        icon: Pencil,
        title: 'Personalized Mugs',
        description: 'Add names, dates, or custom messages to make it truly yours.',
        emoji: '✏️',
    },
    {
        icon: Clock,
        title: 'Limited Edition Drops',
        description: 'Exclusive designs released seasonally. First come, first served.',
        emoji: '⏰',
    },
    {
        icon: Gift,
        title: 'Gift Subscriptions',
        description: 'Monthly mug surprises for someone special (or yourself!).',
        emoji: '🎁',
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
        },
    },
};

const ComingSoon = () => {
    return (
        <section className="py-16 md:py-20 bg-secondary/20">
            <div className="container px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-sm font-medium text-terracotta bg-background rounded-full">
                        <Sparkles className="w-4 h-4" />
                        Coming Soon
                    </span>
                    <h2 className="text-2xl md:text-3xl font-serif font-medium text-foreground mb-2">
                        What's Brewing Next
                    </h2>
                    <p className="text-muted-foreground text-sm max-w-md mx-auto">
                        Exciting things are in the works. Stay tuned!
                    </p>
                </motion.div>

                {/* Coming Soon Items */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto"
                >
                    {comingItems.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="text-center p-5 md:p-6 bg-background rounded-2xl shadow-soft opacity-80 hover:opacity-100 transition-opacity duration-300"
                        >
                            <span className="text-2xl mb-3 block">{item.emoji}</span>
                            <h3 className="text-base font-serif font-medium text-foreground mb-1">
                                {item.title}
                            </h3>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                {item.description}
                            </p>
                            <span className="inline-block mt-3 px-3 py-1 text-xs text-primary/70 bg-primary/5 rounded-full">
                                Coming Soon
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ComingSoon;
