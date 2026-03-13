import { PACK } from "~/common/constants";
import { PackCard } from "./ui/pack-card";
import {
  TypographyH2,
  TypographyLead,
} from "~/common/components/ui/typography";

export function PackSeccion() {
  return (
    <div className="w-full">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <TypographyH2>
          Atencion <span className="text-primary">Personalizada</span>
        </TypographyH2>
        <TypographyLead className="mt-4">
          Ofrecemos atención personalizada, adaptando nuestros servicios a tus
          necesidades y a tu tiempo.
        </TypographyLead>
      </div>
      <div className="flex flex-wrap justify-center gap-6  mt-6 md:mt-12">
        {PACK.LIST.map((item, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <PackCard
              title={item.name}
              description={item.description}
              imageUrl={item.srcImg}
              items={[...item.list]}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
