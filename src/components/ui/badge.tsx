import React from 'react'

export function Badge({ className = '', children, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-xl text-xs border border-zinc-700 text-zinc-200 ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
