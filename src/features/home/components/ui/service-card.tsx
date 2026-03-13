import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  badgeText?: string;
  redirecrUrl?: string;
}
export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <Card className="w-full bg-tranparent border-1 border-primary/10 transform transition-transform hover:scale-95 hover:-rotate-1">
      <img
        src={imageUrl}
        alt="Event cover"
        className="aspect-video w-full object-cover brightness-70 dark:brightness-60"
      />  
      <CardHeader className="border-none">
        <CardTitle className="text-primary">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
};
