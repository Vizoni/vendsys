import * as React from 'react';

import { cn } from '@/lib/utils';

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot='textarea'
      className={cn(
        'border-input placeholder:text-muted-foreground dark:bg-input/30 flex field-sizing-content min-h-16 w-full border-0 border-b bg-transparent px-0 py-2 text-body-sm shadow-none transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50',
        'focus-visible:border-b-2 focus-visible:border-ring focus-visible:outline-none',
        'aria-invalid:border-b-2 aria-invalid:border-destructive dark:aria-invalid:border-destructive',
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
