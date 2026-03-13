import {
  TypographyH2,
  TypographyLead,
} from "~/common/components/ui/typography";
import { CollageImage } from "./ui/collageImage";
import { StatBadge } from "./ui/stat-badge";
export function AboutSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 xl:gap-24 items-center mx-2">
      <CollageImage
        mainImage={{ src: "/doctor.jpg", alt: "Doctor especialista" }}
        topRightImage={{ src: "/clinica.jpg", alt: "Recepción" }}
        bottomRightImage={{
          src: "/fioterapia.jpg",
          alt: "Paciente en terapia",
        }}
      />
      <div className="relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        </div>
        <TypographyH2>
          Equipo Profesional en
          <span className="text-primary"> Fisioterapia</span>
        </TypographyH2>
        <TypographyLead className="text-justify mt-2 md:mt-6">
          Detrás de cada terapia hay un equipo de profesionales apasionados por
          la salud y el movimiento. Con más de 10 años de experiencia en
          diversas áreas de la fisioterapia, combinamos conocimiento, tecnología
          de vanguardia y un trato cercano para acompañarte en cada paso de tu
          recuperación. Creemos en la rehabilitación personalizada, donde tú
          eres el centro de todo lo que hacemos.
        </TypographyLead>
        <div className="flex flex-wrap gap-2 lg:gap-4 mt-4 md:mt-6">
          <StatBadge
            value="+10"
            label="años de experiencia"
            variant="primary"
          />
          <StatBadge
            value="+500"
            label="pacientes atendidos"
            variant="secondary"
          />
        </div>
      </div>
    </div>
  );
}