import type { ReactNode } from "react";

type Variant = "primary" | "ghost" | "white" | "outline-light";
type Size = "md" | "lg";

interface CTAButtonProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  className?: string;
  /** open in a new tab (external link) */
  external?: boolean;
}

const variantClass: Record<Variant, string> = {
  primary: "btn-primary",
  ghost: "btn-ghost",
  white: "btn-white",
  "outline-light": "btn-outline-light",
};

export default function CTAButton({
  href,
  children,
  variant = "primary",
  size = "md",
  icon,
  className = "",
  external = false,
}: CTAButtonProps) {
  const externalProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <a
      href={href}
      {...externalProps}
      className={`btn ${size === "lg" ? "btn-lg" : "btn-md"} ${variantClass[variant]} ${className}`}
    >
      {children}
      {icon}
    </a>
  );
}
