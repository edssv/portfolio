import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
}

export function Card({ children, className, ...otherProps }: CardProps) {
  return (
    <div
      className={cn(
        'xl:rounded-2xl p-6 xl:px-10 xl:py-8 bg-neutral-950 border-dashed border-2 border-neutral-600',
        className,
      )}
      {...otherProps}
    >
      {children}
    </div>
  );
}
