import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Twitter, Instagram, Facebook, Youtube, Linkedin } from "lucide-react";

const Footer = () => {
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

            <p className="text-muted-foreground mb-6 max-w-md">
              ¡Contáctanos hoy mismo para programar tu consulta y comenzar tu
              camino hacia una vida más saludable!
            </p>

            <Button asChild>
              <Link to="/pricing">+591 730087757</Link>
            </Button>
          </div>

          <div className="flex flex-col gap-4 sm:items-center">
            <h3 className="font-bold text-lg text-foreground pb-2 border-b border-primary w-fit">
              Paginas
            </h3>
            <ul className="flex flex-col gap-3 sm:items-center">
              {pages.map((page, index) => (
                <li key={index}>
                  <Link
                    to={page.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div className="flex flex-col gap-4 sm:items-center">
            <h3 className="font-bold text-lg text-foreground pb-2 border-b border-primary w-fit">
              Politicas
            </h3>
            <ul className="flex flex-col gap-3 sm:items-center">
              {legal.map((policy, index) => (
                <li key={index}>
                  <Link
                    to={policy.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {policy.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-4 sm:items-center md:items-start lg:items-center">
            <h3 className="font-bold text-lg text-foreground pb-2 border-b border-primary w-fit">
              Siguenos
            </h3>
            <ul className="flex flex-col gap-4">
              {social.map((social, index) => (
                <li key={index}>
                  <a
                    href={social.href}
                    className="flex items-center text-muted-foreground group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary/10 to-primary/30 flex items-center justify-center mr-3 group-hover:from-primary/40 group-hover:to-primary/60 transition-all">
                      <social.icon className="w-5 h-5 group-hover:text-primary transition-colors" />
                    </div>
                    <span className="group-hover:text-primary transition-colors">
                      {social.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-6"></div>

        {/* Bottom section */}
        <div className="flex justify-center items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Local Fusion. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
