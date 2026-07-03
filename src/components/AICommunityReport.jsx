import React from "react";

import AnimatedContent from "@/components/ui/AnimatedContent";
import aiJuneReport from "@/assets/aiJuneReport.jpeg";

function AICommunityReport() {
  return (
    <section className="relative overflow-hidden bg-bg-main py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 gradient-mesh" />
      <div className="glow-orb glow-orb-cyan -top-24 right-0 h-72 w-72 md:h-96 md:w-96" />
      <div className="glow-orb glow-orb-blue bottom-0 left-0 h-72 w-72 md:h-96 md:w-96" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <AnimatedContent
          direction="vertical"
          distance={100}
          reverse={false}
          config={{ tension: 55, friction: 24 }}
          initialOpacity={0}
        >
          <div className="overflow-hidden rounded-4xl border border-primary/25 bg-bg-card p-3 shadow-[0_0_70px_rgba(0,212,255,0.10)] sm:p-4">
            <img
              src={aiJuneReport}
              alt="June 2026 AI Community Report"
              className="h-auto w-full rounded-3xl object-cover"
              loading="lazy"
            />
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}

export default AICommunityReport;
