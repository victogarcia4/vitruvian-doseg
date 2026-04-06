// components/ui/gradient-card.tsx

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils"; // Your shadcn/ui utility for merging classes

// Define variants for the card's overall style using cva
const cardVariants = cva(
  "relative flex flex-col justify-between h-full w-full overflow-hidden rounded-2xl p-8 shadow-sm transition-shadow duration-300 hover:shadow-lg",
  {
    variants: {
      gradient: {
        orange: "bg-gradient-to-br from-orange-100 to-amber-200/50",
        gray: "bg-gradient-to-br from-slate-100 to-slate-200/50",
        purple: "bg-gradient-to-br from-purple-100 to-indigo-200/50",
        green: "bg-gradient-to-br from-emerald-100 to-teal-200/50",
      },
    },
    defaultVariants: {
      gradient: "gray",
    },
  }
);

// Define the props interface for type safety and reusability
export interface GradientCardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {
  badgeText: string;
  badgeColor: string; // Expecting a hex color string, e.g., "#FF5733"
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  imageUrl: string;
}

const GradientCard = React.forwardRef<HTMLDivElement, GradientCardProps>(
  ({ className, gradient, badgeText, badgeColor, title, description, ctaText, ctaHref, imageUrl, ...props }, ref) => {
    
    // Animation variants for framer-motion
    const cardAnimation = {
      rest: { scale: 1, y: 0 },
      hover: { scale: 1.03, y: -4 },
    };

    const imageAnimation = {
      rest: { scale: 1, rotate: 0 },
      hover: { scale: 1.1, rotate: 3 },
    };

    return (
      <motion.div
        variants={cardAnimation}
        initial="rest"
        whileHover="hover"
        animate="rest"
        className="h-full"
        ref={ref}
      >
        <div
          className={cn(cardVariants({ gradient }), "grid grid-cols-1 md:grid-cols-[1.2fr_1fr] p-0 overflow-hidden", className)}
          {...props}
        >
          {/* Card Content */}
          <div className="z-20 flex flex-col h-full p-8 pr-4">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/40 dark:bg-black/20 px-3 py-1.5 text-xs font-bold text-foreground backdrop-blur-md w-fit ring-1 ring-black/5">
              <span 
                className="h-2.5 w-2.5 rounded-full shadow-[0_0_8px_currentColor]" 
                style={{ backgroundColor: badgeColor, color: badgeColor }}
              />
              {badgeText}
            </div>

            {/* Title and Description */}
            <div className="flex-grow">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-3 leading-tight tracking-tight">{title}</h3>
              <p className="text-foreground/80 text-base sm:text-lg leading-relaxed">{description}</p>
            </div>
            
            {/* Call to Action Link */}
            <a
              href={ctaHref}
              className="group mt-8 inline-flex items-center gap-2 text-sm font-bold text-foreground hover:text-primary transition-colors"
            >
              {ctaText}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
            </a>
          </div>

          {/* Descriptive Image Frame */}
          <div className="relative h-48 md:h-full overflow-hidden border-l border-black/5 bg-black/5">
            <motion.img
              src={imageUrl}
              alt={`${title} background graphic`}
              variants={imageAnimation}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="absolute inset-0 w-full h-full object-cover opacity-90 mix-blend-multiply dark:mix-blend-normal dark:opacity-40"
            />
          </div>
        </div>
      </motion.div>
    );
  }
);
GradientCard.displayName = "GradientCard";

export { GradientCard, cardVariants };
