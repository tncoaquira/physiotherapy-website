import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/common/components/ui/carousel";
import {
  TypographyH2,
  TypographyLead,
} from "~/common/components/ui/typography";
import { SERVICES } from "~/common/constants";
import { ServiceCard } from "./ui/service-card";
import { ArrowRight } from "lucide-react";

export function ServicesSeccion2() {
  return (
    <section className="relative ">
      <div className="absolute inet-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
      </div>
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <TypographyH2>
            Tratamientos <span className="text-primary">Efectivos</span>
          </TypographyH2>
          <TypographyLead className="mt-4">
            Descubre nuestros servicios personalizados, basados en la evidencia
            científica y adaptados a tus necesidades para una recuperación
            rápida y duradera.
          </TypographyLead>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {SERVICES.LIST.map((item, index) => (
              <CarouselItem
                key={index}
                className="basis-full md:basis-1/2 lg:basis-1/4 pl-4"
              >
                <ServiceCard
                  title={item.name}
                  description={item.description}
                  imageUrl={item.srcImg}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="text-center mt-10">
          <a
            href="/servicios"
            className="inline-flex items-center text-primary font-medium hover:underline"
          >
            Ver todos los tratamientos
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
