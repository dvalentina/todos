import React from 'react';

interface Props {
  className?: string;
  checked?: boolean;
  children?: React.ReactNode;
}

export function Text({ className, children }: Props) {
  return <span className={className}>{children}</span>;
}
