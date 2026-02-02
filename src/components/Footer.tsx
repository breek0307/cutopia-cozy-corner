import { Instagram, MessageCircle, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-secondary/50 py-12 md:py-16">
      <div className="container px-4">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <h3 className="text-3xl font-serif font-semibold text-primary mb-4">
            Cutopia
          </h3>
          <p className="text-muted-foreground max-w-sm mb-8">
            Handcrafted mugs made to hold your mood.
            <br />
            Sip slow. Feel home.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4 mb-8">
            <a
              href="https://instagram.com/cutopia26"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background shadow-soft flex items-center justify-center text-foreground/70 hover:text-primary hover:shadow-card transition-all"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/7071996737"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background shadow-soft flex items-center justify-center text-foreground/70 hover:text-primary hover:shadow-card transition-all"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>

          {/* Divider */}
          <div className="w-full max-w-xs h-px bg-border mb-8" />

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-red-400 fill-red-400" /> by Cutopia
          </p>
          <p className="text-xs text-muted-foreground/60 mt-2">
            © {currentYear} Cutopia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
