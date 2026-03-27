import React, { useEffect } from "react";

import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import AnimatedContent from "@/components/ui/AnimatedContent";
import ShinyText from "@/components/ui/ShinyText";
import Spotlight from "@/components/ui/Spotlight";
import TextGenerateEffect from "@/components/ui/TextGenerateEffect";

const AboutUs = () => {
  useEffect(() => {
    document.title = "PrimeProX | About Us";
  }, []);

  const technologies = [
    { icon: "mdi:brain", title: "Artificial Intelligence" },
    { icon: "mdi:chart-timeline-variant", title: "Machine Learning Algorithms" },
    { icon: "mdi:flash", title: "Real-Time Market Data Processing" },
    { icon: "mdi:robot", title: "Automated Trading Execution" },
    { icon: "mdi:shield-check", title: "Intelligent Risk Management Systems" },
  ];

  const markets = [
    { icon: "mdi:currency-usd", name: "Forex (Foreign Exchange)" },
    { icon: "mdi:bitcoin", name: "Cryptocurrencies" },
    { icon: "mdi:gold", name: "Gold and Commodities" },
    { icon: "mdi:chart-box", name: "Global Indices" },
  ];

  const platformFeatures = [
    { icon: "mdi:brain", title: "Advanced AI trading technology" },
    { icon: "mdi:clock-fast", title: "Real-time market analysis" },
    { icon: "mdi:robot-industrial", title: "Automated trade execution" },
    { icon: "mdi:earth", title: "Multi-market trading capabilities" },
    { icon: "mdi:account-check", title: "User-friendly platform experience" },
  ];

  const approachFactors = [
    { label: "Economic Indicators", icon: "mdi:chart-bell-curve" },
    { label: "Liquidity Flows", icon: "mdi:water" },
    { label: "Market Sentiment", icon: "mdi:poll" },
    { label: "Technical Patterns", icon: "mdi:chart-line-variant" },
  ];

  const heroStats = [
    { label: "AI Analysis Speed", value: "Milliseconds" },
    { label: "Markets Monitored", value: "24/7" },
    { label: "Data Points Analyzed", value: "Millions/Sec" },
  ];

  return (
    <div className="overflow-hidden bg-bg-main text-text-primary">
      {/* Hero */}
      <section className="relative isolate overflow-hidden py-20 sm:py-24 lg:py-32">
        <Spotlight className="-top-40 left-1/2 -translate-x-1/2" fill="rgba(0, 212, 255, 0.7)" />
        <div className="pointer-events-none absolute inset-0 gradient-mesh" />
        <div className="glow-orb glow-orb-cyan top-10 -right-20 h-72 w-72 md:h-96 md:w-96" />
        <div className="glow-orb glow-orb-blue bottom-10 -left-20 h-72 w-72 md:h-96 md:w-96" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <AnimatedContent
                direction="horizontal"
                distance={100}
                reverse={true}
                config={{ tension: 55, friction: 24 }}
                initialOpacity={0}
              >
                <div>
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-bg-card px-4 py-2">
                    <Icon icon="mdi:information-outline" width={16} height={16} className="text-primary" />
                    <ShinyText
                      text="About Us"
                      textColor="rgba(0, 212, 255, 0.85)"
                      shineColor="#00D4FF"
                      className="text-xs font-semibold uppercase tracking-[0.22em]"
                    />
                  </div>

                  <div className="max-w-3xl">
                    <TextGenerateEffect
                      words="Powering the Future of AI-Driven Trading"
                      className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
                      duration={0.45}
                      multiColored={true}
                      animated={true}
                    />
                  </div>

                  <p className="mt-6 max-w-3xl text-base leading-8 text-text-muted md:text-lg">
                    Our platform was created with a clear vision — to bring the power of advanced artificial
                    intelligence into modern financial trading.
                  </p>

                  <p className="mt-4 max-w-3xl text-base leading-8 text-text-muted">
                    Financial markets move extremely fast, and traditional trading methods often struggle to keep up
                    with the speed and complexity of global market movements. By combining advanced technology with
                    intelligent automation, our platform offers a smarter and more efficient way to participate in
                    financial markets.
                  </p>

                  <p className="mt-4 max-w-3xl text-base leading-8 text-text-muted">
                    Our AI trading systems are designed to analyze large volumes of market data, detect patterns, and
                    execute trades with speed and precision.
                  </p>
                </div>
              </AnimatedContent>
            </div>

            <div className="lg:col-span-5">
              <AnimatedContent
                direction="horizontal"
                distance={100}
                reverse={false}
                config={{ tension: 55, friction: 24 }}
              >
                <div className="relative overflow-hidden rounded-4xl border border-primary/20 bg-linear-to-br from-bg-card via-bg-elevated to-bg-card p-6 glow-cyan">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,212,255,0.14),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.12),transparent_30%)]" />

                  <div className="relative z-10">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-primary/10">
                      <Icon icon="mdi:brain" width={34} height={34} className="text-primary" />
                    </div>

                    <div className="space-y-4">
                      {heroStats.map((stat, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between rounded-2xl border border-border bg-bg-main/50 p-4"
                        >
                          <span className="text-sm text-text-muted">{stat.label}</span>
                          <span className="text-lg font-bold text-primary">{stat.value}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3 text-sm text-text-muted">
                      <span className="rounded-full border border-border bg-bg-card px-4 py-2">Smart Analysis</span>
                      <span className="rounded-full border border-border bg-bg-card px-4 py-2">Fast Execution</span>
                      <span className="rounded-full border border-border bg-bg-card px-4 py-2">
                        Market Intelligence
                      </span>
                    </div>
                  </div>
                </div>
              </AnimatedContent>
            </div>
          </div>
        </div>
      </section>

      {/* Mission + Vision */}
      <section className="bg-bg-card py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <AnimatedContent
              direction="horizontal"
              distance={100}
              reverse={true}
              config={{ tension: 55, friction: 24 }}
            >
              <div className="rounded-4xl border border-primary/20 bg-linear-to-br from-bg-elevated to-bg-card p-8 glow-cyan lg:h-full">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                  <Icon icon="mdi:target" width={24} height={24} className="text-primary" />
                </div>

                <ShinyText
                  text="Our Mission"
                  textColor="rgba(0, 212, 255, 0.85)"
                  shineColor="#00D4FF"
                  className="text-xs font-semibold uppercase tracking-[0.24em]"
                />

                <h3 className="mt-3 text-2xl">Making Intelligent Trading Accessible</h3>

                <p className="mt-4 text-base leading-8 text-text-muted">
                  Our mission is to simplify trading through powerful technology that allows both beginners and
                  experienced traders to benefit from automated market analysis and execution.
                </p>

                <p className="mt-4 text-base leading-8 text-text-muted">
                  We believe that intelligent trading tools should not be limited to large financial institutions.
                  Through our platform, users gain access to sophisticated AI systems designed to analyze markets and
                  identify trading opportunities efficiently.
                </p>
              </div>
            </AnimatedContent>

            <AnimatedContent
              direction="horizontal"
              distance={100}
              reverse={false}
              config={{ tension: 55, friction: 24 }}
            >
              <div className="rounded-4xl border border-border bg-linear-to-br from-bg-elevated to-bg-card p-8 lg:h-full">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                  <Icon icon="mdi:telescope" width={24} height={24} className="text-primary" />
                </div>

                <ShinyText
                  text="Our Vision"
                  textColor="rgba(0, 212, 255, 0.85)"
                  shineColor="#00D4FF"
                  className="text-xs font-semibold uppercase tracking-[0.24em]"
                />

                <h3 className="mt-3 text-2xl">Building the Next Generation of Trading Technology</h3>

                <p className="mt-4 text-base leading-8 text-text-muted">
                  Our vision is to continuously improve and expand our AI trading technology to meet the evolving needs
                  of global financial markets.
                </p>

                <p className="mt-4 text-base leading-8 text-text-muted">
                  As artificial intelligence continues to transform industries worldwide, automated trading solutions
                  will play an increasingly important role in the future of financial markets. Our goal is to remain at
                  the forefront of this technological evolution by developing intelligent trading systems designed for
                  the modern trader.
                </p>
              </div>
            </AnimatedContent>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="glow-orb glow-orb-blue top-1/2 left-1/4 h-72 w-72 -translate-x-1/2 -translate-y-1/2" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedContent direction="horizontal" distance={100} reverse={true} config={{ tension: 55, friction: 24 }}>
            <div>
              <div className="mb-12 text-center">
                <ShinyText
                  text="Our Technology"
                  textColor="rgba(0, 212, 255, 0.85)"
                  shineColor="#00D4FF"
                  className="text-xs font-semibold uppercase tracking-[0.24em]"
                />
                <h2 className="mt-3">Built with Advanced Artificial Intelligence</h2>
                <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-text-muted">
                  Our trading infrastructure integrates several layers of advanced technology working together to
                  continuously monitor market conditions, evaluate trading opportunities, and execute strategies
                  efficiently.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="group rounded-4xl border border-border bg-bg-card p-6 text-center transition-smooth hover:border-primary/35 hover:glow-cyan"
                  >
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-primary to-secondary transition-smooth group-hover:scale-105">
                      <Icon icon={tech.icon} width={28} height={28} />
                    </div>
                    <h4 className="text-sm font-semibold leading-6 text-text-primary">{tech.title}</h4>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedContent>
        </div>
      </section>

      {/* Market Access */}
      <section className="bg-bg-card py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedContent direction="horizontal" distance={100} reverse={false} config={{ tension: 55, friction: 24 }}>
            <div>
              <div className="mb-12 text-center">
                <ShinyText
                  text="Global Market Access"
                  textColor="rgba(0, 212, 255, 0.85)"
                  shineColor="#00D4FF"
                  className="text-xs font-semibold uppercase tracking-[0.24em]"
                />
                <h2 className="mt-3">Trade Multiple Markets with One Platform</h2>
                <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-text-muted">
                  Our AI systems are designed to analyze and trade across multiple financial markets. This multi-market
                  capability allows the AI to identify opportunities across different asset classes and adapt to
                  changing market conditions.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {markets.map((market, index) => (
                  <div
                    key={index}
                    className="rounded-4xl border border-border bg-linear-to-br from-bg-elevated to-bg-main p-6 transition-smooth hover:border-primary/35 hover:glow-cyan"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                      <Icon icon={market.icon} width={24} height={24} className="text-primary" />
                    </div>
                    <h4 className="text-base font-semibold leading-7 text-text-primary">{market.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedContent>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
          <div className="lg:col-span-6">
            <AnimatedContent
              direction="horizontal"
              distance={100}
              reverse={true}
              config={{ tension: 55, friction: 24 }}
            >
              <div>
                <ShinyText
                  text="Our Approach"
                  textColor="rgba(0, 212, 255, 0.85)"
                  shineColor="#00D4FF"
                  className="text-xs font-semibold uppercase tracking-[0.24em]"
                />
                <h2 className="mt-3">Data-Driven Trading Intelligence</h2>

                <p className="mt-4 text-base leading-8 text-text-muted">
                  Financial markets are influenced by many factors including economic indicators, liquidity flows,
                  market sentiment, and technical patterns.
                </p>

                <p className="mt-4 text-base leading-8 text-text-muted">
                  Our AI trading models analyze these variables in real time to detect patterns and identify
                  high-probability trading opportunities. By leveraging advanced data analysis, the system improves
                  trading efficiency and responsiveness to changing market conditions.
                </p>
              </div>
            </AnimatedContent>
          </div>

          <div className="lg:col-span-6">
            <AnimatedContent
              direction="horizontal"
              distance={100}
              reverse={false}
              config={{ tension: 55, friction: 24 }}
            >
              <div className="rounded-4xl border border-primary/20 bg-linear-to-br from-bg-card to-bg-elevated p-6 sm:p-8 glow-cyan">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {approachFactors.map((item, index) => (
                    <div key={index} className="rounded-2xl border border-border bg-bg-main/60 p-4 text-center">
                      <Icon icon={item.icon} width={32} height={32} className="mx-auto mb-3 text-primary" />
                      <p className="text-xs leading-6 text-text-muted">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedContent>
          </div>
        </div>
      </section>

      {/* Why Our Platform */}
      <section className="bg-bg-card py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedContent direction="horizontal" distance={100} reverse={true} config={{ tension: 55, friction: 24 }}>
            <div className="rounded-4xl border border-primary/30 bg-linear-to-br from-bg-elevated to-bg-card p-8 lg:p-12">
              <div className="mb-10 text-center">
                <ShinyText
                  text="Why Our Platform"
                  textColor="rgba(0, 212, 255, 0.85)"
                  shineColor="#00D4FF"
                  className="text-xs font-semibold uppercase tracking-[0.24em]"
                />
                <h2 className="mt-3">A Smarter Way to Engage with the Markets</h2>
                <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-text-muted">
                  Our platform is designed to provide traders with intelligent tools that simplify the trading process
                  while maintaining efficiency and precision.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                {platformFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="rounded-3xl border border-border bg-bg-main/45 p-5 transition-smooth hover:border-primary/35"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                        <Icon icon={feature.icon} width={20} height={20} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold leading-6 text-text-primary">{feature.title}</h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedContent>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="glow-orb glow-orb-cyan top-1/2 right-0 h-72 w-72 translate-x-1/2 -translate-y-1/2 md:h-96 md:w-96" />

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <AnimatedContent direction="horizontal" distance={100} reverse={false} config={{ tension: 55, friction: 24 }}>
            <div className="relative z-10 rounded-4xl border border-primary/30 bg-linear-to-br from-primary/10 via-bg-elevated to-secondary/10 p-8 text-center glow-cyan-lg lg:p-12">
              <ShinyText
                text="Start with PrimeProX"
                textColor="rgba(0, 212, 255, 0.85)"
                shineColor="#00D4FF"
                className="text-xs font-semibold uppercase tracking-[0.24em]"
              />

              <div className="mx-auto max-w-3xl">
                <TextGenerateEffect
                  words="Ready to Experience Intelligent Trading?"
                  className="text-3xl font-bold leading-tight sm:text-4xl"
                  duration={0.4}
                  multiColored={true}
                  animated={false}
                />
              </div>

              <p className="mx-auto mt-4 max-w-3xl text-lg text-text-muted">
                Join thousands of traders who are using AI-powered technology to enhance their trading experience.
              </p>

              <div className="mt-8 flex justify-center">
                <Button
                  className="px-8 py-3"
                  onClick={() => window.open("https://portal.primeprox.com/register", "_blank")}
                >
                  Get Started Now
                </Button>
              </div>
            </div>
          </AnimatedContent>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
