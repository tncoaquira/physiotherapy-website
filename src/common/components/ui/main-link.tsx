import { Link, useLocation } from "react-router-dom";
import { cn } from "~/lib/utils";

interface MainLinkProps {
  name: string;
  href: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  border?: boolean;
  icon?: React.ReactNode;
}

const MainLink: React.FC<MainLinkProps> = ({
  name,
  href,
  onClick,
  border = false,
  icon,
  ...rest
}) => {
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <Link
      to={href}
      className={cn(
        "inline-flex items-center justify-center px-4 py-2 text-base font-medium text-foreground transition-colors duration-300",
        border && [
          "border-b-2 border-transparent hover:border-primary hover:text-primary",
          isActive && "border-primary text-primary font-semibold"
        ],
        !border && "hover:text-primary"
      )}
      onClick={onClick}
      {...rest}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {name}
    </Link>
  );
};

export default MainLink;