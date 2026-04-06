"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ShinyButton } from "./shiny-button";
import { Send, Phone, Mail, User, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContactFormProps {
  className?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ className }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center p-12 text-center bg-white/80 backdrop-blur-xl border border-primary/10 rounded-3xl shadow-2xl space-y-4"
      >
        <div className="bg-green-100 p-4 rounded-full">
          <Send className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-primary">Message Sent Successfully!</h3>
        <p className="text-foreground/70">Thank you for reaching out. We will respond ASAP.</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="text-primary font-semibold hover:underline"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "w-full max-w-2xl mx-auto p-8 sm:p-12 bg-white/90 backdrop-blur-2xl border border-primary/20 rounded-[2rem] shadow-2xl relative overflow-hidden",
        className
      )}
    >
      {/* Decorative gradient blur */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-cta/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight mb-4">
          Contact Support
        </h2>
        <p className="text-foreground/70 text-lg">
          Have a question or need assistance? Fill out the form below. <span className="font-semibold block sm:inline mt-2 sm:mt-0 text-cta">We will respond ASAP.</span>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-bold text-primary/80 ml-1">Name</label>
            <div className="relative group">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/40 group-focus-within:text-cta transition-colors" />
              <input
                id="name"
                type="text"
                required
                placeholder="Full Nurse Name"
                className="w-full pl-12 pr-4 py-4 bg-primary/5 border border-primary/10 rounded-2xl focus:ring-4 focus:ring-cta/10 focus:border-cta outline-none transition-all placeholder:text-primary/30"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-bold text-primary/80 ml-1">Email</label>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/40 group-focus-within:text-cta transition-colors" />
              <input
                id="email"
                type="email"
                required
                placeholder="email@example.com"
                className="w-full pl-12 pr-4 py-4 bg-primary/5 border border-primary/10 rounded-2xl focus:ring-4 focus:ring-cta/10 focus:border-cta outline-none transition-all placeholder:text-primary/30"
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-bold text-primary/80 ml-1">Phone Number</label>
          <div className="relative group">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/40 group-focus-within:text-cta transition-colors" />
            <input
              id="phone"
              type="tel"
              required
              placeholder="+1 (555) 000-0000"
              className="w-full pl-12 pr-4 py-4 bg-primary/5 border border-primary/10 rounded-2xl focus:ring-4 focus:ring-cta/10 focus:border-cta outline-none transition-all placeholder:text-primary/30"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-bold text-primary/80 ml-1">Request</label>
          <div className="relative group">
            <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-primary/40 group-focus-within:text-cta transition-colors" />
            <textarea
              id="message"
              required
              rows={4}
              placeholder="How can we help you today?"
              className="w-full pl-12 pr-4 py-4 bg-primary/5 border border-primary/10 rounded-2xl focus:ring-4 focus:ring-cta/10 focus:border-cta outline-none transition-all placeholder:text-primary/30 resize-none"
            />
          </div>
        </div>

        <ShinyButton
          type="submit"
          disabled={isSubmitting}
          className="w-full py-5 text-lg font-extrabold text-white bg-cta hover:bg-cta/90 shadow-xl shadow-cta/20"
        >
          {isSubmitting ? "Sending..." : "Submit Support Request"}
        </ShinyButton>
      </form>
    </motion.div>
  );
};
