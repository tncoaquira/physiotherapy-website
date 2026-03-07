import React from 'react';
import { Card, CardContent } from './ui/card';
import { cn } from '~/lib/utils';

interface CardBtnProps extends React.HTMLAttributes<HTMLDivElement> {
  onClick?: () => void;
}

export const CardBtn: React.FC<CardBtnProps> = ({
  children,
  onClick,
  className,
  ...props
}) => {
  return (
    <Card
      onClick={onClick}
      className={cn(
        'bg-foreground/10 backdrop-blur-sm border border-foreground/20 text-white transition-transform hover:scale-105 cursor-pointer',
        className
      )}
      {...props}
    >
      <CardContent className="p-2 md:p-4 space-y-6">
        {children}
      </CardContent>
    </Card>
  );
};