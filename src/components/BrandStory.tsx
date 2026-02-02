import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import brandStoryImage from '@/assets/brand-story.jpg';

const BrandStory = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section
      id="story"
      ref={sectionRef}
      className="relative py-20 md:py-32 overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <img
          src={brandStoryImage}
          alt="Cozy ceramic mug lifestyle"
          className="w-full h-[120%] object-cover"
        />
        <div className="absolute inset-0 bg-background/80" />
      </motion.div>

      {/* Content */}
      <div className="container relative z-10 px-4">
        <motion.div
          style={{ opacity }}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-terracotta bg-secondary/80 rounded-full backdrop-blur-sm"
          >
            Our Story
          </motion.span>

          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-2xl md:text-3xl lg:text-4xl font-serif font-medium text-foreground leading-relaxed mb-8"
          >
            "Cutopia wasn't built to rush.
            <br />
            <span className="text-primary">
              It was built for slow mornings,
            </span>
            <br />
            quiet evenings, and cups that feel like you."
          </motion.blockquote>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4 text-muted-foreground"
          >
            <p>
              I never planned to start a business.
              <br />
              I just wanted something that felt like me.
            </p>
            <p className="text-sm text-primary font-medium">
              — First drop of Cutopia 🌷
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandStory;
