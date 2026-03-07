import React from 'react';
import { MessageCircle } from 'lucide-react';
import { cn } from '~/lib/utils';
import { Button } from '~/components/ui/button';
interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  const whatsappNumber = '+59173087757'; 
  const whatsappMessage = 'Hola%20quisiera%20información%20sobre%20sus%20servicios';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className={cn("top-0 w-full h-screen overflow-hidden", className)}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/6111051-hd_1920_1080_25fps.mp4" type="video/mp4" />
        Tu navegador no soporta videos.
      </video>
      <div className="absolute inset-0 bg-black/50" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Talento Humamo Productivo
        </h1>
        <p className="text-xl md:text-xl mb-8 max-w-2xl drop-shadow-lg">
        Pagina en construcción, para mas informacion contactanos al 73087757
        </p>
        <Button
          asChild
          size="lg"
          className="bg-primary hover:bg-secondary text-white font-semibold py-6 px-8 text-lg rounded-full shadow-lg"
        >
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <MessageCircle className="w-6 h-6" />
            Contáctanos por WhatsApp
          </a>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;