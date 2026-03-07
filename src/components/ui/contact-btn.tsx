import React from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "~/components/ui/button";

interface ContactBtnProps {
  href?: string;
  name: string;
}
const ContactBtn: React.FC<ContactBtnProps> = ({ name, href }) => {
  return (
    <Button asChild className="bg-primary hover:bg-primary/90 text-foreground">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2"
      >
        <MessageCircle className="w-6 h-6" />
        {name}
      </a>
    </Button>
  );
};

export default ContactBtn;
