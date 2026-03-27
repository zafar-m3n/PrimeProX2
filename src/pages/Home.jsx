import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import gettingStartedImage from "@/assets/gettingStarted.webp";
import howItWorksImage from "@/assets/HowItWorks.webp";
import mvAIImage from "@/assets/mvai.webp";
import rakbank from "@/assets/banks/rakbank.png";
import bankofamerica from "@/assets/banks/bankofamerica.png";
import hsbc from "@/assets/banks/hsbc.png";
import citibank from "@/assets/banks/citibank.png";
import wellsFargo from "@/assets/banks/wellsfargo.png";
import adcb from "@/assets/banks/adcb.png";
import goldmanSachs from "@/assets/banks/goldmansachs.png";
import fab from "@/assets/banks/fab.png";
import barclays from "@/assets/banks/barclays.png";
import jpmorgan from "@/assets/banks/jpmorgan.png";
import icbc from "@/assets/banks/icbc.png";
import creditsuisse from "@/assets/banks/creditsuisse.png";
import capitalone from "@/assets/banks/capitalone.png";
import adib from "@/assets/banks/adib.png";
import standardChartered from "@/assets/banks/standardchartered.png";
import nbo from "@/assets/banks/nbo.png";
import qnb from "@/assets/banks/qnb.png";
import sabb from "@/assets/banks/sabb.png";
import nbk from "@/assets/banks/nbk.png";
import ubs from "@/assets/banks/ubs.png";
import rbc from "@/assets/banks/rbc.png";
import deutsche from "@/assets/banks/deutsche.png";
import lloyds from "@/assets/banks/lloydsbankinggroup.png";
import anz from "@/assets/banks/anz.png";
import charlesschwab from "@/assets/banks/charlesschwab.png";
import rabo from "@/assets/banks/rabo.png";
import dbs from "@/assets/banks/dbs.png";
import westpac from "@/assets/banks/westpac.png";
import bayerische from "@/assets/banks/bayerische.png";

import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import AnimatedContent from "@/components/ui/AnimatedContent";
import ShinyText from "@/components/ui/ShinyText";
import Spotlight from "@/components/ui/Spotlight";
import TextGenerateEffect from "@/components/ui/TextGenerateEffect";

const Home = () => {
  useEffect(() => {
    document.title = "PrimeProX | Home";
  }, []);

  const aiSwiperRef = useRef(null);

  const gettingStartedSteps = [
    {
      icon: "mdi:account-plus",
      title: "Create Your Account",
      description: "Register and unlock access to PrimeProX’s AI-powered trading environment.",
    },
    {
      icon: "mdi:tune-variant",
      title: "Choose Your Strategy Level",
      description: "Select the trading approach that best matches your goals and experience.",
    },
    {
      icon: "mdi:wallet-outline",
      title: "Prepare and Activate",
      description: "Complete your setup and get ready to begin with a structured workflow.",
    },
    {
      icon: "mdi:robot-excited-outline",
      title: "Let the AI Assist",
      description: "The system monitors markets, evaluates signals, and supports execution with speed.",
    },
  ];

  const awards = [
    {
      year: "2022",
      title: "Best AI Trading Innovation",
      subtitle: "Trading Technology Recognition",
    },
    {
      year: "2023",
      title: "Most Trusted Forex Platform",
      subtitle: "Global Trading Excellence",
    },
    {
      year: "2024",
      title: "Best Trading Platform Experience",
      subtitle: "Premium User Experience Award",
    },
    {
      year: "2025",
      title: "Best Multi-Asset Trading Solution",
      subtitle: "Next-Generation Market Access",
    },
  ];

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

  const stats = [
    { value: "24/7", label: "Monitoring Coverage", isText: true },
    { value: 5, label: "Market Categories", suffix: "+" },
    { value: 1, label: "Million Data Points Reviewed", suffix: "M+" },
    { value: 7, label: "Strategy Levels", suffix: "" },
  ];

  const aiChallenges = [
    {
      title: "Lack of Time to Monitor Markets",
      problem:
        "Markets move throughout the day, and opportunities can appear at any moment. Many traders have work, business, or personal commitments that make it difficult to monitor charts continuously.",
      solution:
        "Intelligent trading systems can monitor market conditions around the clock, helping traders stay connected to potential opportunities without needing to watch charts constantly.",
    },
    {
      title: "Emotional Pressure",
      problem:
        "Fear, excitement, and impatience can influence trading decisions. Emotional reactions often lead to entering trades too quickly or exiting positions prematurely.",
      solution:
        "AI systems operate based on predefined strategies and data analysis, helping reduce emotional decision-making.",
    },
    {
      title: "Difficulty Analyzing Large Amounts of Data",
      problem:
        "Modern financial markets generate enormous amounts of data — including price movements, economic reports, and global news.",
      solution:
        "Advanced algorithms can process large datasets and identify patterns more efficiently, helping traders interpret market information more effectively.",
    },
    {
      title: "Slow Trade Execution",
      problem:
        "Manual trading requires analyzing charts, selecting trade parameters, and placing orders. This process can take time, and market conditions may change quickly.",
      solution: "Automated systems can execute strategies rapidly once certain conditions are met.",
    },
    {
      title: "Limited Market Coverage",
      problem:
        "Most traders focus on only a few markets at a time, which can limit exposure to potential opportunities across other assets.",
      solution:
        "AI technology can analyze multiple markets simultaneously, expanding the range of opportunities traders can explore.",
    },
  ];

  const liquidityProviders = [
    { name: "RAK Bank", logo: rakbank },
    { name: "Bank of America", logo: bankofamerica },
    { name: "HSBC", logo: hsbc },
    { name: "Citibank", logo: citibank },
    { name: "Wells Fargo", logo: wellsFargo },
    { name: "Abu Dhabi Commercial Bank", logo: adcb },
    { name: "Goldman Sachs", logo: goldmanSachs },
    { name: "First Abu Dhabi Bank", logo: fab },
    { name: "Barclays", logo: barclays },
    { name: "JP Morgan Chase", logo: jpmorgan },
    { name: "Industrial and Commercial Bank of China", logo: icbc },
    { name: "Credit Suisse", logo: creditsuisse },
    { name: "Capital One", logo: capitalone },
    { name: "ADIB", logo: adib },
    { name: "Standard Chartered", logo: standardChartered },
    { name: "National Bank of Oman", logo: nbo },
    { name: "Qatar National Bank", logo: qnb },
    { name: "Saudi British Bank", logo: sabb },
    { name: "National Bank of Kuwait", logo: nbk },
    { name: "UBS", logo: ubs },
    { name: "Royal Bank of Canada", logo: rbc },
    { name: "Deutsche Bank", logo: deutsche },
    { name: "Lloyds Banking Group", logo: lloyds },
    { name: "ANZ Group", logo: anz },
    { name: "Charles Schwab Corporation", logo: charlesschwab },
    { name: "Rabo Bank", logo: rabo },
    { name: "DBS", logo: dbs },
    { name: "Westpac Australia's first bank", logo: westpac },
    { name: "Bayerische Landesbank", logo: bayerische },
  ];

  const handleAiPrev = () => {
    if (aiSwiperRef.current) aiSwiperRef.current.slidePrev();
  };

  const handleAiNext = () => {
    if (aiSwiperRef.current) aiSwiperRef.current.slideNext();
  };

  return (
    <div className="overflow-hidden bg-bg-main text-text-primary">
      {/* Hero */}
      <section className="relative isolate overflow-hidden py-20 sm:py-24 lg:py-32">
        <Spotlight className="-top-40 left-1/2 -translate-x-1/2" fill="rgba(0, 212, 255, 0.7)" />

        <div className="pointer-events-none absolute inset-0 gradient-mesh" />
        <div className="glow-orb glow-orb-cyan -top-20 right-0 h-72 w-72 md:h-96 md:w-96" />
        <div className="glow-orb glow-orb-blue bottom-0 left-0 h-72 w-72 md:h-112 md:w-md" />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <AnimatedContent
            direction="vertical"
            distance={120}
            reverse={false}
            config={{ tension: 60, friction: 22 }}
            initialOpacity={0}
          >
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-bg-card px-4 py-2">
                <Icon icon="mdi:brain" width={16} height={16} className="text-primary" />
                <ShinyText
                  text="PrimeProX AI Trading"
                  textColor="rgba(0, 212, 255, 0.85)"
                  shineColor="#00D4FF"
                  className="text-xs font-semibold uppercase tracking-[0.22em]"
                />
              </div>

              <div className="mx-auto max-w-3xl">
                <TextGenerateEffect
                  words="Intelligent Trading Powered by Advanced AI"
                  className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
                  duration={0.45}
                  multiColored={true}
                  animated={true}
                />
              </div>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-text-muted md:text-lg">
                PrimeProX combines automation, live market analysis, and technology-led execution support to help
                traders approach markets with more speed, structure, and confidence.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link to="/quantum-ai">
                  <Button className="w-full px-8 py-3 sm:w-auto">Explore Quantum AI</Button>
                </Link>

                <Link to="/investing/promotions">
                  <Button variant="outline" className="w-full px-8 py-3 sm:w-auto">
                    View Promotions
                  </Button>
                </Link>
              </div>

              <div className="mt-12 flex flex-wrap items-center justify-center gap-3 text-sm text-text-muted">
                <span className="rounded-full border border-border bg-bg-card px-4 py-2">Multi-Market Coverage</span>
                <span className="rounded-full border border-border bg-bg-card px-4 py-2">AI-Driven Insights</span>
                <span className="rounded-full border border-border bg-bg-card px-4 py-2">
                  Structured Execution Support
                </span>
              </div>
            </div>
          </AnimatedContent>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
          <div className="lg:col-span-5">
            <AnimatedContent
              direction="horizontal"
              distance={100}
              reverse={true}
              config={{ tension: 55, friction: 24 }}
            >
              <div>
                <ShinyText
                  text="Getting Started"
                  textColor="rgba(0, 212, 255, 0.85)"
                  shineColor="#00D4FF"
                  className="text-xs font-semibold uppercase tracking-[0.24em]"
                />
                <h2 className="mt-3 max-w-xl">Start Your PrimeProX Journey with a Clear and Guided Flow</h2>
                <p className="mt-4 max-w-xl text-base text-text-muted">
                  PrimeProX is designed to make the first steps feel more structured. From account setup to activation,
                  each stage is built to help users move into AI-supported trading with clarity.
                </p>

                <div className="mt-8 space-y-4">
                  {gettingStartedSteps.map((step, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 rounded-2xl border border-border bg-bg-card p-4 transition-smooth hover:border-primary/40"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                        <Icon icon={step.icon} width={22} height={22} className="text-primary" />
                      </div>

                      <div>
                        <div className="mb-1 flex items-center gap-2">
                          <span className="text-sm font-semibold text-primary">0{index + 1}</span>
                          <h4 className="text-base">{step.title}</h4>
                        </div>
                        <p className="text-sm text-text-muted">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedContent>
          </div>

          <div className="lg:col-span-7">
            <AnimatedContent
              direction="horizontal"
              distance={100}
              reverse={false}
              config={{ tension: 55, friction: 24 }}
            >
              <div className="gradient-border relative overflow-hidden rounded-4xl p-3">
                <img
                  src={gettingStartedImage}
                  alt="PrimeProX platform placeholder"
                  className="h-80 w-full rounded-3xl object-cover sm:h-105"
                />
                <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-primary/20 bg-bg-main/85 p-5 backdrop-blur-md">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Smooth onboarding</p>
                  <p className="mt-2 text-sm text-text-muted">
                    A cleaner entry point into automated and AI-supported trading.
                  </p>
                </div>
              </div>
            </AnimatedContent>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="bg-bg-card py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedContent direction="horizontal" distance={100} reverse={false} config={{ tension: 55, friction: 24 }}>
            <div>
              <div className="mb-12 text-center">
                <ShinyText
                  text="Recognition"
                  textColor="rgba(0, 212, 255, 0.85)"
                  shineColor="#00D4FF"
                  className="text-xs font-semibold uppercase tracking-[0.24em]"
                />
                <h2 className="mt-3">Award-Worthy Standards Across Modern Trading</h2>
                <p className="mx-auto mt-4 max-w-2xl text-base text-text-muted">
                  A visual showcase of the kinds of premium trading and platform distinctions seen across the industry
                  from 2022 through 2025.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
                {awards.map((award, index) => (
                  <div
                    key={index}
                    className="group relative h-full overflow-hidden rounded-4xl border border-primary/15 bg-linear-to-br from-bg-elevated to-bg-card p-6 transition-smooth hover:border-primary/50 hover:glow-cyan"
                  >
                    <div className="pointer-events-none absolute -top-10 right-0 h-28 w-28 rounded-full bg-primary/10 blur-2xl transition-smooth group-hover:bg-primary/20" />

                    <div className="relative z-10 flex h-full flex-col">
                      <div className="mb-6 flex items-center justify-between">
                        <Icon icon="hugeicons:laurel-wreath-left-01" width={28} height={28} className="text-primary" />
                        <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
                          {award.year}
                        </span>
                        <Icon icon="hugeicons:laurel-wreath-right-01" width={28} height={28} className="text-primary" />
                      </div>

                      <h4 className="text-lg leading-7 text-text-primary">{award.title}</h4>

                      <div className="mt-4 h-px w-full bg-linear-to-r from-transparent via-primary/40 to-transparent" />

                      <p className="mt-4 text-sm text-text-muted">{award.subtitle}</p>
                    </div>
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
                  src={howItWorksImage}
                  alt="AI trading workflow placeholder"
                  className="h-80 w-full rounded-3xl object-cover sm:h-105"
                />
                <div className="absolute left-6 right-6 top-6 rounded-2xl border border-primary/20 bg-bg-main/80 p-4 backdrop-blur-md">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">AI workflow</p>
                  <p className="mt-2 text-sm text-text-muted">
                    Monitoring, analysis, evaluation, and speed-led support.
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

      {/* Stats */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <AnimatedContent direction="horizontal" distance={100} reverse={false} config={{ tension: 55, friction: 24 }}>
            <div className="rounded-4xl border border-primary/20 bg-linear-to-br from-bg-card to-bg-elevated p-6 sm:p-8 lg:p-10">
              <div className="mb-8 max-w-2xl">
                <ShinyText
                  text="PrimeProX in Numbers"
                  textColor="rgba(0, 212, 255, 0.85)"
                  shineColor="#00D4FF"
                  className="text-xs font-semibold uppercase tracking-[0.24em]"
                />
                <h2 className="mt-3">Designed Around Market Reach, Technology, and Speed</h2>
              </div>

              <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
                {stats.map((stat, index) => (
                  <div key={index} className="rounded-2xl border border-border bg-bg-main/60 p-6">
                    <div className="mb-2 text-3xl font-bold text-primary sm:text-4xl">
                      {stat.isText ? (
                        stat.value
                      ) : (
                        <>
                          <CountUp end={stat.value} duration={2.5} />
                          {stat.suffix}
                        </>
                      )}
                    </div>
                    <p className="text-sm text-text-muted">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedContent>
        </div>
      </section>

      {/* Why Traders Are Moving to AI */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <AnimatedContent
                direction="horizontal"
                distance={100}
                reverse={true}
                config={{ tension: 55, friction: 24 }}
              >
                <div>
                  <ShinyText
                    text="Why Traders Are Moving to AI"
                    textColor="rgba(0, 212, 255, 0.85)"
                    shineColor="#00D4FF"
                    className="text-xs font-semibold uppercase tracking-[0.24em]"
                  />
                  <h2 className="mt-3">Why Many Traders Struggle — And How Intelligent Trading Technology Helps</h2>
                  <p className="mt-4 text-base text-text-muted">
                    Financial markets offer opportunities, but they can also be challenging. Many traders enter the
                    markets with high expectations, yet they quickly discover that successful trading requires
                    discipline, experience, and constant monitoring. These challenges help explain why more people are
                    exploring intelligent, technology-driven ways to participate in the markets.
                  </p>

                  <div className="mt-8 overflow-hidden rounded-4xl border border-border bg-bg-card p-3">
                    <img
                      src={mvAIImage}
                      alt="Why traders are moving to AI placeholder"
                      className="h-75 w-full rounded-3xl object-cover sm:h-95"
                    />
                  </div>
                </div>
              </AnimatedContent>
            </div>

            <div className="lg:col-span-7">
              <AnimatedContent
                direction="horizontal"
                distance={100}
                reverse={false}
                config={{ tension: 55, friction: 24 }}
              >
                <div>
                  <div className="mb-6 relative z-10">
                    <div className="relative flex items-center justify-center overflow-hidden">
                      <button
                        onClick={handleAiPrev}
                        className="absolute -left-3 sm:-left-5 z-20 p-2"
                        aria-label="Previous"
                        type="button"
                      >
                        <Icon icon="mdi:chevron-left" width={38} className="text-primary" />
                      </button>

                      <div className="w-full max-w-full px-8 sm:px-10">
                        <Swiper
                          modules={[Autoplay]}
                          onSwiper={(swiper) => {
                            aiSwiperRef.current = swiper;
                          }}
                          slidesPerView={1}
                          spaceBetween={0}
                          loop={true}
                          speed={900}
                          autoplay={{
                            delay: 10000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                          }}
                          className="w-full"
                        >
                          {aiChallenges.map((challenge, index) => (
                            <SwiperSlide key={index}>
                              <div className="flex min-h-100 h-full flex-col rounded-4xl border border-border bg-linear-to-br from-bg-card to-bg-elevated p-6 sm:min-h-87.5 transition-smooth hover:border-primary/40">
                                <h4 className="mb-4 text-lg leading-7 text-text-primary">{challenge.title}</h4>

                                <p className="mb-5 text-sm leading-7 text-text-muted">{challenge.problem}</p>

                                <div className="mt-auto rounded-2xl border border-primary/20 bg-primary/5 p-4">
                                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                                    How AI Helps
                                  </p>
                                  <p className="text-sm leading-7 text-text-muted">{challenge.solution}</p>
                                </div>
                              </div>
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      </div>

                      <button
                        onClick={handleAiNext}
                        className="absolute -right-3 sm:-right-5 z-20 p-2"
                        aria-label="Next"
                        type="button"
                      >
                        <Icon icon="mdi:chevron-right" width={38} className="text-primary" />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="rounded-4xl border border-primary/20 bg-linear-to-br from-bg-card to-bg-elevated p-6">
                      <h3 className="mb-3 text-xl">A Smarter Way Forward</h3>
                      <p className="text-sm leading-7 text-text-muted">
                        Technology continues to reshape how people interact with financial markets. By combining
                        automation with advanced data analysis, AI-powered trading systems provide a modern alternative
                        to traditional manual methods.
                      </p>
                      <p className="mt-4 text-sm leading-7 text-text-muted">
                        These tools allow traders to explore markets in a more structured and technology-driven way.
                      </p>
                    </div>

                    <div className="rounded-4xl border border-primary/20 bg-linear-to-br from-bg-card to-bg-elevated p-6">
                      <h3 className="mb-3 text-xl">Discover the Power of Intelligent Trading</h3>
                      <p className="text-sm leading-7 text-text-muted">
                        Artificial intelligence is opening new possibilities for traders who want to approach markets
                        with the support of advanced technology.
                      </p>
                      <p className="mt-4 text-sm leading-7 text-text-muted">
                        Automated systems can help simplify the trading experience while offering access to a more
                        modern form of market participation.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedContent>
            </div>
          </div>
        </div>
      </section>

      {/* Liquidity Providers */}
      <section className="overflow-hidden bg-bg-card py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedContent direction="horizontal" distance={100} reverse={true} config={{ tension: 55, friction: 24 }}>
            <div>
              <div className="mb-10 text-center">
                <ShinyText
                  text="Liquidity Providers"
                  textColor="rgba(0, 212, 255, 0.85)"
                  shineColor="#00D4FF"
                  className="text-xs font-semibold uppercase tracking-[0.24em]"
                />
                <h2 className="mt-3">Connected to a Broader Trading Ecosystem</h2>
                <p className="mx-auto mt-4 max-w-3xl text-base text-text-muted">
                  PrimeProX is supported by a broader institutional ecosystem through globally recognized banking and
                  financial liquidity relationships.
                </p>
              </div>

              <Swiper
                modules={[Autoplay]}
                slidesPerView={2}
                spaceBetween={20}
                loop={true}
                speed={6000}
                autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  640: { slidesPerView: 3 },
                  768: { slidesPerView: 4 },
                  1024: { slidesPerView: 6 },
                }}
                className="w-full"
              >
                {liquidityProviders.map((provider, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex h-24 items-center justify-center rounded-3xl border border-border bg-linear-to-br from-bg-elevated to-bg-card px-6 py-4 transition-smooth hover:border-primary/40">
                      <img
                        src={provider.logo}
                        alt={provider.name}
                        className="max-h-12 w-auto object-contain opacity-80 transition duration-300 hover:opacity-100"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
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
                  words="Step Into Smarter Trading with AI-Powered Support"
                  className="text-3xl font-bold leading-tight sm:text-4xl"
                  duration={0.4}
                  multiColored={true}
                  animated={false}
                />
              </div>

              <p className="mx-auto mt-4 max-w-3xl text-lg text-text-muted">
                Explore a more structured way to interact with the markets through technology, automation, and
                intelligent analysis.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Button
                  className="shadow-lg shadow-primary/20"
                  onClick={() => window.open("https://portal.primeprox.com/register", "_blank")}
                >
                  Get Started
                </Button>

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

export default Home;
