import React, { useEffect, useState } from "react";

import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import AnimatedContent from "@/components/ui/AnimatedContent";
import ShinyText from "@/components/ui/ShinyText";
import Spotlight from "@/components/ui/Spotlight";
import TextGenerateEffect from "@/components/ui/TextGenerateEffect";

const faqItems = [
  {
    question: "What is PrimeProX?",
    answer:
      "PrimeProX is an AI-powered trading platform designed to help users access intelligent market analysis, automated trade execution, and technology-driven trading tools across multiple financial markets.",
  },
  {
    question: "How does AI trading work on PrimeProX?",
    answer:
      "PrimeProX uses advanced artificial intelligence to analyze market data, detect patterns, identify potential opportunities, and support automated trading execution with speed and precision.",
  },
  {
    question: "Is PrimeProX suitable for beginners?",
    answer:
      "Yes. PrimeProX is designed to provide a more structured trading experience for both beginners and experienced traders through automation, intelligent analysis, and simplified platform access.",
  },
  {
    question: "Which markets can be traded on PrimeProX?",
    answer:
      "PrimeProX supports multiple market categories including Forex, Cryptocurrencies, Gold and Commodities, and Global Indices.",
  },
  {
    question: "What is Quantum AI?",
    answer:
      "Quantum AI is the advanced AI trading system offered through PrimeProX. It is designed to analyze financial markets in real time, identify trading opportunities, and operate with automated trading logic.",
  },
  {
    question: "Do I need trading experience to use AI trading systems?",
    answer:
      "No prior trading experience is strictly required, but users should still understand that financial markets carry risk. PrimeProX is designed to make intelligent trading tools more accessible.",
  },
  {
    question: "Is AI trading fully automated?",
    answer:
      "AI trading on PrimeProX is built around automated analysis and execution systems. These technologies are designed to monitor markets, assess opportunities, and respond efficiently when conditions are met.",
  },
  {
    question: "How fast does the AI system analyze the markets?",
    answer:
      "The platform is designed to process large volumes of market data in very short timeframes, allowing the AI system to react to fast-moving market conditions with greater speed and efficiency.",
  },
  {
    question: "Can PrimeProX monitor markets 24/7?",
    answer:
      "Yes. PrimeProX is designed to continuously monitor market activity, helping users stay connected to opportunities across global financial markets.",
  },
  {
    question: "Does PrimeProX include risk management features?",
    answer:
      "Yes. PrimeProX integrates intelligent risk management systems designed to support controlled exposure, balanced trading activity, and more disciplined automated trading workflows.",
  },
  {
    question: "What makes AI trading different from manual trading?",
    answer:
      "AI trading can process large amounts of information quickly, monitor markets continuously, reduce delays caused by manual execution, and operate using predefined logic rather than emotional decision-making.",
  },
  {
    question: "Can I choose different AI trading systems?",
    answer:
      "Yes. PrimeProX offers multiple AI trading systems designed for different capital levels, trading goals, and market access requirements.",
  },
  {
    question: "Are there promotions or bonuses available on PrimeProX?",
    answer:
      "Yes. PrimeProX provides promotional programs such as deposit bonuses, upgrade bonuses, referral rewards, and VIP-related benefits depending on the active offer and trading package.",
  },
  {
    question: "Does past performance guarantee future results?",
    answer:
      "No. Past performance does not guarantee future results. Financial markets involve risk, and outcomes can vary depending on market conditions and other factors.",
  },
];

const FAQ = () => {
  useEffect(() => {
    document.title = "PrimeProX | FAQ";
  }, []);

  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <div className="overflow-hidden bg-bg-main text-text-primary">
      {/* Hero */}
      <section className="relative isolate overflow-hidden py-20 sm:py-24 lg:py-32">
        <Spotlight className="-top-40 left-1/2 -translate-x-1/2" fill="rgba(0, 212, 255, 0.7)" />
        <div className="pointer-events-none absolute inset-0 gradient-mesh" />
        <div className="glow-orb glow-orb-cyan top-0 right-0 h-72 w-72 md:h-96 md:w-96" />
        <div className="glow-orb glow-orb-blue bottom-0 left-0 h-72 w-72 md:h-96 md:w-96" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-6">
              <AnimatedContent
                direction="horizontal"
                distance={100}
                reverse={true}
                config={{ tension: 55, friction: 24 }}
                initialOpacity={0}
              >
                <div>
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-bg-card px-4 py-2">
                    <Icon icon="mdi:frequently-asked-questions" width={16} height={16} className="text-primary" />
                    <ShinyText
                      text="Frequently Asked Questions"
                      textColor="rgba(0, 212, 255, 0.85)"
                      shineColor="#00D4FF"
                      className="text-xs font-semibold uppercase tracking-[0.22em]"
                    />
                  </div>

                  <div className="max-w-3xl">
                    <TextGenerateEffect
                      words="Questions About PrimeProX and AI Trading"
                      className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
                      duration={0.45}
                      multiColored={true}
                      animated={true}
                    />
                  </div>

                  <p className="mt-6 max-w-3xl text-base leading-8 text-text-muted md:text-lg">
                    Learn more about PrimeProX, how AI trading works, what markets are available, and how the platform
                    is designed to support a smarter trading experience.
                  </p>

                  <div className="mt-10 flex flex-wrap gap-3 text-sm text-text-muted">
                    <span className="rounded-full border border-border bg-bg-card px-4 py-2">Platform Questions</span>
                    <span className="rounded-full border border-border bg-bg-card px-4 py-2">AI Trading Basics</span>
                    <span className="rounded-full border border-border bg-bg-card px-4 py-2">Markets & Systems</span>
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
                <div className="gradient-border relative overflow-hidden rounded-4xl p-3">
                  <img
                    src="https://picsum.photos/900/700?random=41"
                    alt="PrimeProX FAQ placeholder"
                    className="h-80 w-full rounded-3xl object-cover sm:h-120"
                  />
                  <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-primary/20 bg-bg-main/85 p-5 backdrop-blur-md">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Support & clarity</p>
                    <p className="mt-2 text-sm leading-7 text-text-muted">
                      Helpful answers about the platform, AI systems, and intelligent trading technology.
                    </p>
                  </div>
                </div>
              </AnimatedContent>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-bg-card py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <AnimatedContent direction="horizontal" distance={100} reverse={true} config={{ tension: 55, friction: 24 }}>
            <div className="mb-12 text-center">
              <ShinyText
                text="FAQ"
                textColor="rgba(0, 212, 255, 0.85)"
                shineColor="#00D4FF"
                className="text-xs font-semibold uppercase tracking-[0.24em]"
              />
              <h2 className="mt-3">Everything You Need to Know</h2>
              <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-text-muted">
                Browse common questions about PrimeProX, AI-powered trading, market access, and platform functionality.
              </p>
            </div>
          </AnimatedContent>

          <div className="space-y-4">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <AnimatedContent
                  key={index}
                  direction="horizontal"
                  distance={80}
                  reverse={index % 2 === 0}
                  config={{ tension: 55, friction: 24 }}
                >
                  <div className="overflow-hidden rounded-4xl border border-border bg-linear-to-br from-bg-elevated to-bg-card transition-smooth hover:border-primary/35">
                    <button
                      type="button"
                      onClick={() => toggleItem(index)}
                      className="flex w-full items-start justify-between gap-4 p-5 text-left sm:p-6"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                          <Icon
                            icon={isOpen ? "mdi:minus" : "mdi:plus"}
                            width={20}
                            height={20}
                            className="text-primary"
                          />
                        </div>

                        <div>
                          <h3 className="text-base font-semibold leading-7 text-text-primary sm:text-lg">
                            {item.question}
                          </h3>
                        </div>
                      </div>

                      <Icon
                        icon={isOpen ? "mdi:chevron-up" : "mdi:chevron-down"}
                        width={22}
                        height={22}
                        className="mt-1 shrink-0 text-primary"
                      />
                    </button>

                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                          <div className="ml-15 border-l border-border pl-4 sm:pl-5">
                            <p className="text-sm leading-7 text-text-muted sm:text-base">{item.answer}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedContent>
              );
            })}
          </div>
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
                  words="Ready to Explore AI-Powered Trading?"
                  className="text-3xl font-bold leading-tight sm:text-4xl"
                  duration={0.4}
                  multiColored={true}
                  animated={false}
                />
              </div>

              <p className="mx-auto mt-4 max-w-3xl text-lg text-text-muted">
                Discover a smarter way to engage with the markets through advanced technology, automated execution, and
                intelligent trading systems.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Button className="px-8 py-3">Get Started Now</Button>
                <Button variant="outline" className="px-8 py-3">
                  Explore Quantum AI
                </Button>
              </div>
            </div>
          </AnimatedContent>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
