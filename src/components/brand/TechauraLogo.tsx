import React from "react";
import { cn } from "@/lib/utils";

interface TechauraLogoProps {
  className?: string;
  showWordmark?: boolean;
  size?: "sm" | "md" | "lg";
}

export function TechauraLogo({
  className,
  showWordmark = true,
  size = "md",
}: TechauraLogoProps) {
  const textSize = {
    sm: "text-lg tracking-[0.08em]",
    md: "text-2xl tracking-[0.1em]",
    lg: "text-3xl tracking-[0.12em]",
  }[size];

  return (
    <div
      className={cn(
        "inline-flex items-center gap-3 select-none group",
        className
      )}
    >
      {showWordmark && (
        <span
          className={cn(
            "font-heading font-bold text-[#F5F5FA] leading-none transition-all duration-300 group-hover:text-white drop-shadow-[0_0_18px_rgba(33,184,232,0.25)]",
            textSize
          )}
        >
          Tec
          <span className="bg-gradient-to-r from-[#21B8E8] via-[#7657FF] to-[#21B8E8] bg-clip-text text-transparent">
            Aura
          </span>
        </span>
      )}
    </div>
  );
}
