import { HTMLAttributes, forwardRef } from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glass" | "neon" | "gradient";
  hover?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className = "", variant = "default", hover = true, children, ...props }, ref) => {
    const baseClasses = "rounded-xl border transition-all duration-300";
    
    const variants = {
      default: "bg-gray-900/50 border-gray-700/50 backdrop-blur-sm",
      glass: "bg-black/20 border-gray-700/30 backdrop-blur-md",
      neon: "bg-gray-900/30 border-cyan-500/30 backdrop-blur-sm shadow-lg shadow-cyan-500/10",
      gradient: "bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-700/50 backdrop-blur-sm"
    };

    const hoverClasses = hover ? "hover:scale-105 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10" : "";

    const classes = `${baseClasses} ${variants[variant]} ${hoverClasses} ${className}`;

    return (
      <div
        className={classes}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export default Card;
