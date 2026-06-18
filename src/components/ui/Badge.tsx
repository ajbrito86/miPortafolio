import type { HTMLAttributes, PropsWithChildren } from "react";
import { cn } from "../../lib/utils";

type BadgeProps = PropsWithChildren<HTMLAttributes<HTMLSpanElement>>;

export function Badge({ className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-white/10 bg-white/8 px-2.5 py-1 text-xs font-medium text-slate-200",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
