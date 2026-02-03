import { motion } from 'framer-motion';
import { Instagram, ExternalLink, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import mugBunny from '@/assets/mug-bunny.jpg';
import mugMellow from '@/assets/mug-mellow.jpg';
import mugNazar from '@/assets/mug-nazar.jpg';
import mugTeaInBloom from '@/assets/mug-teainbloom.jpg';
import mugBeloved from '@/assets/mug-beloved.jpg';
import mugBoo from '@/assets/mug-boo.jpg';

const galleryImages = [
  { src: mugBunny, caption: 'Meet Bunny 🐰', productName: 'Bunny Mug' },
  { src: mugMellow, caption: 'Mellow vibes ☀️', productName: 'Mellow Bird' },
  { src: mugNazar, caption: 'Stay protected 🧿', productName: 'Nazar Eye' },
  { src: mugTeaInBloom, caption: 'Tea in Bloom 🌸', productName: 'Tea in Bloom' },
  { src: mugBeloved, caption: 'Beloved hearts 💕', productName: 'Beloved Hearts' },
  { src: mugBoo, caption: 'Boo Bear 🐻‍❄️', productName: 'Boo Bear' },
];

const InstagramGallery = () => {
  const openWhatsApp = (productName: string) => {
    const message = `Hi! I saw the ${productName} on Instagram and I'd love to order it 🎀`;
    window.open(`https://wa.me/7071996737?text=${encodeURIComponent(message)}`, '_blank');
  };

  const scrollToShop = () => {
    const element = document.querySelector('#shop');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-sm font-medium text-terracotta bg-secondary rounded-full">
            <Instagram className="w-4 h-4" />
            @cutopia26
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-medium text-foreground mb-3">
            Seen on Instagram
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-4">
            Spotted something you love? Tap to order the exact mug you saw.
          </p>
          <Button
            onClick={scrollToShop}
            variant="outline"
            className="rounded-full border-primary/30 text-primary hover:bg-primary/5"
          >
            <ShoppingBag className="w-4 h-4 mr-2" />
            Buy the mug you saw on Insta
          </Button>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer"
              onClick={() => openWhatsApp(image.productName)}
            >
              <img
                src={image.src}
                alt={image.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-foreground/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                <span className="text-sm font-medium text-background mb-2">{image.caption}</span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 bg-background/95 text-primary rounded-full text-xs font-medium">
                  <ShoppingBag className="w-3 h-3" />
                  Order This
                </span>
              </div>
            </motion.div>
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
