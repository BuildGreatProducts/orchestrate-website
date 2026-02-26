import { cn } from "@/lib/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "ghost";
  size?: "default" | "sm";
}

export function Button({
  children,
  href,
  variant = "primary",
  size = "default",
  className,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full font-normal transition-colors",
    variant === "primary" &&
      "bg-white text-[#141414] hover:bg-white/90",
    variant === "ghost" &&
      "text-muted hover:text-white",
    size === "default" && "h-10 px-8 text-base",
    size === "sm" && "h-[29px] px-4 text-sm",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    className,
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
