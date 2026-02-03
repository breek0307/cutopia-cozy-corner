import { motion } from 'framer-motion';
import { Heart, Star, MessageCircle } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        message: "Received my Bunny mug today and I'm in LOVE 🐰💕 The quality is amazing and the packaging was so cute!",
        author: 'A happy customer',
        platform: 'Instagram DM',
        rating: 5,
    },
    {
        id: 2,
        message: "Gifted the Nazar mug to my sister and she literally cried 😭 Thank you for making such beautiful pieces!",
        author: 'Loving sibling',
        platform: 'Instagram DM',
        rating: 5,
    },
    {
        id: 3,
        message: "This is my 3rd order from Cutopia! Every mug feels so personal. The chai just hits different in these 🍵",
        author: 'Loyal customer',
        platform: 'Instagram DM',
        rating: 5,
    },
    {
        id: 4,
        message: "The Boo Bear mug arrived safely all the way to Bangalore! Packaging was top-notch 📦✨",
        author: 'Delighted customer',
        platform: 'WhatsApp',
        rating: 5,
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

const CustomerLove = () => {
    return (
        <section className="py-16 md:py-24 bg-secondary/30">
            <div className="container px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-sm font-medium text-terracotta bg-background rounded-full">
                        <Heart className="w-4 h-4 fill-current" />
                        Customer Love
                    </span>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-medium text-foreground mb-3">
                        Words That Warm Our Hearts
                    </h2>
                    <p className="text-muted-foreground max-w-md mx-auto">
                        Real messages from our cozy community
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto"
                >
                    {testimonials.map((testimonial) => (
                        <motion.div
                            key={testimonial.id}
                            variants={itemVariants}
                            className="bg-background rounded-2xl p-5 md:p-6 shadow-soft hover:shadow-card transition-shadow duration-300"
                        >
                            {/* Rating */}
                            <div className="flex items-center gap-1 mb-3">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-gold fill-current" />
                                ))}
                            </div>

                            {/* Message */}
                            <p className="text-foreground leading-relaxed mb-4 text-sm md:text-base">
                                "{testimonial.message}"
                            </p>

                            {/* Footer */}
                            <div className="flex items-center justify-between text-xs text-muted-foreground">
                                <span className="font-medium">{testimonial.author}</span>
                                <span className="flex items-center gap-1">
                                    <MessageCircle className="w-3 h-3" />
                                    via {testimonial.platform}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default CustomerLove;
