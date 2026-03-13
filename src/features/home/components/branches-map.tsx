import { useState, useCallback } from "react";
import { GoogleMap, Marker, InfoWindow, useJsApiLoader } from "@react-google-maps/api";
import { Card, CardContent } from "~/common/components/ui/card";
import { Badge } from "~/common/components/ui/badge";
import { ScrollArea } from "~/common/components/ui/scroll-area";
import { cn } from "~/lib/utils";

// Tipos para las sucursales
export interface Branch {
  id: string;
  name: string;
  address: string;
  phone?: string;
  email?: string;
  lat: number;
  lng: number;
  isMain?: boolean; // Sucursal principal
}

interface BranchesMapProps {
  branches: Branch[];
  apiKey: string;
  mapContainerClassName?: string;
  defaultZoom?: number;
  defaultCenter?: { lat: number; lng: number };
}

// Estilos por defecto del mapa (opcional, para personalizar)
const mapContainerStyle = {
  width: "100%",
  height: "100%",
  minHeight: "400px",
};

const defaultMapOptions: google.maps.MapOptions = {
  disableDefaultUI: false,
  zoomControl: true,
  streetViewControl: false,
  mapTypeControl: false,
  fullscreenControl: true,
};

export function BranchesMap({
  branches,
  apiKey,
  mapContainerClassName,
  defaultZoom = 12,
  defaultCenter,
}: BranchesMapProps) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apiKey,
  });

  const [selectedBranch, setSelectedBranch] = useState<Branch | null>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);

  // Si no hay centro por defecto, usar la primera sucursal o una coordenada por defecto
  const center = defaultCenter || (branches.length > 0
    ? { lat: branches[0].lat, lng: branches[0].lng }
    : { lat: -34.6037, lng: -58.3816 }); // Buenos Aires como fallback

  const onLoad = useCallback((map: google.maps.Map) => {
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  const handleBranchClick = (branch: Branch) => {
    setSelectedBranch(branch);
    if (map) {
      map.panTo({ lat: branch.lat, lng: branch.lng });
      map.setZoom(15);
    }
  };

  if (!isLoaded) return <div>Cargando mapa...</div>;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px] lg:h-[500px]">
      {/* Lista de sucursales - ocupa 1 columna en desktop, arriba en móvil */}
      <div className="lg:col-span-1 order-2 lg:order-1">
        <Card className="h-full">
          <ScrollArea className="h-full p-4">
            <h3 className="text-lg font-semibold mb-4">Nuestras Sucursales</h3>
            <div className="space-y-3">
              {branches.map((branch) => (
                <Card
                  key={branch.id}
                  className={cn(
                    "cursor-pointer transition-all hover:shadow-md",
                    selectedBranch?.id === branch.id && "ring-2 ring-primary"
                  )}
                  onClick={() => handleBranchClick(branch)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-medium flex items-center gap-2">
                          {branch.name}
                          {branch.isMain && (
                            <Badge variant="default" className="text-xs">
                              Principal
                            </Badge>
                          )}
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          {branch.address}
                        </p>
                        {branch.phone && (
                          <p className="text-sm text-muted-foreground mt-1">
                            📞 {branch.phone}
                          </p>
                        )}
                        {branch.email && (
                          <p className="text-sm text-muted-foreground">
                            ✉️ {branch.email}
                          </p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </Card>
      </div>

      {/* Mapa - ocupa 2 columnas en desktop, abajo en móvil */}
      <div
        className={cn(
          "lg:col-span-2 order-1 lg:order-2 rounded-lg overflow-hidden border",
          mapContainerClassName
        )}
        style={{ minHeight: "400px" }}
      >
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={defaultZoom}
          onLoad={onLoad}
          onUnmount={onUnmount}
          options={defaultMapOptions}
        >
          {branches.map((branch) => (
            <Marker
              key={branch.id}
              position={{ lat: branch.lat, lng: branch.lng }}
              onClick={() => setSelectedBranch(branch)}
              icon={
                branch.isMain
                  ? {
                      url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
                    }
                  : undefined
              }
            />
          ))}

          {selectedBranch && (
            <InfoWindow
              position={{ lat: selectedBranch.lat, lng: selectedBranch.lng }}
              onCloseClick={() => setSelectedBranch(null)}
            >
              <div className="p-2 max-w-[200px]">
                <h4 className="font-semibold text-sm">{selectedBranch.name}</h4>
                <p className="text-xs text-gray-600 mt-1">{selectedBranch.address}</p>
                {selectedBranch.phone && (
                  <p className="text-xs mt-1">📞 {selectedBranch.phone}</p>
                )}
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </div>
    </div>
  );
}