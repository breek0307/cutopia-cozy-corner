import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HowToOrder from '@/components/HowToOrder';
import FeaturedCollection from '@/components/FeaturedCollection';
import BrandStory from '@/components/BrandStory';
import WhyCutopia from '@/components/WhyCutopia';
import Shop from '@/components/Shop';
import CustomerLove from '@/components/CustomerLove';
import PackagingPreview from '@/components/PackagingPreview';
import Delivery from '@/components/Delivery';
import InstagramGallery from '@/components/InstagramGallery';
import ComingSoon from '@/components/ComingSoon';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import MobileOrderBar from '@/components/MobileOrderBar';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pb-20 md:pb-0">
        <Hero />
        <HowToOrder />
        <FeaturedCollection />
        <BrandStory />
        <WhyCutopia />
        <Shop />
        <CustomerLove />
        <PackagingPreview />
        <Delivery />
        <InstagramGallery />
        <ComingSoon />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileOrderBar />
    </div>
  );
};

export default Index;
