import React from 'react';
import { cn } from '~/lib/utils'; // Asumiendo que tienes la utilidad cn para combinar clases

interface StatBadgeProps {
  value: React.ReactNode;
  label: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  ref?: React.Ref<HTMLDivElement>;
}

const sizeClasses = {
  sm: {
    container: 'px-4 py-2',
    value: 'text-lg',
    label: 'text-xs',
  },
  md: {
    container: 'px-6 py-3 md:px-8 md:py-4',
    value: 'text-xl md:text-2xl',
    label: 'text-sm md:text-base',
  },
  lg: {
    container: 'px-8 py-4 md:px-10 md:py-5',
    value: 'text-2xl md:text-3xl',
    label: 'text-base md:text-lg',
  },
};

const variantClasses = {
  primary: {
    blurBg: 'bg-primary/20',
    border: 'border-primary/20',
    value: 'text-primary',
  },
  secondary: {
    blurBg: 'bg-secondary/20',
    border: 'border-secondary/20',
    value: 'text-secondary-foreground',
  },
};

export const StatBadge = React.forwardRef<HTMLDivElement, StatBadgeProps>(
  (
    {
      value,
      label,
      variant = 'primary',
      size = 'md',
      className,
      ...props
    },
    ref
  ) => {
    const variantStyle = variantClasses[variant];
    const sizeStyle = sizeClasses[size];

    return (
      <div
        ref={ref}
        className={cn('group relative inline-block', className)}
        {...props}
      >
        <div
          className={cn(
            'absolute inset-0 rounded-full blur-md transition-all group-hover:blur-lg',
            variantStyle.blurBg
          )}
        />
        <div
          className={cn(
            'relative flex items-center gap-2 rounded-full border bg-background/80 backdrop-blur-sm shadow-lg',
            variantStyle.border,
            sizeStyle.container
          )}
        >
          <span className={cn('font-extrabold', variantStyle.value, sizeStyle.value)}>
            {value}
          </span>
          <span className={cn('text-muted-foreground font-medium', sizeStyle.label)}>
            {label}
          </span>
        </div>
      </div>
    );
  }
);