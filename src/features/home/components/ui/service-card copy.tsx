import { Link } from "react-router-dom";
import { Badge } from "~/common/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
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
  badgeText,
  redirecrUrl,
}) => {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        src={imageUrl}
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover brightness-60 dark:brightness-40"
      />
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">{badgeText}</Badge>
        </CardAction>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Link to={redirecrUrl ? redirecrUrl : "/"} className="w-full">
          Quiro saber mas
        </Link>
      </CardFooter>
    </Card>
  );
};
