"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ items, className }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={cn("w-full max-w-4xl mx-auto space-y-4", className)}>
      {items.map((item, index) => {
        const isOpen = activeIndex === index;
        
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className={cn(
              "overflow-hidden transition-all duration-300 rounded-[1.5rem]",
              isOpen 
                ? "bg-white/90 shadow-xl border border-primary/20 scale-[1.02]" 
                : "bg-white/40 hover:bg-white/60 border border-primary/5 scale-100"
            )}
          >
            <button
              onClick={() => toggleIndex(index)}
              className="w-full flex items-center justify-between p-6 sm:p-7 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-cta/50"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-4">
                <div className={cn(
                  "flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors",
                  isOpen ? "bg-cta/10 text-cta" : "bg-primary/5 text-primary/40"
                )}>
                  <HelpCircle className="w-5 h-5" />
                </div>
                <h3 className={cn(
                  "text-lg sm:text-xl font-bold transition-colors block leading-tight px-1",
                  isOpen ? "text-primary" : "text-primary/70"
                )}>
                  {item.question}
                </h3>
              </div>
              <ChevronDown className={cn(
                "w-6 h-6 text-primary/40 transition-transform duration-300",
                isOpen && "rotate-180 text-cta"
              )} />
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-6 sm:px-7 pb-7 -mt-2">
                    <div className="w-full h-px bg-primary/10 mb-5 ml-14" />
                    <p className="text-foreground/80 text-base sm:text-lg leading-relaxed ml-14">
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
};
