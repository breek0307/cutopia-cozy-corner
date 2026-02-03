import { motion } from 'framer-motion';
import { MessageCircle, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MobileOrderBar = () => {
  const openWhatsApp = () => {
    window.open(
      'https://wa.me/7071996737?text=Hi! I\'m interested in ordering a Cutopia mug 🎀',
      '_blank'
    );
  };

  const scrollToDelivery = () => {
    const element = document.querySelector('#delivery');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5, duration: 0.3 }}
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-background/95 backdrop-blur-md border-t border-border p-3 shadow-lg"
    >
      <div className="flex items-center gap-2">
        <Button
          onClick={scrollToDelivery}
          variant="outline"
          size="sm"
          className="flex-1 border-primary/30 text-primary hover:bg-primary/5 rounded-full text-sm"
        >
          <Truck className="w-4 h-4 mr-1.5" />
          Delivery Info
        </Button>
        <Button
          onClick={openWhatsApp}
          size="sm"
          className="flex-[1.5] bg-primary hover:bg-primary/90 text-primary-foreground rounded-full text-sm shadow-md"
        >
          <MessageCircle className="w-4 h-4 mr-1.5" />
          Order on WhatsApp
        </Button>
      </div>
    </motion.div>
  );
};

export default MobileOrderBar;
