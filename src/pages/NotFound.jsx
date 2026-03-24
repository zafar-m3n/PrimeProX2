import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import AnimatedContent from "@/components/ui/AnimatedContent";
import ShinyText from "@/components/ui/ShinyText";
import Spotlight from "@/components/ui/Spotlight";
import TextGenerateEffect from "@/components/ui/TextGenerateEffect";

const NotFound = () => {
  useEffect(() => {
    document.title = "PrimeProX | 404";
  }, []);

  return (
    <div className="relative overflow-hidden bg-bg-main text-text-primary">
      <section className="relative isolate flex min-h-[calc(100vh-140px)] items-center overflow-hidden py-20 sm:py-24 lg:py-28">
        {/* Background effects */}
        <Spotlight className="-top-32 left-1/2 -translate-x-1/2" fill="rgba(0, 212, 255, 0.7)" />
        <div className="pointer-events-none absolute inset-0 gradient-mesh" />
        <div className="glow-orb glow-orb-cyan -top-16 right-0 h-72 w-72 md:h-96 md:w-96" />
        <div className="glow-orb glow-orb-blue bottom-0 left-0 h-72 w-72 md:h-96 md:w-96" />

        {/* BIG background icon */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <Icon
            icon="mdi:alert-circle"
            className="h-75 w-75 sm:h-105 sm:w-105 lg:h-130 lg:w-130 text-primary/5 blur-sm"
          />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <AnimatedContent
            direction="vertical"
            distance={100}
            reverse={false}
            config={{ tension: 60, friction: 22 }}
            initialOpacity={0}
          >
            <div className="mx-auto max-w-4xl text-center">
              {/* Eyebrow */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-bg-card px-4 py-2">
                <Icon icon="mdi:alert-circle-outline" width={16} height={16} className="text-primary" />
                <ShinyText
                  text="404 Error"
                  textColor="rgba(0, 212, 255, 0.85)"
                  shineColor="#00D4FF"
                  className="text-xs font-semibold uppercase tracking-[0.22em]"
                />
              </div>

              {/* Heading */}
              <div className="mx-auto max-w-3xl">
                <TextGenerateEffect
                  words="Page Not Found"
                  className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
                  duration={0.45}
                  multiColored={true}
                  animated={true}
                />
              </div>

              {/* Description */}
              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-text-muted md:text-lg">
                The page you’re trying to access does not exist, may have been moved, or is currently unavailable. Let’s
                get you back to a working section of PrimeProX.
              </p>

              {/* Pills */}
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-sm text-text-muted">
                <span className="rounded-full border border-border bg-bg-card px-4 py-2">Secure Navigation</span>
                <span className="rounded-full border border-border bg-bg-card px-4 py-2">Trading Resources</span>
                <span className="rounded-full border border-border bg-bg-card px-4 py-2">Quick Route Back</span>
              </div>

              {/* CTAs */}
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link to="/">
                  <Button className="w-full px-8 py-3 sm:w-auto">Back to Home</Button>
                </Link>

                <Link to="/markets">
                  <Button variant="outline" className="w-full px-8 py-3 sm:w-auto">
                    Explore Markets
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedContent>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
