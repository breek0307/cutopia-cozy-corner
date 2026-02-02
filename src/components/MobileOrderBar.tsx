import { motion } from 'framer-motion';
import { ShoppingBag, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MobileOrderBar = () => {
  const openWhatsApp = () => {
    window.open(
      'https://wa.me/7071996737?text=Hi! I\'m interested in ordering a Cutopia mug 🎀',
      '_blank'
    );
  };

  const scrollToShop = () => {
    const element = document.querySelector('#shop');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5, duration: 0.3 }}
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-background/95 backdrop-blur-md border-t border-border p-4 shadow-lg"
    >
      <div className="flex items-center gap-3">
        <Button
          onClick={scrollToShop}
          variant="outline"
          className="flex-1 border-primary/30 text-primary rounded-full"
        >
          <ShoppingBag className="w-4 h-4 mr-2" />
          Shop
        </Button>
        <Button
          onClick={openWhatsApp}
          className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          Order Now
        </Button>
      </div>
    </motion.div>
  );
};

export default MobileOrderBar;
