import type { AnchorHTMLAttributes, PropsWithChildren } from "react";
import { cn } from "../../lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps extends PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>> {
  variant?: ButtonVariant;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent-cyan text-surface-900 shadow-glow hover:bg-white focus-visible:outline-accent-cyan",
  secondary:
    "border border-white/15 bg-white/8 text-white hover:border-accent-emerald/60 hover:bg-accent-emerald/10 focus-visible:outline-accent-emerald",
  ghost:
    "text-slate-200 hover:bg-white/10 focus-visible:outline-white",
};

export function Button({ className, variant = "primary", children, ...props }: ButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
