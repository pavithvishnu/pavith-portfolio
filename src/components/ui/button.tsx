import React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: 'default' | 'secondary';
  className?: string;
};

export function Button({ asChild, variant = 'default', className = '', children, ...props }: Props) {
  const base = 'inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-sm font-medium border transition';
  const styles = variant === 'secondary'
    ? 'bg-zinc-800 border-zinc-700 text-zinc-100 hover:bg-zinc-700'
    : 'bg-white text-zinc-900 border-transparent hover:bg-zinc-200';
  if (asChild) return <span className={`${base} ${styles} ${className}`}>{children}</span>;
  return <button className={`${base} ${styles} ${className}`} {...props}>{children}</button>;
}
