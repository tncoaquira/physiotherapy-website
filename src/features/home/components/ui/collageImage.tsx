import React from "react";

interface ImageSource {
  src: string;
  alt: string;
}

interface CollageImageProps {
  mainImage?: ImageSource;
  topRightImage?: ImageSource;
  bottomRightImage?: ImageSource;
  gap?: string;
  className?: string;
  imageClassName?: string;
}

export const CollageImage: React.FC<CollageImageProps> = ({
  mainImage = { src: "/logo.webp", alt: "logo" },
  topRightImage = { src: "/logo.webp", alt: "logo" },
  bottomRightImage = { src: "/logo.webp", alt: "logo" },
  gap = "gap-2 lg:gap-4",
  className = "",
  imageClassName = "w-full h-full object-cover rounded-lg brightness-90 dark:brightness-70",
}) => {
  return (
    <div
      className={`grid grid-cols-2 grid-rows-2 ${gap} w-full max-h-[600px] ${className}`}
    >
      <div className="row-span-2">
        <img
          src={mainImage.src}
          alt={mainImage.alt}
          className={imageClassName}
        />
      </div>
      <div>
        <img
          src={topRightImage.src}
          alt={topRightImage.alt}
          className={imageClassName}
        />
      </div>
      <div>
        <img
          src={bottomRightImage.src}
          alt={bottomRightImage.alt}
          className={imageClassName}
        />
      </div>
    </div>
  );
};
