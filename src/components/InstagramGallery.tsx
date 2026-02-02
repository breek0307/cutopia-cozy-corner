import { motion } from 'framer-motion';
import { Instagram, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import mugBunny from '@/assets/mug-bunny.jpg';
import mugMellow from '@/assets/mug-mellow.jpg';
import mugNazar from '@/assets/mug-nazar.jpg';
import mugTeaInBloom from '@/assets/mug-teainbloom.jpg';
import mugBeloved from '@/assets/mug-beloved.jpg';
import mugBoo from '@/assets/mug-boo.jpg';

const galleryImages = [
  { src: mugBunny, caption: 'Meet Bunny 🐰' },
  { src: mugMellow, caption: 'Mellow vibes ☀️' },
  { src: mugNazar, caption: 'Stay protected 🧿' },
  { src: mugTeaInBloom, caption: 'Tea in Bloom 🌸' },
  { src: mugBeloved, caption: 'Beloved hearts 💕' },
  { src: mugBoo, caption: 'Boo Bear 🐻‍❄️' },
];

const InstagramGallery = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
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
            <Instagram className="w-4 h-4" />
            @cutopia26
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-foreground mb-4">
            Follow Our Journey
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Join our cozy community on Instagram for behind-the-scenes, new drops, and daily inspiration.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-10">
          {galleryImages.map((image, index) => (
            <motion.a
              key={index}
              href="https://instagram.com/cutopia26"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-square overflow-hidden rounded-xl"
            >
              <img
                src={image.src}
                alt={image.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-background">
                  <Instagram className="w-6 h-6 mx-auto mb-2" />
                  <span className="text-sm font-medium">{image.caption}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Follow Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Button
            asChild
            className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:opacity-90 text-white rounded-full px-8"
          >
            <a
              href="https://instagram.com/cutopia26"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-4 h-4 mr-2" />
              Follow @cutopia26
              <ExternalLink className="w-3 h-3 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramGallery;
