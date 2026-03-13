import * as React from "react";
import { cn } from "~/lib/utils";

interface TypographyProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export function TypographyH1({
  children,
  className,
  ...props
}: TypographyProps) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
}

export function TypographyH2({
  children,
  className,
  ...props
}: TypographyProps) {
  return (
    <h2
      className={cn(
        "scroll-m-20 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight first:mt-0",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

export function TypographyH3({
  children,
  className,
  ...props
}: TypographyProps) {
  return (
    <h3 className={cn("scroll-m-20 text:xl lg:text-2xl font-semibold tracking-tight", className)} {...props}>
      {children}
    </h3>
  );
}

export function TypographyLead({
  children,
  className,
  ...props
}: TypographyProps) {
  return (
    <p className={cn("text-md md:text-lg text-muted-foreground", className)} {...props}>
      {children}
    </p>
  );
}

export function TypographyP({
  children,
  className,
  ...props
}: TypographyProps) {
  return (
    <p
      className={cn("leading-7 ", className)}
      {...props}
    >
      {children}
    </p>
  );
}

export function TypographyHero({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold tracking-tight">
      {children}
    </h1>
  );
}
interface TypographyBlockquoteProps
  extends React.BlockquoteHTMLAttributes<HTMLQuoteElement> {
  children: React.ReactNode;
}

export function TypographyBlockquote({
  children,
  className,
  ...props
}: TypographyBlockquoteProps) {
  return (
    <blockquote
      className={cn("border-l-3 border-primary pl-6 italic text-sm lg:text-md", className)}
      {...props}
    >
      {children}
    </blockquote>
  );
}

export function TypographyDescription({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h1 className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-2xl">
      {children}
    </h1>
  );
}

export function TypographyHeroSecondary({
  children,
  className,
  ...props
}: TypographyProps) {
  return (
    <h3
      className={cn(
        "text-3xl sm:text-5xl md:text-4xl lg:text-4xl font-thin text-foreground tracking-tight",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
}
