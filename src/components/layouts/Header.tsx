import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "../ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { cn } from "~/lib/utils";
import { ModeToggle } from "../mode-toggle";
import { useScroll } from "~/hook/useScroll";
import ContactBtn from "../ui/contact-btn";
import MainLink from "../ui/main-link";

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Nosotros", href: "/about" },
  { name: "Servicios", href: "/services" },
  { name: "Precios", href: "/pricing" },
  { name: "Constactos", href: "/contact" },
  { name: "Blog", href: "/blog" },
];
const numberContact = "+59173087757";
const messageContact = "Hola, quisiera mas informacion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useScroll(10);

  const handleLinkClick = () => {
    setIsOpen(false);
  };
  const logo: React.ReactNode = (
    <img
      src="logo.webp"
      alt="THPro Logo"
      className="w-12 h-12 rounded-full object-cover "
    />
  );
  const logoText: React.ReactNode = (
    <span className="font-bold text-2xl">
      <span className="text-foreground">TH</span>
      <span className="text-primary">PrO </span>
      <span className="text-primary text-sm">S.R.L</span>
    </span>
  );
  return (
    <header
      className={cn(
        "sticky top-4 z-50 h-14 max-w-[1500px] mx-auto transition-all duration-500",
        scrolled
          ? "bg-background/10 backdrop-blur rounded-lg p-1"
          : "bg-transparent"
      )}
    >
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          {logo}
          {logoText}
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex lg:items-center lg:space-x-10">
          <NavigationMenuList>
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.name}>
                <NavigationMenuLink asChild>
                  <MainLink
                    key={link.name}
                    name={link.name}
                    href={link.href}
                    border={true}
                  />
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="hidden lg:flex lg:items-center lg:space-x-2">
          <ContactBtn
            name="Agendar Cita"
            href={`https://wa.me/${numberContact}?text=${encodeURIComponent(
              messageContact
            )}`}
          />
          <ModeToggle />
        </div>

        {/* Mobile Navigation */}
        <div className="md:flex md:items-center md:space-x-2 lg:hidden">
          <ModeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <MainLink
                    key={link.name}
                    name={link.name}
                    href={link.href}
                    onClick={handleLinkClick}
                  />
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
