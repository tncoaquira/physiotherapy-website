import { CollaboratorsSeccion } from "~/features/home/components/collaborators-section";
import HeroSection from "~/features/home/components/hero-section";
import { PackSeccion } from "~/features/home/components/pack-section";
import { ServicesSeccion2 } from "~/features/home/components/services-section";
import { QuestionAccordion } from "~/features/home/components/ui/questions-accordion";
import { AboutSection } from "~/features/home/components/about-section";
import { SectionDivider } from "~/features/home/components/ui/section-divider";

const Home = () => {
  return (
    <div className="mx-2 md:mx-8 lg:mx-16">
      <HeroSection />
      {/*Nosotros */}
      <AboutSection />
      <SectionDivider className="my-6 md:my-12" />
      {/*Servicios*/}
      <ServicesSeccion2 />
      {/*Planes */}
      <SectionDivider className="my-6 md:my-12" />
      <PackSeccion />
      <SectionDivider className="my-12" />
      {/*colaboradores */}
      <CollaboratorsSeccion />
      <SectionDivider className="my-12" />
      {/*preguntas */}
      <QuestionAccordion />
    
    </div>
  );
};

export default Home;
