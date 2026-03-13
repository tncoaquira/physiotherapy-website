import {
  Card,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";

interface CollaboratorCardProps {
  title: string;
  description: string;
  imageUrl: string;
  badgeText?: string;
  redirecrUrl?: string;
}
export const CollaboratorCard: React.FC<CollaboratorCardProps> = ({
  title,
  imageUrl,
}) => {
  return (
    <Card className="relative bg-transparent border-none mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        src={imageUrl}
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
      />
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
    </Card>
  );
};
