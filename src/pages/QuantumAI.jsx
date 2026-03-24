import React, { useEffect } from "react";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import AnimatedContent from "@/components/ui/AnimatedContent";
import ShinyText from "@/components/ui/ShinyText";
import Spotlight from "@/components/ui/Spotlight";
import TextGenerateEffect from "@/components/ui/TextGenerateEffect";

const QuantumAI = () => {
  useEffect(() => {
    document.title = "PrimeProX | Quantum AI";
  }, []);

  const howAiWorks = [
    {
      step: "01",
      icon: "mdi:database-search-outline",
      title: "Market Data Collection",
      description:
        "The system gathers real-time financial data from global markets including price feeds, liquidity flows, economic indicators, and trading volume. This continuous data stream allows the AI to stay updated with the latest market movements.",
    },
    {
      step: "02",
      icon: "mdi:chart-bell-curve-cumulative",
      title: "Intelligent Market Analysis",
      description:
        "Using machine learning models, the AI analyzes historical patterns and real-time market conditions to detect trends and potential entry points. The system evaluates thousands of market signals simultaneously, allowing it to identify opportunities that traditional trading methods may miss.",
    },
    {
      step: "03",
      icon: "mdi:cog-outline",
      title: "Strategy Optimization",
      description:
        "The AI evaluates multiple trading strategies and adapts to changing market conditions. By continuously learning from market data, the system refines its strategies to improve performance and efficiency.",
    },
    {
      step: "04",
      icon: "mdi:flash-outline",
      title: "Automated Trade Execution",
      description:
        "Once the AI identifies a high-probability opportunity, the system executes the trade automatically with high speed and precision through secure trading infrastructure.",
    },
  ];

  const algorithmFactors = [
    "Price momentum",
    "Market volatility",
    "Liquidity levels",
    "Trend strength",
    "Market sentiment indicators",
  ];

  const marketCoverage = [
    { icon: "mdi:currency-usd", name: "Forex (Foreign Exchange)" },
    { icon: "mdi:bitcoin", name: "Cryptocurrencies" },
    { icon: "mdi:gold", name: "Gold and Precious Metals" },
    { icon: "mdi:chart-box", name: "Global Indices" },
    { icon: "mdi:barrel", name: "Commodities" },
  ];

  const strengthCards = [
    {
      icon: "mdi:shield-check-outline",
      label: "Intelligent Risk Management",
      title: "Smart Capital Protection",
      intro: "Risk management is a critical part of any trading system.",
      body: "Our platform integrates intelligent risk control mechanisms designed to manage exposure and maintain balanced trading activity.",
      listTitle: "Key risk management features include:",
      list: [
        "Automated trade monitoring",
        "Position size management",
        "Market volatility analysis",
        "Adaptive strategy adjustments",
      ],
      closing: "These systems help maintain trading stability even during changing market conditions.",
      featured: true,
    },
    {
      icon: "mdi:lightning-bolt-outline",
      label: "Real-Time Processing Power",
      title: "Speed and Precision",
      paragraphs: [
        "Financial markets move quickly, and timing plays an important role in trading success.",
        "Our AI infrastructure processes millions of data points every second to ensure that trading decisions are based on the most current market information.",
        "With automated execution and high-speed processing, the platform is designed to respond instantly when trading opportunities arise.",
      ],
      featured: false,
    },
    {
      icon: "mdi:sync",
      label: "Continuous Technology Evolution",
      title: "Constant Innovation",
      paragraphs: [
        "Artificial intelligence continues to evolve, and our technology is designed to grow alongside it.",
        "Our development team continuously improves the platform by enhancing AI models, refining trading strategies, and integrating new technologies to keep the system aligned with modern market conditions.",
        "This ongoing innovation ensures that the platform remains adaptable and efficient in an ever-changing financial environment.",
      ],
      featured: false,
    },
  ];

  const aiPackages = [
    {
      name: "Quantum Core",
      subtitle: "Entry-Level AI Trading System",
      description:
        "Quantum Core is designed for individuals who want to experience automated trading powered by artificial intelligence. It provides access to basic AI-driven market analysis and automated trade execution.",
      capital: "$300",
      markets: ["Forex"],
      cycle: "10 – 15 Minutes",
      features: [
        "AI Market Analysis",
        "Automated Trade Execution",
        "Real-Time Market Monitoring",
        "Basic Risk Management System",
      ],
      performance: "2% – 4% Weekly",
      popular: false,
    },
    {
      name: "Quantum Prime",
      subtitle: "Advanced AI Trading System",
      description:
        "Quantum Prime is one of our most popular AI trading systems, designed for traders who want access to multi-market analysis and advanced automated trading strategies.",
      capital: "$1,000",
      markets: ["Forex", "Gold", "Cryptocurrency"],
      cycle: "15 – 20 Minutes",
      features: [
        "Advanced AI Trading Engine",
        "Multi-Market Analysis",
        "Smart Opportunity Detection",
        "Enhanced Risk Control",
      ],
      performance: "4% – 8% Weekly",
      popular: true,
    },
    {
      name: "Quantum Edge",
      subtitle: "Professional AI Trading System",
      description:
        "Quantum Edge introduces more advanced algorithmic trading capabilities, allowing the system to analyze multiple financial markets simultaneously and adapt to changing market conditions.",
      capital: "$2,500",
      markets: ["Forex", "Gold", "Cryptocurrency", "Indices"],
      cycle: "15 – 25 Minutes",
      features: [
        "Multi-Market AI Analysis",
        "Advanced Algorithmic Strategies",
        "Market Trend Detection",
        "Enhanced Capital Management",
      ],
      performance: "8% – 10% Weekly",
      popular: false,
    },
    {
      name: "Quantum Elite",
      subtitle: "Institutional-Grade AI Trading System",
      description:
        "Quantum Elite is designed for traders who want access to more advanced AI trading models with deeper market analysis and optimized execution capabilities.",
      capital: "$5,000",
      markets: ["Forex", "Gold", "Cryptocurrency", "Indices"],
      cycle: "20 – 30 Minutes",
      features: [
        "Institutional AI Trading Algorithms",
        "Deep Market Pattern Analysis",
        "Advanced Strategy Optimization",
        "Enhanced Risk Control Systems",
      ],
      performance: "9% – 12% Weekly",
      popular: false,
    },
    {
      name: "Quantum Institutional",
      subtitle: "Advanced Investor AI System",
      description:
        "Quantum Institutional is built for investors looking for powerful AI trading systems capable of monitoring multiple global financial markets and executing advanced strategies.",
      capital: "$10,000",
      markets: ["Forex", "Gold", "Cryptocurrency", "Indices", "Commodities"],
      cycle: "25 – 35 Minutes",
      features: [
        "Institutional Trading Infrastructure",
        "Advanced Market Intelligence",
        "Multi-Layer AI Strategy System",
        "Enhanced Risk Management",
      ],
      performance: "10% – 14% Weekly",
      popular: false,
    },
    {
      name: "Quantum Capital Pro",
      subtitle: "High Net Worth AI Trading System",
      description:
        "Quantum Capital Pro is designed for serious investors seeking advanced AI-powered trading infrastructure with expanded market monitoring and enhanced trading strategies.",
      capital: "$25,000",
      markets: ["Forex", "Gold", "Cryptocurrency", "Indices", "Commodities"],
      cycle: "30 – 40 Minutes",
      features: [
        "Hedge-Fund Level AI Algorithms",
        "Neural Network Market Analysis",
        "Global Market Monitoring",
        "Advanced Capital Allocation Systems",
      ],
      performance: "11% – 15% Weekly",
      popular: false,
    },
    {
      name: "Quantum Sovereign",
      subtitle: "Institutional Elite AI Trading System",
      description:
        "Quantum Sovereign represents the highest level of our AI trading technology, built for large investors seeking powerful automated trading systems with global market intelligence.",
      capital: "$50,000",
      markets: ["Forex", "Cryptocurrency", "Gold", "Indices", "Commodities", "Global Stocks"],
      cycle: "30 – 45 Minutes",
      features: [
        "Institutional AI Trading Infrastructure",
        "Multi-Layer Algorithmic Strategies",
        "Global Market Intelligence",
        "Advanced Portfolio Risk Management",
      ],
      performance: "12% – 18% Weekly",
      popular: false,
    },
  ];

  return (
    <div className="overflow-hidden bg-bg-main text-text-primary">
      {/* Hero */}
      <section className="relative isolate overflow-hidden py-20 sm:py-24 lg:py-32">
        <Spotlight className="-top-40 left-1/2 -translate-x-1/2" fill="rgba(0, 212, 255, 0.7)" />
        <div className="pointer-events-none absolute inset-0 gradient-mesh" />
        <div className="glow-orb glow-orb-cyan -top-20 right-0 h-72 w-72 md:h-96 md:w-96" />
        <div className="glow-orb glow-orb-blue bottom-0 left-0 h-72 w-72 md:h-112 md:w-md" />

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
                    <Icon icon="mdi:brain" width={16} height={16} className="text-primary" />
                    <ShinyText
                      text="AI Technology"
                      textColor="rgba(0, 212, 255, 0.85)"
                      shineColor="#00D4FF"
                      className="text-xs font-semibold uppercase tracking-[0.22em]"
                    />
                  </div>

                  <div className="max-w-3xl">
                    <TextGenerateEffect
                      words="The Intelligence Behind Our Trading Systems"
                      className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
                      duration={0.45}
                      multiColored={true}
                      animated={true}
                    />
                  </div>

                  <p className="mt-6 max-w-3xl text-base leading-8 text-text-muted md:text-lg">
                    Our platform is powered by advanced artificial intelligence designed to analyze financial markets,
                    identify trading opportunities, and execute trades with speed and precision.
                  </p>

                  <p className="mt-4 max-w-3xl text-base leading-8 text-text-muted">
                    By combining machine learning algorithms, real-time data processing, and automated execution
                    systems, our technology is able to analyze vast amounts of financial information in seconds. This
                    intelligent system continuously monitors global markets to detect patterns, price movements, and
                    trading signals that may indicate profitable opportunities.
                  </p>

                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <Button className="px-8 py-3">Get Started Today</Button>
                    <Button variant="outline" className="px-8 py-3">
                      Explore AI Systems
                    </Button>
                  </div>

                  <div className="mt-10 flex flex-wrap gap-3 text-sm text-text-muted">
                    <span className="rounded-full border border-border bg-bg-card px-4 py-2">Machine Learning</span>
                    <span className="rounded-full border border-border bg-bg-card px-4 py-2">Real-Time Analysis</span>
                    <span className="rounded-full border border-border bg-bg-card px-4 py-2">Automated Execution</span>
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
                <div className="relative overflow-hidden rounded-4xl border border-primary/20 bg-linear-to-br from-bg-card via-bg-elevated to-bg-card p-6 glow-cyan">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,212,255,0.15),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.12),transparent_30%)]" />
                  <div className="relative z-10">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-primary/10">
                      <Icon icon="mdi:brain" width={34} height={34} className="text-primary" />
                    </div>

                    <div className="space-y-4">
                      <div className="rounded-2xl border border-border bg-bg-main/50 p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">AI Capability</p>
                        <p className="mt-2 text-sm leading-7 text-text-muted">
                          Designed to analyze financial markets, identify trading opportunities, and execute trades with
                          speed and precision.
                        </p>
                      </div>

                      <div className="rounded-2xl border border-border bg-bg-main/50 p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                          Live Intelligence
                        </p>
                        <p className="mt-2 text-sm leading-7 text-text-muted">
                          Continuously monitors global markets to detect patterns, price movements, and trading signals
                          that may indicate profitable opportunities.
                        </p>
                      </div>

                      <div className="rounded-2xl border border-border bg-bg-main/50 p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                          Technology Stack
                        </p>
                        <p className="mt-2 text-sm leading-7 text-text-muted">
                          Machine learning algorithms, real-time data processing, and automated execution systems.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedContent>
            </div>
          </div>
        </div>
      </section>

      {/* How Our AI Works */}
      <section className="bg-bg-card py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedContent direction="horizontal" distance={100} reverse={false} config={{ tension: 55, friction: 24 }}>
            <div>
              <div className="mb-12 text-center">
                <ShinyText
                  text="How Our AI Works"
                  textColor="rgba(0, 212, 255, 0.85)"
                  shineColor="#00D4FF"
                  className="text-xs font-semibold uppercase tracking-[0.24em]"
                />
                <h2 className="mt-3">A Multi-Layered Trading Intelligence System</h2>
                <p className="mx-auto mt-4 max-w-3xl text-base text-text-muted">
                  Our AI trading engine operates through several layers of advanced analysis to ensure accurate
                  decision-making and optimized trading performance.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {howAiWorks.map((item, index) => (
                  <div
                    key={index}
                    className="group rounded-4xl border border-border bg-linear-to-br from-bg-elevated to-bg-card p-6 transition-smooth hover:border-primary/40 hover:glow-cyan"
                  >
                    <div className="mb-5 flex items-start gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                        <Icon icon={item.icon} width={26} height={26} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="mb-2 flex items-center gap-3">
                          <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-primary">
                            {item.step}
                          </span>
                          <div className="h-px flex-1 bg-linear-to-r from-primary/35 to-transparent" />
                        </div>
                        <h4 className="text-lg leading-7 text-text-primary">{item.title}</h4>
                      </div>
                    </div>

                    <p className="text-sm leading-7 text-text-muted">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedContent>
        </div>
      </section>

      {/* Advanced Trading Algorithms + Multi-Market Analysis */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
          <div className="lg:col-span-6">
            <AnimatedContent
              direction="horizontal"
              distance={100}
              reverse={true}
              config={{ tension: 55, friction: 24 }}
            >
              <div className="rounded-4xl border border-primary/20 bg-linear-to-br from-bg-card to-bg-elevated p-6 sm:p-8 glow-cyan">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                  <Icon icon="mdi:chip" width={24} height={24} className="text-primary" />
                </div>

                <ShinyText
                  text="Advanced Trading Algorithms"
                  textColor="rgba(0, 212, 255, 0.85)"
                  shineColor="#00D4FF"
                  className="text-xs font-semibold uppercase tracking-[0.24em]"
                />

                <h3 className="mt-3 text-2xl">Data-Driven Decision Making</h3>

                <p className="mt-4 text-base leading-8 text-text-muted">
                  Our AI trading platform utilizes sophisticated algorithmic models designed to analyze market behavior
                  across multiple asset classes.
                </p>

                <p className="mt-4 text-sm leading-7 text-text-muted">These algorithms evaluate factors such as:</p>

                <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {algorithmFactors.map((item, i) => (
                    <div key={i} className="rounded-2xl border border-border bg-bg-main/55 p-4">
                      <div className="flex items-center gap-2">
                        <Icon icon="mdi:check-circle" width={18} height={18} className="text-primary" />
                        <span className="text-sm text-text-primary">{item}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mt-5 text-sm leading-7 text-text-muted">
                  By analyzing these variables simultaneously, the system is able to identify trading opportunities with
                  greater efficiency.
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
              <div className="rounded-4xl border border-border bg-bg-card p-6 sm:p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                  <Icon icon="mdi:earth" width={24} height={24} className="text-primary" />
                </div>

                <ShinyText
                  text="Multi-Market Analysis"
                  textColor="rgba(0, 212, 255, 0.85)"
                  shineColor="#00D4FF"
                  className="text-xs font-semibold uppercase tracking-[0.24em]"
                />

                <h3 className="mt-3 text-2xl">Monitoring Global Financial Markets</h3>

                <p className="mt-4 text-base leading-8 text-text-muted">
                  Our AI technology continuously monitors multiple financial markets including:
                </p>

                <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {marketCoverage.map((market, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 rounded-2xl border border-border bg-bg-main/55 p-4 transition-smooth hover:border-primary/35"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                        <Icon icon={market.icon} width={20} height={20} className="text-primary" />
                      </div>
                      <span className="text-sm leading-6 text-text-primary">{market.name}</span>
                    </div>
                  ))}
                </div>

                <p className="mt-5 text-sm leading-7 text-text-muted">
                  This multi-market monitoring allows the AI to identify opportunities across different asset classes
                  and adapt to varying market conditions.
                </p>
              </div>
            </AnimatedContent>
          </div>
        </div>
      </section>

      {/* AI System Strengths */}
      <section className="bg-bg-card py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedContent direction="horizontal" distance={100} reverse={true} config={{ tension: 55, friction: 24 }}>
            <div className="mb-12 max-w-3xl">
              <ShinyText
                text="AI System Strengths"
                textColor="rgba(0, 212, 255, 0.85)"
                shineColor="#00D4FF"
                className="text-xs font-semibold uppercase tracking-[0.24em]"
              />
              <h2 className="mt-3">Built for Stability, Speed, and Innovation</h2>
            </div>
          </AnimatedContent>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Featured card */}
            <AnimatedContent
              direction="horizontal"
              distance={100}
              reverse={true}
              config={{ tension: 55, friction: 24 }}
            >
              <div className="rounded-4xl border border-primary/20 bg-linear-to-br from-bg-elevated to-bg-card p-6 sm:p-8 glow-cyan lg:h-full">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                  <Icon icon={strengthCards[0].icon} width={24} height={24} className="text-primary" />
                </div>

                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                  {strengthCards[0].label}
                </p>
                <h4 className="mt-3 text-xl">{strengthCards[0].title}</h4>

                <p className="mt-4 text-sm leading-7 text-text-muted">{strengthCards[0].intro}</p>
                <p className="mt-4 text-sm leading-7 text-text-muted">{strengthCards[0].body}</p>

                <div className="mt-5 rounded-3xl border border-border bg-bg-main/40 p-5">
                  <p className="text-sm leading-7 text-text-muted">{strengthCards[0].listTitle}</p>
                  <ul className="mt-4 grid grid-cols-1 gap-3">
                    {strengthCards[0].list.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 rounded-2xl bg-bg-card p-3 text-sm text-text-muted">
                        <Icon icon="mdi:check-circle" width={16} height={16} className="mt-1 shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="mt-5 text-sm leading-7 text-text-muted">{strengthCards[0].closing}</p>
              </div>
            </AnimatedContent>

            {/* Standard cards */}
            {strengthCards.slice(1).map((card, index) => (
              <AnimatedContent
                key={card.title}
                direction="horizontal"
                distance={100}
                reverse={index % 2 === 0}
                config={{ tension: 55, friction: 24 }}
              >
                <div className="rounded-4xl border border-border bg-linear-to-br from-bg-elevated to-bg-card p-6 sm:p-8 transition-smooth hover:border-primary/35 lg:h-full">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                    <Icon icon={card.icon} width={24} height={24} className="text-primary" />
                  </div>

                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">{card.label}</p>
                  <h4 className="mt-3 text-xl">{card.title}</h4>

                  <div className="mt-4 space-y-4">
                    {card.paragraphs.map((paragraph, i) => (
                      <p key={i} className="text-sm leading-7 text-text-muted">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </section>

      {/* Future of Trading */}
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="glow-orb glow-orb-cyan bottom-0 left-1/4 h-80 w-80" />

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <AnimatedContent direction="horizontal" distance={100} reverse={false} config={{ tension: 55, friction: 24 }}>
            <div className="relative z-10 rounded-4xl border border-primary/30 bg-linear-to-br from-primary/10 via-bg-elevated to-secondary/10 p-8 text-center glow-cyan-lg lg:p-12">
              <ShinyText
                text="The Future of Trading"
                textColor="rgba(0, 212, 255, 0.85)"
                shineColor="#00D4FF"
                className="text-xs font-semibold uppercase tracking-[0.24em]"
              />

              <div className="mx-auto max-w-3xl">
                <TextGenerateEffect
                  words="Powered by Artificial Intelligence"
                  className="text-3xl font-bold leading-tight sm:text-4xl"
                  duration={0.4}
                  multiColored={true}
                  animated={false}
                />
              </div>

              <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-text-muted">
                AI-driven trading represents the next stage in the evolution of financial technology.
              </p>

              <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-text-muted">
                By combining advanced data analysis, machine learning, and automated execution, our platform provides
                traders with intelligent tools designed to simplify market participation while maintaining efficiency
                and precision.
              </p>

              <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-text-muted">
                Our goal is to continue advancing AI trading technology to create smarter, faster, and more reliable
                trading solutions.
              </p>
            </div>
          </AnimatedContent>
        </div>
      </section>

      {/* Packages */}
      <section className="bg-bg-card py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedContent direction="horizontal" distance={100} reverse={true} config={{ tension: 55, friction: 24 }}>
            <div className="mb-12 text-center">
              <ShinyText
                text="AI Trading Systems"
                textColor="rgba(0, 212, 255, 0.85)"
                shineColor="#00D4FF"
                className="text-xs font-semibold uppercase tracking-[0.24em]"
              />
              <h2 className="mt-3">Choose Your AI Trading System</h2>
              <p className="mx-auto mt-4 max-w-4xl text-base leading-8 text-text-muted">
                Our platform offers a range of intelligent AI trading systems designed to suit different investment
                goals and trading strategies. Each system is powered by advanced artificial intelligence that
                continuously analyzes global markets, identifies opportunities, and executes trades automatically.
                Whether you are starting your trading journey or looking for advanced automated trading solutions, our
                AI systems are built to deliver powerful market analysis and intelligent execution.
              </p>
            </div>
          </AnimatedContent>

          <div className="space-y-5">
            {aiPackages.map((pkg, index) => (
              <AnimatedContent
                key={pkg.name}
                direction="horizontal"
                distance={100}
                reverse={index % 2 === 0}
                config={{ tension: 55, friction: 24 }}
              >
                <div
                  className={`relative overflow-hidden rounded-4xl border p-5 sm:p-6 transition-smooth ${
                    pkg.popular
                      ? "border-primary/40 bg-linear-to-br from-bg-elevated via-bg-card to-bg-elevated glow-cyan"
                      : "border-border bg-linear-to-br from-bg-elevated to-bg-card hover:border-primary/30"
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute right-4 top-4 z-10">
                      <div className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:items-center">
                    {/* Left */}
                    <div className="lg:col-span-3">
                      <div className="rounded-3xl border border-border bg-bg-main/40 p-5">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">AI System</p>
                        <h3 className="mt-3 text-2xl font-bold">{pkg.name}</h3>
                        <p className="mt-2 text-sm text-text-dimmed">{pkg.subtitle}</p>

                        <div className="mt-6 space-y-3">
                          <div className="rounded-2xl border border-primary/20 bg-primary/8 p-4">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-text-dimmed">
                              Capital Requirement
                            </p>
                            <p className="mt-2 text-3xl font-bold text-primary">{pkg.capital}</p>
                          </div>

                          <div className="rounded-2xl border border-border bg-bg-card p-4">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-text-dimmed">
                              Estimated Performance
                            </p>
                            <p className="mt-2 text-lg font-bold text-primary">{pkg.performance}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Middle */}
                    <div className="lg:col-span-6">
                      <div className="rounded-3xl border border-border bg-bg-main/30 p-5">
                        <p className="text-sm leading-7 text-text-muted">{pkg.description}</p>

                        <div className="mt-5 flex flex-wrap gap-2">
                          {pkg.markets.map((market, i) => (
                            <span
                              key={i}
                              className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                            >
                              {market}
                            </span>
                          ))}
                        </div>

                        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                          <div className="rounded-2xl border border-border bg-bg-card p-4">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-text-dimmed">
                              Cycle Duration
                            </p>
                            <p className="mt-2 text-sm font-semibold text-text-primary">{pkg.cycle}</p>
                          </div>

                          <div className="rounded-2xl border border-border bg-bg-card p-4">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-text-dimmed">
                              Markets Covered
                            </p>
                            <p className="mt-2 text-sm font-semibold text-text-primary">{pkg.markets.length} Markets</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right */}
                    <div className="lg:col-span-3">
                      <div className="flex h-full flex-col rounded-3xl border border-border bg-bg-main/40 p-5">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Key Features</p>

                        <ul className="mt-4 space-y-2">
                          {pkg.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-text-muted">
                              <Icon
                                icon="mdi:check-circle"
                                width={16}
                                height={16}
                                className="mt-1 shrink-0 text-primary"
                              />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-auto pt-6">
                          <Button className="w-full" variant={pkg.popular ? "primary" : "outline"}>
                            Select System
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedContent>
            ))}
          </div>

          {/* Homepage-style CTA */}
          <AnimatedContent direction="horizontal" distance={100} reverse={false} config={{ tension: 55, friction: 24 }}>
            <div className="relative z-10 mt-16 rounded-4xl border border-primary/30 bg-linear-to-br from-primary/10 via-bg-elevated to-secondary/10 p-8 text-center glow-cyan-lg lg:p-12">
              <ShinyText
                text="Start with Quantum AI"
                textColor="rgba(0, 212, 255, 0.85)"
                shineColor="#00D4FF"
                className="text-xs font-semibold uppercase tracking-[0.24em]"
              />

              <div className="mx-auto max-w-3xl">
                <TextGenerateEffect
                  words="Choose an AI Trading System Built for Your Goals"
                  className="text-3xl font-bold leading-tight sm:text-4xl"
                  duration={0.4}
                  multiColored={true}
                  animated={false}
                />
              </div>

              <p className="mx-auto mt-4 max-w-3xl text-lg text-text-muted">
                From entry-level access to advanced institutional-grade systems, Quantum AI gives you intelligent tools
                designed to simplify market participation through automation, analysis, and speed.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Button className="px-8 py-3">Get Started Today</Button>
                <Button variant="outline" className="px-8 py-3">
                  Explore AI Systems
                </Button>
              </div>
            </div>
          </AnimatedContent>
        </div>
      </section>
    </div>
  );
};

export default QuantumAI;
