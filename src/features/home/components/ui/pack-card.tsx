import { Check } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";
import ContactBtn from "~/common/components/ui/contact-btn";

interface PackCardProps {
  title: string;
  description: string;
  items?: string[];
  imageUrl: string;
  badgeText?: string;
  redirecrUrl?: string;
}
export const PackCard: React.FC<PackCardProps> = ({
  title,
  description,
  items,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      {items && (
        <CardContent>
          <ul className="space-y-2">
            {items?.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      )}
      <CardFooter>
        <ContactBtn name="Obtener" />
      </CardFooter>
    </Card>
  );
};
