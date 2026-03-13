import React from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "~/common/components/ui/button";
import { cn } from "~/lib/utils"; // Asegúrate de tener esta utilidad

interface ContactBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Texto del botón */
  name: string;
  /** URL de destino (si se proporciona, el botón se convierte en enlace) */
  href?: string;
  /** Icono personalizable (por defecto MessageCircle) */
  icon?: React.ReactNode;
  /** Variante del botón (default, outline, ghost, etc.) */
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  /** Tamaño del botón */
  size?: "default" | "sm" | "lg" | "icon";
  /** Abrir en nueva pestaña (solo si href está presente) */
  external?: boolean;
}

const ContactBtn: React.FC<ContactBtnProps> = ({
  name,
  href,
  icon = <MessageCircle className="h-4 w-4" />,
  variant = "default",
  size = "default",
  external = true,
  className,
  ...props
}) => {
  const content = (
    <>
      {icon}
      <span>{name}</span>
    </>
  );
  if (href) {
    return (
      <Button
        variant={variant}
        size={size}
        className={cn(
          "bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground shadow-md hover:shadow-lg transition-all",
          className
        )}
        asChild
      >
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
        >
          {content}
        </a>
      </Button>
    );
  }
  return (
    <Button
      variant={variant}
      size={size}
      className={cn(
        "bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground shadow-md hover:shadow-lg transition-all gap-2",
        className
      )}
      {...props}
    >
      {content}
    </Button>
  );
};

export default ContactBtn;