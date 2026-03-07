import { Twitter, Instagram, Facebook, Youtube, Linkedin } from "lucide-react";
import ContactBtn from "../ui/contact-btn";
import MainLink from "../ui/main-link";

const legal = [
  { name: "Politicas de privacidad", href: "#" },
  { name: "Terminos de servicios", href: "#" },
  { name: "Politicas de Cookie", href: "#" },
];

const pages = [
  { name: "Inicio", href: "/" },
  { name: "Servicio", href: "/services" },
  { name: "Nosotros", href: "/about" },
  { name: "Precios", href: "/pricing" },
  { name: "Contactos", href: "/contact" },
  { name: "Blog", href: "/blog" },
];

const social = [
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
];
const numberContact = "+59173087757";
const messageContact = "Hola, quisiera mas informacion";

const TextTitle: React.FC<{ name: string }> = ({ name }) => {
  return (
    <h3 className="font-bold text-lg text-foreground pb-2 border-b border-primary w-fit">
      {name}
    </h3>
  );
};
const Footer = () => {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-6">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:px-3 lg:px-0 lg:gap-12 pb-8">
          <div className="col-span-1 lg:col-span-2 sm:text-center md:text-start">
            <div>
              <img
                src="logo.webp"
                alt="Fisioterapia Fusion Logo"
                className=" rounded-lg object-cover mr-3"
              />
            </div>
            <br />
            <p className="text-muted-foreground mb-6 max-w-md">
              ¡Contáctanos hoy mismo para programar tu consulta y comenzar tu
              camino hacia una vida más saludable!
            </p>
            <ContactBtn
              href={`https://wa.me/${numberContact}?text=${encodeURIComponent(
                messageContact
              )}`}
              name="Escribemos"
            />
          </div>
          <div className="flex flex-col gap-4 sm:items-center">
            <TextTitle name="Paginas" />
            <ul className="flex flex-col gap-3 sm:items-center">
              {pages.map((page, index) => (
                <MainLink key={index} name={page.name} href={page.href} />
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4 sm:items-center">
            <TextTitle name="Politicas" />
            <ul className="flex flex-col gap-3 sm:items-center">
              {legal.map((policy, index) => (
                <MainLink key={index} name={policy.name} href={policy.href} />
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4 sm:items-center md:items-start lg:items-center">
            <TextTitle name="Sigenos" />
            <ul className="flex flex-col gap-4">
              {social.map((social, index) => (
                <MainLink
                  key={index}
                  name={social.name}
                  href={social.href}
                  icon={
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary/10 to-primary/30 flex items-center justify-center mr-3 group-hover:from-primary/40 group-hover:to-primary/60 transition-all">
                      <social.icon className="w-5 h-5 group-hover:text-primary transition-colors" />
                    </div>
                  }
                />
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border my-6" />

        <div className="flex justify-center items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
