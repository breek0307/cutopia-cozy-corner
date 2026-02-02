import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedCollection from '@/components/FeaturedCollection';
import BrandStory from '@/components/BrandStory';
import WhyCutopia from '@/components/WhyCutopia';
import Shop from '@/components/Shop';
import Delivery from '@/components/Delivery';
import InstagramGallery from '@/components/InstagramGallery';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import MobileOrderBar from '@/components/MobileOrderBar';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <FeaturedCollection />
        <BrandStory />
        <WhyCutopia />
        <Shop />
        <Delivery />
        <InstagramGallery />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileOrderBar />
    </div>
  );
};

export default Index;
