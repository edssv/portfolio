import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
}

export function Card({ children, className, ...otherProps }: CardProps) {
  return (
    <div
      className={cn('rounded-2xl p-6 xl:p-16 bg-zinc-950 hover:bg-zinc-900 transition-colors', className)}
      {...otherProps}
    >
      {children}
    </div>
  );
}
