import React from "react";
import { Slot } from "@radix-ui/react-slot";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "noShadow" | "neutral" | "reverse" | "nav";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    // Define Tailwind classes for variants
    const variantClasses = {
        default: "bg-[#d4b548] text-white hover:bg-yellow-600",
        noShadow: "bg-[#d4b548] text-white",
        neutral: "bg-gray-200 text-gray-800 hover:bg-gray-300",
        reverse: "bg-white text-[#d4b548] border border-[#d4b548] hover:bg-yellow-100",
        nav: "bg-transparent text-gray-800 hover:text-[#d4b548]",
        backgroundColor: "#014C69",
      };

    // Define Tailwind classes for sizes
    const sizeClasses = {
      default: "px-4 py-2 text-sm",
      sm: "px-3 py-1 text-xs",
      lg: "px-6 py-3 text-lg",
      icon: "p-2",
    };

    return (
      <Comp
        className={`inline-flex items-center justify-center rounded ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };