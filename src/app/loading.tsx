import React from "react";

export default function Loading() {
  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center bg-[#101018] px-4">
      <div className="relative w-14 h-14 flex items-center justify-center mb-4">
        <div className="absolute inset-0 rounded-full border-2 border-[#30303B]" />
        <div className="absolute inset-0 rounded-full border-2 border-t-[#7657FF] border-r-[#21B8E8] border-b-transparent border-l-transparent animate-spin" />
        <span className="w-2 h-2 rounded-full bg-[#21B8E8]" />
      </div>
      <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#A5A5B5]">
        TecAura // LOADING
      </div>
    </div>
  );
}

