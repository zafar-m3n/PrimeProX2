import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import AnimatedContent from "@/components/ui/AnimatedContent";
import ShinyText from "@/components/ui/ShinyText";
import Spotlight from "@/components/ui/Spotlight";
import TextGenerateEffect from "@/components/ui/TextGenerateEffect";

const MarketsPage = () => {
  useEffect(() => {
    document.title = "PrimeProX | Markets";
  }, []);

  const marketTabs = [
    {
      id: "stocks",
      label: "Stocks",
      icon: "mdi:chart-line",
      heroLabel: "Stocks",
      title: "Trade Stocks With PrimeProX",
      shiny: "Trade Stocks, Seize Opportunities",
      image: "https://picsum.photos/1200/900?random=101",
      paragraphs: [
        "Select from over 2,500 stock and fractional share CFDs, and trade your preferred companies with no commission fees! Our platform is your gateway to a world of financial opportunities, offering a seamless and user-friendly experience.",
        "Whether you’re a seasoned investor or just starting, our commitment to innovation and customer satisfaction ensures a trading environment that empowers you to navigate the complexities of global markets. Join us today and elevate your stock trading experience with confidence.",
      ],
      stats: [
        { label: "Instruments", value: "2,500+" },
        { label: "Trading Style", value: "Flexible" },
        { label: "Access", value: "Global" },
      ],
      features: [
        "Trade popular global companies",
        "Access stock and fractional share CFDs",
        "Navigate markets with a cleaner experience",
        "Explore opportunities across sectors",
      ],
      instruments: ["Tech Stocks", "Consumer Brands", "Global Leaders", "Growth Shares"],
    },
    {
      id: "forex",
      label: "Forex",
      icon: "mdi:currency-usd",
      heroLabel: "Forex",
      title: "Trade Forex With PrimeProX",
      shiny: "Explore Global Markets, Trade Forex.",
      image: "https://picsum.photos/1200/900?random=102",
      paragraphs: [
        "Get ready with your hat and sunscreen as we embark on a global journey through the realm of forex! Select from over 50 currency pairs, encompassing majors, minors, and exotic options.",
        "Forex is a world of its own, full of techniques and terminologies unique to the market. It’s also the most liquid, meaning there is lots of buying and selling activity happening much of the time. Because it’s so liquid, you can buy and sell easily and instantaneously!",
      ],
      stats: [
        { label: "Pairs", value: "50+" },
        { label: "Market Type", value: "Highly Liquid" },
        { label: "Coverage", value: "Global" },
      ],
      features: [
        "Access majors, minors, and exotic pairs",
        "Trade in one of the world’s most liquid markets",
        "Respond faster to shifting currency movements",
        "Explore forex with AI-supported structure",
      ],
      instruments: ["EUR/USD", "GBP/USD", "USD/JPY", "Exotic Pairs"],
    },
    {
      id: "commodities",
      label: "Commodities",
      icon: "mdi:barrel",
      heroLabel: "Commodities",
      title: "Trade Commodities With PrimeProX",
      shiny: "Trade Commodities, Maximize Returns",
      image: "https://picsum.photos/1200/900?random=103",
      paragraphs: [
        "Welcome to the exciting world of commodities trading with us! As a leading trading platform, we offer you an unparalleled opportunity to engage in the dynamic and diverse realm of commodities markets.",
        "Trade on the world’s most important commodities. Whether it’s key energy products like crude oil, industrial metals like copper and aluminum, or gold and silver, the most enduring stores of value and mediums of exchange.",
        "Trade an increasingly growing list of commodities with PrimeProX today.",
      ],
      stats: [
        { label: "Coverage", value: "Broad" },
        { label: "Categories", value: "Energy + Metals" },
        { label: "Opportunity", value: "Diverse" },
      ],
      features: [
        "Access key global commodity markets",
        "Explore metals, energy, and other major products",
        "Add broader market diversity to trading",
        "Engage with real-economy market movements",
      ],
      instruments: ["Gold", "Silver", "Crude Oil", "Copper"],
    },
    {
      id: "crypto",
      label: "Cryptocurrencies",
      icon: "mdi:bitcoin",
      heroLabel: "Cryptocurrency",
      title: "Trade Cryptocurrency With PrimeProX",
      shiny: "Digital Assets, Trade Confidently",
      image: "https://picsum.photos/1200/900?random=104",
      paragraphs: [
        "Get into the world’s most revolutionary financial market, access the best cryptocurrency to invest in, and start investing in Crypto with PrimeProX – a globally trusted and regulated financial service provider.",
        "Our platform provides seamless access to a diverse range of cryptocurrencies, including established giants like Bitcoin and Ethereum, as well as promising altcoins.",
      ],
      stats: [
        { label: "Market Style", value: "Fast-Moving" },
        { label: "Asset Type", value: "Digital" },
        { label: "Coverage", value: "Major Coins" },
      ],
      features: [
        "Access major cryptocurrencies and altcoins",
        "Engage with digital asset market momentum",
        "Explore a highly dynamic market environment",
        "Trade crypto through a structured platform flow",
      ],
      instruments: ["Bitcoin", "Ethereum", "Major Altcoins", "Digital Pairs"],
    },
    {
      id: "indices",
      label: "Indices",
      icon: "mdi:chart-box",
      heroLabel: "Indices",
      title: "Trade Indices With PrimeProX",
      shiny: "Trade Indices, Capture Markets",
      image: "https://picsum.photos/1200/900?random=105",
      paragraphs: [
        "Welcome to our premier indices trading platform, where the global financial markets come alive at your fingertips.",
        "Our platform provides you with seamless access to a diverse range of indices, including major benchmarks like the S&P 500, Dow Jones, and NASDAQ, as well as international indices representing markets worldwide.",
      ],
      stats: [
        { label: "Coverage", value: "Worldwide" },
        { label: "Benchmarks", value: "Major Indices" },
        { label: "Exposure", value: "Broad Market" },
      ],
      features: [
        "Trade major benchmark indices",
        "Capture wider market sentiment in one position",
        "Access US and international index exposure",
        "Engage with macro market direction more efficiently",
      ],
      instruments: ["S&P 500", "Dow Jones", "NASDAQ", "Global Indices"],
    },
  ];

  const [activeTab, setActiveTab] = useState("stocks");

  const activeMarket = useMemo(() => marketTabs.find((item) => item.id === activeTab) || marketTabs[0], [activeTab]);

  const howItWorksSteps = [
    {
      icon: "mdi:database-search-outline",
      title: "Market Data Monitoring",
      description: "PrimeProX watches live market activity and changing conditions in real time.",
    },
    {
      icon: "mdi:chart-bell-curve-cumulative",
      title: "Pattern and Signal Analysis",
      description: "Advanced logic reviews price behavior, market shifts, and emerging opportunities.",
    },
    {
      icon: "mdi:target-variant",
      title: "Opportunity Evaluation",
      description: "The system filters noise and focuses on setups that align with its programmed logic.",
    },
    {
      icon: "mdi:flash-outline",
      title: "Fast, Structured Execution",
      description: "When conditions are met, execution support happens with more speed and consistency.",
    },
  ];

  const whyPrimeProX = [
    {
      icon: "mdi:brain",
      title: "Advanced AI Trading Technology",
      description: "Sophisticated logic designed to help interpret market conditions more effectively.",
      featured: true,
    },
    {
      icon: "mdi:clock-fast",
      title: "Real-Time Monitoring",
      description: "Continuous observation helps traders stay closer to changing market opportunities.",
    },
    {
      icon: "mdi:earth",
      title: "Multi-Market Access",
      description: "Explore opportunities across forex, crypto, indices, commodities, and more.",
    },
    {
      icon: "mdi:robot-industrial",
      title: "Automated Execution Logic",
      description: "Structured automation helps reduce delays caused by fully manual workflows.",
    },
    {
      icon: "mdi:shield-lock-outline",
      title: "Intelligent Risk Support",
      description: "Designed to support disciplined trading through logic-based decision frameworks.",
      featured: true,
    },
    {
      icon: "mdi:account-check-outline",
      title: "Trader-Focused Experience",
      description: "A cleaner and more intuitive environment built around usability and clarity.",
    },
    {
      icon: "mdi:chart-areaspline",
      title: "Scalable Trading Approach",
      description: "A flexible system structure suited for traders looking to grow with better tools.",
    },
  ];

  return (
    <div className="overflow-hidden bg-bg-main text-text-primary">
      {/* Hero + Tabs */}
      <section className="relative isolate overflow-hidden py-20 sm:py-24 lg:py-28">
        <Spotlight className="-top-40 left-1/2 -translate-x-1/2" fill="rgba(0, 212, 255, 0.7)" />
        <div className="pointer-events-none absolute inset-0 gradient-mesh" />
        <div className="glow-orb glow-orb-cyan -top-20 right-0 h-72 w-72 md:h-96 md:w-96" />
        <div className="glow-orb glow-orb-blue bottom-0 left-0 h-72 w-72 md:h-96 md:w-96" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedContent
            direction="vertical"
            distance={120}
            reverse={false}
            config={{ tension: 60, friction: 22 }}
            initialOpacity={0}
          >
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-bg-card px-4 py-2">
                <Icon icon="mdi:chart-line-variant" width={16} height={16} className="text-primary" />
                <ShinyText
                  text="Markets"
                  textColor="rgba(0, 212, 255, 0.85)"
                  shineColor="#00D4FF"
                  className="text-xs font-semibold uppercase tracking-[0.22em]"
                />
              </div>

              <div className="mx-auto max-w-3xl">
                <TextGenerateEffect
                  words="Explore Global Markets with PrimeProX"
                  className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
                  duration={0.45}
                  multiColored={true}
                  animated={true}
                />
              </div>

              <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-text-muted md:text-lg">
                Access multiple market categories through a cleaner, more modern trading experience built around
                structure, visibility, and AI-supported market engagement.
              </p>
            </div>
          </AnimatedContent>

          <AnimatedContent direction="horizontal" distance={100} reverse={false} config={{ tension: 55, friction: 24 }}>
            <div className="mt-12">
              <div className="overflow-x-auto pb-2">
                <div className="inline-flex justify-center min-w-full gap-3 rounded-3xl border border-border bg-bg-card/80 p-2 backdrop-blur-md">
                  {marketTabs.map((tab) => {
                    const isActive = activeTab === tab.id;

                    return (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-medium whitespace-nowrap transition-smooth ${
                          isActive
                            ? "border border-primary/25 bg-linear-to-r from-primary/15 to-secondary/15 text-primary glow-cyan"
                            : "border border-transparent bg-transparent text-text-muted hover:border-primary/15 hover:text-text-primary"
                        }`}
                      >
                        <Icon icon={tab.icon} width={18} height={18} />
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </AnimatedContent>
        </div>
      </section>

      {/* Active Market Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
          <div className="lg:col-span-6">
            <AnimatedContent
              key={`${activeMarket.id}-content`}
              direction="horizontal"
              distance={100}
              reverse={true}
              config={{ tension: 55, friction: 24 }}
            >
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-bg-card px-4 py-2">
                  <Icon icon={activeMarket.icon} width={16} height={16} className="text-primary" />
                  <ShinyText
                    text={activeMarket.heroLabel}
                    textColor="rgba(0, 212, 255, 0.85)"
                    shineColor="#00D4FF"
                    className="text-xs font-semibold uppercase tracking-[0.22em]"
                  />
                </div>

                <h1 className="text-glow">{activeMarket.title}</h1>

                <p className="mt-4 text-lg font-semibold italic text-primary">{activeMarket.shiny}</p>

                <div className="mt-6 space-y-4">
                  {activeMarket.paragraphs.map((paragraph, index) => (
                    <p key={index} className="text-base leading-8 text-text-muted">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {activeMarket.instruments.map((item, index) => (
                    <span
                      key={index}
                      className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link to="/quantum-ai">
                    <Button className="px-8 py-3">Explore Quantum AI</Button>
                  </Link>

                  <Link to="/investing/promotions">
                    <Button variant="outline" className="px-8 py-3">
                      View Promotions
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimatedContent>
          </div>

          <div className="lg:col-span-6">
            <AnimatedContent
              key={`${activeMarket.id}-visual`}
              direction="horizontal"
              distance={100}
              reverse={false}
              config={{ tension: 55, friction: 24 }}
            >
              <div className="space-y-6">
                <div className="gradient-border relative overflow-hidden rounded-4xl p-3">
                  <img
                    src={activeMarket.image}
                    alt={activeMarket.title}
                    className="h-80 w-full rounded-3xl object-cover sm:h-116"
                  />

                  <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-primary/20 bg-bg-main/85 p-5 backdrop-blur-md">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Market spotlight</p>
                    <p className="mt-2 text-sm leading-7 text-text-muted">
                      Explore {activeMarket.label.toLowerCase()} through a cleaner trading experience with broader
                      visibility and more structured market access.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {activeMarket.stats.map((stat, index) => (
                    <div
                      key={index}
                      className="rounded-3xl border border-border bg-linear-to-br from-bg-card to-bg-elevated p-5 text-center transition-smooth hover:border-primary/30"
                    >
                      <p className="text-xs uppercase tracking-[0.18em] text-text-dimmed">{stat.label}</p>
                      <p className="mt-3 text-xl font-bold text-primary">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedContent>
          </div>
        </div>
      </section>

      {/* Market Highlights */}
      <section className="bg-bg-card py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedContent direction="horizontal" distance={100} reverse={true} config={{ tension: 55, friction: 24 }}>
            <div>
              <div className="mb-12 max-w-3xl">
                <ShinyText
                  text={`${activeMarket.label} Highlights`}
                  textColor="rgba(0, 212, 255, 0.85)"
                  shineColor="#00D4FF"
                  className="text-xs font-semibold uppercase tracking-[0.24em]"
                />
                <h2 className="mt-3">A More Structured Way to Explore {activeMarket.label}</h2>
                <p className="mt-4 text-base text-text-muted">
                  PrimeProX is built to help traders engage with markets through stronger visibility, cleaner execution
                  flow, and a more modern platform experience.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
                {activeMarket.features.map((feature, index) => (
                  <div
                    key={`${activeMarket.id}-feature-${index}`}
                    className="rounded-4xl border border-border bg-linear-to-br from-bg-elevated to-bg-card p-6 transition-smooth hover:border-primary/40 hover:glow-cyan"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                      <Icon icon={activeMarket.icon} width={24} height={24} className="text-primary" />
                    </div>
                    <p className="text-sm leading-7 text-text-muted">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedContent>
        </div>
      </section>

      {/* How It Works */}
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
                  text="How It Works"
                  textColor="rgba(0, 212, 255, 0.85)"
                  shineColor="#00D4FF"
                  className="text-xs font-semibold uppercase tracking-[0.24em]"
                />
                <div className="max-w-xl">
                  <TextGenerateEffect
                    words="A Smarter Trading Workflow Supported by AI"
                    className="text-3xl font-bold leading-tight sm:text-4xl"
                    duration={0.4}
                    multiColored={true}
                    animated={false}
                  />
                </div>

                <p className="mt-4 max-w-xl text-base text-text-muted">
                  PrimeProX is built around a more intelligent flow — from data monitoring to signal analysis and
                  opportunity response — helping traders work with better structure.
                </p>

                <div className="mt-8 space-y-5">
                  {howItWorksSteps.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                        <Icon icon={step.icon} width={22} height={22} className="text-primary" />
                      </div>

                      <div className="border-l border-border pl-4">
                        <h4 className="mb-1 text-base">{step.title}</h4>
                        <p className="text-sm text-text-muted">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
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
              <div className="relative overflow-hidden rounded-4xl border border-border bg-bg-card p-3">
                <img
                  src={activeMarket.image}
                  alt={`${activeMarket.label} workflow`}
                  className="h-80 w-full rounded-3xl object-cover sm:h-104"
                />
                <div className="absolute left-6 right-6 top-6 rounded-2xl border border-primary/20 bg-bg-main/80 p-4 backdrop-blur-md">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">AI workflow</p>
                  <p className="mt-2 text-sm text-text-muted">
                    Monitoring, analysis, evaluation, and speed-led support across {activeMarket.label.toLowerCase()}.
                  </p>
                </div>
              </div>
            </AnimatedContent>
          </div>
        </div>
      </section>

      {/* Why PrimeProX */}
      <section className="bg-bg-card py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedContent direction="horizontal" distance={100} reverse={true} config={{ tension: 55, friction: 24 }}>
            <div>
              <div className="mb-12 max-w-3xl">
                <ShinyText
                  text="Why PrimeProX"
                  textColor="rgba(0, 212, 255, 0.85)"
                  shineColor="#00D4FF"
                  className="text-xs font-semibold uppercase tracking-[0.24em]"
                />
                <h2 className="mt-3">Built for Traders Who Want More Than Manual Trading</h2>
                <p className="mt-4 text-base text-text-muted">
                  PrimeProX combines intelligent automation, broader market visibility, and a cleaner user experience
                  into a platform designed for modern trading needs.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {whyPrimeProX.map((item, index) => (
                  <div
                    key={index}
                    className={`rounded-2xl border border-border p-6 transition-smooth hover:border-primary/40 ${
                      item.featured ? "bg-linear-to-br from-bg-elevated to-bg-card xl:col-span-2" : "bg-bg-elevated"
                    }`}
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                      <Icon icon={item.icon} width={24} height={24} className="text-primary" />
                    </div>
                    <h4 className="mb-2 text-base">{item.title}</h4>
                    <p className="text-sm text-text-muted">{item.description}</p>
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
                  words={`Explore ${activeMarket.label} with a Smarter Trading Experience`}
                  className="text-3xl font-bold leading-tight sm:text-4xl"
                  duration={0.4}
                  multiColored={true}
                  animated={false}
                />
              </div>

              <p className="mx-auto mt-4 max-w-3xl text-lg text-text-muted">
                Access {activeMarket.label.toLowerCase()} through a more structured platform built around technology,
                automation, and intelligent market analysis.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Link to="/quantum-ai">
                  <Button className="px-8 py-3">Explore Quantum AI</Button>
                </Link>

                <Link to="/investing/promotions">
                  <Button variant="outline" className="px-8 py-3">
                    View Promotions
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

export default MarketsPage;
