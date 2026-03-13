import { SERVICES } from "~/common/constants";
import { CollaboratorCard } from "./ui/collaborator-card";
import {
  TypographyH2,
  TypographyLead,
} from "~/common/components/ui/typography";

export function CollaboratorsSeccion() {
  return (
    <div>
      <div className="text-center max-w-2xl mx-auto mb-12">
        <TypographyH2>
          Nuestro <span className="text-primary">Equipo </span> en Salud
        </TypographyH2>
        <TypographyLead className="mt-4">
          Contamos con un equipo de profesionales altamente capacitados y
          dedicados a brindarte el mejor cuidado en fisioterapia.
        </TypographyLead>
      </div>
      <div className="flex flex-wrap justify-center">
        {SERVICES.LIST.map((item, index) => (
          <div className="p-1">
            <CollaboratorCard
              key={index}
              title="Especialista en Fisioterapia Deportiva"
              description={item.description}
              imageUrl={"/doctor.jpg"}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
