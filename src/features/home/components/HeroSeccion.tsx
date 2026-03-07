import React from "react";
import { about } from "~/common/constants";
import { cn } from "~/lib/utils";
import { Button } from "~/common/components/ui/button";
import { Card, CardContent } from "~/common/components/ui/card";
import { Link } from "react-router-dom";
import { CardBtn } from "~/common/components/card-btn";
import { ArrowRight } from "lucide-react";

interface HeroHeaderProps {
  companyName?: string;
  tagline?: string;
  videoSrc?: string;
  ctaText?: string;
  handleCardClick?: () => void;
  className?: string;
}

const HeroHeader: React.FC<HeroHeaderProps> = ({
  companyName = about.NAME,
  tagline = about.PRESENTATION,
  videoSrc = "/6111051-hd_1920_1080_25fps.mp4",
  ctaText = "MAS INFOMACION",
  handleCardClick,
  className,
}) => {
  return (
    <section className={cn("top-0 h-screen overflow-hidden ", className)}>
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
      

      <div className="absolute inset-0 flex items-end justify-start">
        <div className="w-full max-w-3xl bg-transparent text-white space-y-6 text-start">
        <CardBtn
              onClick={handleCardClick}
              className="max-w-sm"
            >
              <div className="flex justify-between items-center">
              <div className="text-lg sm:text-xl md:text-2xl text-gray-200">
                {ctaText}
              </div>
              <ArrowRight className="h-8 w-8" />
              </div>
            </CardBtn>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight">
            {companyName}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-2xl">
            {tagline}
          </p>
          {ctaText && (
            <CardBtn
              onClick={handleCardClick}
              className="max-w-sm"
            >
              <div className="flex justify-between items-center">
              <div className="text-lg sm:text-xl md:text-2xl text-gray-200">
                {ctaText}
              </div>
              <ArrowRight className="h-8 w-8" />
              </div>
            </CardBtn>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroHeader;
