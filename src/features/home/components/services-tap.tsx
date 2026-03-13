import { useState } from "react";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "~/common/components/ui/tabs";
import { SERVICES } from "~/common/constants";
import { Link } from "react-router-dom";

export function ServicesTap() {
  const [activeTab, setActiveTab] = useState<string>(SERVICES.LIST[0]?.value || "overview");

  return (
    <Tabs
      defaultValue="overview"
      value={activeTab}
      onValueChange={setActiveTab}
      className="w-full border-none"
    >
      {/* TabsList centrado */}
      <div className="flex justify-center">
        <TabsList className="inline-flex h-auto p-1 border-none">
          {SERVICES.LIST.map((item) => (
            <TabsTrigger
              key={item.value}
              value={item.value}
              className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300"
            >
              {item.name}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      {SERVICES.LIST.map((item) => (
        <TabsContent
          key={item.value}
          value={item.value}
          className="mt-6 outline-none data-[state=inactive]:hidden data-[state=active]:block animate-in fade-in-50 duration-500"
        >
          <div className="flex flex-col sm:flex-row overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm">
            {/* Imagen con object-position para centrar el foco (ej: center 30%) */}
            <div className="relative w-full sm:w-2/5 md:w-1/3 aspect-video sm:aspect-auto overflow-hidden">
              <img
                src={item.srcImg}
                alt={item.name}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                style={{ objectPosition: "center 30%" }} // Ajusta según la imagen
              />
              <div className="absolute inset-0 bg-black/35 pointer-events-none" />
            </div>

            {/* Contenido centrado verticalmente */}
            <div className="flex flex-1 flex-col justify-center p-6 sm:p-8">
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
                {item.name}
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground mb-4">
                {item.description}
              </p>
              <Link
                to={item.srcImg || "#"} // Asegúrate de tener redirectUrl en los datos
                className="inline-flex items-center text-sm font-medium text-primary hover:underline transition-colors duration-200"
              >
                Quiero saber más
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1 transition-transform group-hover:translate-x-1"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}