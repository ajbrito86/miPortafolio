import type { HTMLAttributes, PropsWithChildren } from "react";
import { cn } from "../../lib/utils";

type CardProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>;

export function Card({ className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-white/10 bg-white/[0.045] p-5 shadow-sm backdrop-blur transition duration-200 hover:border-accent-cyan/40 hover:bg-white/[0.07]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
