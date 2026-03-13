import React from "react";
import { ABOUT } from "~/common/constants"; /* 
import { CardBtn } from "~/common/components/card-btn";
import { ArrowRight } from "lucide-react"; */
import { CollaboratorsAvatar } from "./ui/collaborators-avatar";
import {
  TypographyDescription,
  TypographyHero,
} from "~/common/components/ui/typography";
import ContactBtn from "~/common/components/ui/contact-btn";

const numberContact = "+59173087757";
const messageContact = "Hola, quisiera mas informacion";
const HeroHeader: React.FC = ({}) => {
  const videoSrc = "/6111051-hd_1920_1080_25fps.mp4";
  const ctaText = "MAS INFOMACION";
  return (
    <section className={"top-0 h-screen overflow-hidden "}>
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
          src={videoSrc}
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/100 to-transparent" />
      </div>

      <div className="absolute inset-0 flex items-end justify-start m-12 lg:m-18">
        <div className="w-full max-w-3xl bg-transparent text-white space-y-6 text-start">
          <TypographyHero>{ABOUT.NAME}</TypographyHero>
          <CollaboratorsAvatar />
          <TypographyDescription>{ABOUT.PRESENTATION}</TypographyDescription>
          {/*  {ctaText && (
            <CardBtn className="max-w-sm">
              <div className="flex justify-between items-center">
                <div className="text-lg sm:text-xl md:text-2xl text-gray-200">
                  {ctaText}
                </div>
                <ArrowRight className="h-8 w-8" />
              </div>
            </CardBtn>
          )} */}

          {ctaText && (
           
              <ContactBtn
                name="Mas informacion"
                size="lg"
                href={`https://wa.me/${numberContact}?text=${encodeURIComponent(
                  messageContact
                )}`}
              />
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroHeader;
