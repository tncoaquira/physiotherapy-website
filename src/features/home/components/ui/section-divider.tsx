import { cn } from "~/lib/utils";
// components/ui/section-divider.tsx

interface SectionDividerProps {
  className?: string;
  withDot?: boolean;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({
  className,
  withDot = true,
}) => {
  return (
    <div
      className={cn(
        "relative flex justify-center items-center py-8",
        className
      )}
    >
      {/* Línea difuminada */}
      <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Círculo decorativo (opcional) */}
      {withDot && (
        <div className="relative w-2 h-2 rounded-full bg-primary/50 ring-4 ring-background" />
      )}
    </div>
  );
};