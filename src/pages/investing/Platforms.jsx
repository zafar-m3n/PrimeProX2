import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import AnimatedContent from "@/components/ui/AnimatedContent";
import ShinyText from "@/components/ui/ShinyText";
import Spotlight from "@/components/ui/Spotlight";
import TextGenerateEffect from "@/components/ui/TextGenerateEffect";

const Platforms = () => {
  useEffect(() => {
    document.title = "PrimeProX | Investing";
  }, []);

  const platforms = [
    {
      name: "MetaTrader 5 Desktop",
      description:
        "Discover endless trading opportunities with MetaTrader 5 Desktop. Designed for serious traders, it provides real-time market access, robust charting tools, and algorithmic trading capabilities. Execute trades seamlessly while managing diverse financial instruments from a single platform. Perfect for traders looking to harness professional-grade tools for maximum precision.",
      features: [
        "Real-time market data",
        "Comprehensive charting tools",
        "Algorithmic trading support",
        "Access to trading robots and indicators",
      ],
      image: "https://picsum.photos/1200/900?random=401",
      badge: "Desktop Platform",
      ctaType: "download",
    },
    {
      name: "MetaTrader 5 Mobile",
      description:
        "Stay ahead of the market wherever you are with MetaTrader 5 Mobile. This platform empowers traders with advanced tools for analysis, real-time market updates, and secure trade execution, all from your smartphone. Enjoy flexibility and control over your portfolio, whether at home or on the move.",
      features: [
        "On-the-go trading",
        "Advanced charting tools",
        "Real-time notifications",
        "Available for Android & iOS",
      ],
      image: "https://picsum.photos/1200/900?random=402",
      badge: "Mobile Platform",
      ctaType: "store",
    },
    {
      name: "WebTrader",
      description:
        "Experience the convenience of trading without downloads or installations with our WebTrader. Access powerful tools, analyze market trends, and execute trades securely—all directly from your browser. WebTrader is perfect for traders who value simplicity and accessibility.",
      features: [
        "Browser-based trading",
        "No installations required",
        "Advanced analysis tools",
        "Secure execution capabilities",
      ],
      image: "https://picsum.photos/1200/900?random=403",
      badge: "Browser Platform",
      ctaType: "web",
    },
  ];

  const platformStats = [
    { label: "Trading Modes", value: "Desktop · Mobile · Web" },
    { label: "Access Style", value: "Flexible" },
    { label: "Experience", value: "Cross-Platform" },
  ];

  const handleDownloadMT5 = () => {
    const link = document.createElement("a");
    link.href = "/assets/mt5setup.exe.zip";
    link.download = "mt5setup.zip";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="overflow-hidden bg-bg-main text-text-primary">
      {/* Hero */}
      <section className="relative isolate overflow-hidden py-20 sm:py-24 lg:py-32">
        <Spotlight className="-top-40 left-1/2 -translate-x-1/2" fill="rgba(0, 212, 255, 0.7)" />
        <div className="pointer-events-none absolute inset-0 gradient-mesh" />
        <div className="glow-orb glow-orb-cyan -top-20 right-0 h-72 w-72 md:h-96 md:w-96" />
        <div className="glow-orb glow-orb-blue bottom-0 left-0 h-72 w-72 md:h-96 md:w-96" />

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
                    <Icon icon="mdi:monitor-dashboard" width={16} height={16} className="text-primary" />
                    <ShinyText
                      text="Platforms"
                      textColor="rgba(0, 212, 255, 0.85)"
                      shineColor="#00D4FF"
                      className="text-xs font-semibold uppercase tracking-[0.22em]"
                    />
                  </div>

                  <div className="max-w-3xl">
                    <TextGenerateEffect
                      words="Trade Across Desktop, Mobile, and Web"
                      className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
                      duration={0.45}
                      multiColored={true}
                      animated={true}
                    />
                  </div>

                  <p className="mt-6 max-w-3xl text-base leading-8 text-text-muted md:text-lg">
                    Explore PrimeProX trading platforms designed to give you broader market access, stronger trading
                    flexibility, and a cleaner experience across devices.
                  </p>

                  <p className="mt-4 max-w-3xl text-base leading-8 text-text-muted">
                    Whether you prefer the power of desktop tools, the convenience of mobile access, or the simplicity
                    of browser-based trading, PrimeProX gives you multiple ways to stay connected to the markets.
                  </p>

                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <Link to="/investing/account-types">
                      <Button className="px-8 py-3">View Account Types</Button>
                    </Link>
                    <Link to="/quantum-ai">
                      <Button variant="outline" className="px-8 py-3">
                        Explore Quantum AI
                      </Button>
                    </Link>
                  </div>

                  <div className="mt-10 flex flex-wrap gap-3 text-sm text-text-muted">
                    <span className="rounded-full border border-border bg-bg-card px-4 py-2">MetaTrader 5</span>
                    <span className="rounded-full border border-border bg-bg-card px-4 py-2">Mobile Access</span>
                    <span className="rounded-full border border-border bg-bg-card px-4 py-2">WebTrader</span>
                  </div>
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
                <div className="space-y-6">
                  <div className="gradient-border relative overflow-hidden rounded-4xl p-3">
                    <img
                      src="https://picsum.photos/1200/900?random=404"
                      alt="PrimeProX platforms"
                      className="h-80 w-full rounded-3xl object-cover sm:h-112"
                    />
                    <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-primary/20 bg-bg-main/85 p-5 backdrop-blur-md">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Platform access</p>
                      <p className="mt-2 text-sm leading-7 text-text-muted">
                        Stay connected to the markets through desktop tools, mobile convenience, and browser-based
                        access.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    {platformStats.map((stat, index) => (
                      <div
                        key={index}
                        className="rounded-3xl border border-border bg-linear-to-br from-bg-card to-bg-elevated p-5 text-center transition-smooth hover:border-primary/30"
                      >
                        <p className="text-xs uppercase tracking-[0.18em] text-text-dimmed">{stat.label}</p>
                        <p className="mt-3 text-sm font-semibold text-primary">{stat.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedContent>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Sections */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
          {platforms.map((platform, index) => {
            const isReverse = index % 2 === 0;

            return (
              <AnimatedContent
                key={platform.name}
                distance={100}
                direction="horizontal"
                reverse={isReverse}
                config={{ tension: 50, friction: 25 }}
                initialOpacity={0}
              >
                <section className="relative">
                  <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
                    <div className={`lg:col-span-6 ${isReverse ? "lg:order-1" : "lg:order-2"}`}>
                      <div>
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-bg-card px-4 py-2">
                          <Icon icon="mdi:laptop" width={16} height={16} className="text-primary" />
                          <ShinyText
                            text={platform.badge}
                            textColor="rgba(0, 212, 255, 0.85)"
                            shineColor="#00D4FF"
                            className="text-xs font-semibold uppercase tracking-[0.22em]"
                          />
                        </div>

                        <h2 className="text-glow">{platform.name}</h2>

                        <p className="mt-5 text-base leading-8 text-text-muted">{platform.description}</p>

                        <div className="mt-8 rounded-4xl border border-border bg-linear-to-br from-bg-card to-bg-elevated p-6">
                          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-text-dimmed">
                            Features
                          </p>

                          <ul className="space-y-4">
                            {platform.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start gap-3">
                                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                                  <Icon icon="mdi:check" width={16} height={16} className="text-primary" />
                                </div>
                                <p className="text-sm leading-7 text-text-muted">{feature}</p>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                          {index === 0 && (
                            <Button onClick={handleDownloadMT5} className="px-8 py-3">
                              <span className="inline-flex items-center gap-2">
                                <span>Download MT5 Setup</span>
                                <Icon icon="heroicons:arrow-down-tray" width={16} height={16} />
                              </span>
                            </Button>
                          )}

                          {index === 1 && (
                            <Button className="px-8 py-3">
                              <span className="inline-flex items-center gap-2">
                                <span>Download Mobile App</span>
                                <Icon icon="heroicons:device-phone-mobile" width={16} height={16} />
                              </span>
                            </Button>
                          )}

                          {index === 2 && (
                            <Button className="px-8 py-3">
                              <span className="inline-flex items-center gap-2">
                                <span>Launch WebTrader</span>
                                <Icon icon="mdi:open-in-new" width={16} height={16} />
                              </span>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className={`lg:col-span-6 ${isReverse ? "lg:order-2" : "lg:order-1"}`}>
                      <div className="gradient-border relative overflow-hidden rounded-4xl p-3">
                        <img
                          src={platform.image}
                          alt={platform.name}
                          className="h-80 w-full rounded-3xl object-cover sm:h-112"
                        />

                        <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-primary/20 bg-bg-main/85 p-5 backdrop-blur-md">
                          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                            Platform experience
                          </p>
                          <p className="mt-2 text-sm leading-7 text-text-muted">
                            Trade through {platform.name} with a more flexible and modern market access experience.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </AnimatedContent>
            );
          })}
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
                  words="Choose the Platform That Fits Your Trading Style"
                  className="text-3xl font-bold leading-tight sm:text-4xl"
                  duration={0.4}
                  multiColored={true}
                  animated={false}
                />
              </div>

              <p className="mx-auto mt-4 max-w-3xl text-lg text-text-muted">
                Access the markets through desktop precision, mobile flexibility, or browser-based convenience with
                PrimeProX trading platforms.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Link to="/investing/account-types">
                  <Button className="px-8 py-3">View Account Types</Button>
                </Link>

                <Link to="/quantum-ai">
                  <Button variant="outline" className="px-8 py-3">
                    Explore Quantum AI
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

export default Platforms;
