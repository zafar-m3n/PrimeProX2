import React, { useEffect } from "react";

import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import AnimatedContent from "@/components/ui/AnimatedContent";
import ShinyText from "@/components/ui/ShinyText";
import Spotlight from "@/components/ui/Spotlight";
import TextGenerateEffect from "@/components/ui/TextGenerateEffect";

const Promotions = () => {
  useEffect(() => {
    document.title = "PrimeProX | Promotions";
  }, []);

  const bonusStructure = [
    { deposit: "$300", trading: "$600" },
    { deposit: "$1,000", trading: "$2,000" },
    { deposit: "$2,500", trading: "$5,000" },
    { deposit: "$5,000", trading: "$10,000" },
    { deposit: "$10,000", trading: "$20,000" },
    { deposit: "$25,000", trading: "$50,000" },
    { deposit: "$50,000", trading: "$100,000" },
  ];

  const upgradeBonuses = [
    { from: "$300", to: "$1,000", bonus: "$150" },
    { from: "$1,000", to: "$2,500", bonus: "$350" },
    { from: "$2,500", to: "$5,000", bonus: "$750" },
    { from: "$5,000", to: "$10,000+", bonus: "VIP Benefits" },
  ];

  const higherPackagesBenefits = [
    {
      icon: "mdi:trending-up",
      title: "Higher Weekly Returns",
      desc: "AI algorithms perform better with more market exposure",
    },
    {
      icon: "mdi:gift",
      title: "Exclusive VIP Bonuses",
      desc: "Extra trading credits and rewards",
    },
    {
      icon: "mdi:chart-bell-curve",
      title: "Priority Market Insights",
      desc: "Real-time updates and recommendations",
    },
    {
      icon: "mdi:robot",
      title: "Enhanced AI Strategy",
      desc: "Institutional-level strategies for maximum profit",
    },
  ];

  const vipPerks = [
    { icon: "mdi:account-star", text: "Priority account setup & onboarding" },
    { icon: "mdi:headset", text: "Dedicated trading support" },
    { icon: "mdi:file-document-outline", text: "Access to private market insights & reports" },
    { icon: "mdi:star-circle", text: "Special loyalty bonuses for long-term trading" },
  ];

  const monthlyRewards = [
    { icon: "mdi:cash-plus", text: "Extra trading credits" },
    { icon: "mdi:star-circle", text: "Special VIP bonuses" },
    { icon: "mdi:access-point", text: "Access to exclusive investment programs" },
  ];

  const referralRewards = [
    "Earn up to $500 per successful referral",
    "Unlimited referrals allowed",
    "Instant bonus credit after activation",
  ];

  const specialOfferCards = [
    { deposit: "$5,000", result: "$10,000" },
    { deposit: "$10,000", result: "$20,000" },
    { deposit: "$25,000", result: "$50,000" },
    { deposit: "$50,000", result: "$100,000" },
  ];

  return (
    <div className="overflow-hidden bg-bg-main text-text-primary">
      {/* Hero */}
      <section className="relative isolate overflow-hidden py-20 sm:py-24 lg:py-32">
        <Spotlight className="-top-40 left-1/2 -translate-x-1/2" fill="rgba(0, 212, 255, 0.7)" />
        <div className="pointer-events-none absolute inset-0 gradient-mesh" />
        <div className="glow-orb glow-orb-cyan top-0 right-0 h-72 w-72 md:h-96 md:w-96" />
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
                <Icon icon="mdi:tag" width={16} height={16} className="text-primary" />
                <ShinyText
                  text="Promotions"
                  textColor="rgba(0, 212, 255, 0.85)"
                  shineColor="#00D4FF"
                  className="text-xs font-semibold uppercase tracking-[0.22em]"
                />
              </div>

              <div className="mx-auto max-w-3xl">
                <TextGenerateEffect
                  words="Exclusive Trading Rewards"
                  className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
                  duration={0.45}
                  multiColored={true}
                  animated={true}
                />
              </div>

              <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-text-muted md:text-lg">
                Our platform offers a variety of promotional programs designed to enhance your trading experience and
                provide additional value for our traders.
              </p>

              <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-text-muted">
                These promotions allow you to increase your trading capital, unlock extra benefits, and take full
                advantage of our AI-powered trading systems. Explore our latest promotions and maximize your trading
                potential with intelligent automated trading.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-sm text-text-muted">
                <span className="rounded-full border border-border bg-bg-card px-4 py-2">Deposit Bonus</span>
                <span className="rounded-full border border-border bg-bg-card px-4 py-2">VIP Rewards</span>
                <span className="rounded-full border border-border bg-bg-card px-4 py-2">Upgrade Benefits</span>
              </div>
            </div>
          </AnimatedContent>
        </div>
      </section>

      {/* India Special */}
      <section className="bg-bg-card py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedContent direction="horizontal" distance={100} reverse={false} config={{ tension: 55, friction: 24 }}>
            <div className="relative overflow-hidden rounded-4xl border border-primary/40 bg-linear-to-br from-primary/10 via-bg-elevated to-secondary/10 p-8 glow-cyan-lg lg:p-12">
              <div className="glow-orb glow-orb-cyan -top-20 -right-20 h-64 w-64" />

              <div className="relative z-10 flex flex-col items-center justify-between gap-8 lg:flex-row">
                <div className="flex-1 text-center lg:text-left">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-primary to-secondary px-4 py-2">
                    <Icon icon="mdi:star" width={20} height={20} />
                    <span className="text-sm font-bold uppercase tracking-wide text-white">India Special</span>
                  </div>

                  <h2 className="mb-4">Double Bonus for Indian Traders</h2>
                  <h3 className="mb-4 text-xl text-primary md:text-2xl">100% Deposit Bonus</h3>

                  <p className="mb-4 text-base leading-8 text-text-muted">
                    To celebrate our rapidly growing Indian trading community, we are offering a limited-time 100%
                    Deposit Bonus exclusively for Indian clients.
                  </p>

                  <p className="text-base font-semibold leading-8 text-text-primary">
                    This means your trading capital is doubled instantly, giving your AI system more market exposure and
                    higher potential profits.
                  </p>
                </div>

                <div className="w-full lg:min-w-[320px] lg:max-w-90">
                  <div className="rounded-4xl border border-primary bg-bg-card p-6 shadow-[0_0_40px_rgba(0,212,255,0.12)]">
                    <div className="mb-4 text-center">
                      <div className="mb-2 text-6xl font-bold text-primary">100%</div>
                      <p className="text-sm text-text-muted">Bonus Match</p>
                    </div>

                    <div className="rounded-2xl bg-bg-elevated p-4">
                      <p className="mb-2 text-xs text-text-dimmed">Example</p>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-text-muted">Deposit</span>
                        <span className="text-lg font-bold text-text-primary">$5,000</span>
                      </div>

                      <div className="my-2 flex items-center justify-center">
                        <Icon icon="mdi:arrow-down" width={20} height={20} className="text-primary" />
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-text-muted">Trade with</span>
                        <span className="text-2xl font-bold text-primary">$10,000</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedContent>
        </div>
      </section>

      {/* Bonus Structure */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedContent direction="horizontal" distance={100} reverse={true} config={{ tension: 55, friction: 24 }}>
            <div>
              <div className="mb-12 text-center">
                <ShinyText
                  text="Bonus Structure"
                  textColor="rgba(0, 212, 255, 0.85)"
                  shineColor="#00D4FF"
                  className="text-xs font-semibold uppercase tracking-[0.24em]"
                />
                <h2 className="mt-3 mb-4">Bonus Structure</h2>
                <p className="mx-auto max-w-2xl text-base text-text-muted">
                  See how your deposit instantly doubles with our 100% bonus program
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                {bonusStructure.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-3xl border border-border bg-linear-to-br from-bg-card to-bg-elevated p-6 transition-smooth hover:border-primary hover:glow-cyan"
                  >
                    <div className="text-center">
                      <p className="mb-2 text-xs text-text-dimmed">Deposit</p>
                      <p className="mb-3 text-2xl font-bold text-text-primary">{item.deposit}</p>
                      <Icon icon="mdi:arrow-down" width={24} height={24} className="mx-auto mb-3 text-primary" />
                      <p className="mb-2 text-xs text-text-dimmed">Trade with</p>
                      <p className="text-2xl font-bold text-primary">{item.trading}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedContent>
        </div>
      </section>

      {/* VIP Bonus + Referral Rewards */}
      <section className="bg-bg-card py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <AnimatedContent
              direction="horizontal"
              distance={100}
              reverse={true}
              config={{ tension: 55, friction: 24 }}
            >
              <div className="rounded-4xl border border-primary/30 bg-linear-to-br from-bg-elevated to-bg-card p-8 lg:h-full">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-br from-primary to-secondary">
                  <Icon icon="mdi:crown" width={28} height={28} />
                </div>

                <span className="text-xs font-semibold uppercase tracking-wide text-primary">VIP Bonus</span>
                <h3 className="mt-3 mb-4 text-xl font-semibold">Mega VIP Deposit Bonus</h3>

                <p className="mb-6 text-base leading-8 text-text-muted">
                  For traders activating higher AI systems, our Mega Capital Bonus provides exclusive rewards.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center justify-between rounded-2xl bg-bg-main p-4">
                    <div>
                      <p className="text-sm text-text-muted">Deposit $25,000</p>
                      <p className="text-lg font-bold text-primary">Get 120% Trading Power</p>
                    </div>
                    <Icon icon="mdi:lightning-bolt" width={32} height={32} className="text-primary" />
                  </div>

                  <div className="flex items-center justify-between rounded-2xl bg-bg-main p-4">
                    <div>
                      <p className="text-sm text-text-muted">Deposit $50,000</p>
                      <p className="text-lg font-bold text-primary">Get 130% Trading Power</p>
                    </div>
                    <Icon icon="mdi:rocket" width={32} height={32} className="text-primary" />
                  </div>
                </div>

                <p className="mt-6 text-sm leading-7 text-text-muted">
                  This ensures your AI system has maximum capital to trade efficiently and capture larger market
                  opportunities.
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
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-br from-primary to-secondary">
                  <Icon icon="mdi:account-multiple" width={28} height={28} />
                </div>

                <span className="text-xs font-semibold uppercase tracking-wide text-primary">Referral Rewards</span>
                <h3 className="mt-3 mb-4 text-xl font-semibold">Invite Friends and Earn Bonuses</h3>

                <p className="mb-6 text-base leading-8 text-text-muted">
                  Refer new traders to our platform and receive rewards when they join and activate their AI trading
                  system.
                </p>

                <ul className="space-y-3">
                  {referralRewards.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <Icon
                        icon="mdi:check-circle"
                        width={20}
                        height={20}
                        className="mr-3 mt-0.5 shrink-0 text-primary"
                      />
                      <span className="text-text-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedContent>
          </div>
        </div>
      </section>

      {/* Upgrade Bonus */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedContent direction="horizontal" distance={100} reverse={false} config={{ tension: 55, friction: 24 }}>
            <div>
              <div className="mb-12 text-center">
                <ShinyText
                  text="Upgrade Bonus"
                  textColor="rgba(0, 212, 255, 0.85)"
                  shineColor="#00D4FF"
                  className="text-xs font-semibold uppercase tracking-[0.24em]"
                />
                <h2 className="mt-3 mb-4">Move to Higher AI Systems and Get Extra Rewards</h2>
                <p className="mx-auto max-w-2xl text-base text-text-muted">
                  Clients upgrading to higher AI trading packages receive additional bonus rewards
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {upgradeBonuses.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-3xl border border-border bg-bg-card p-6 text-center transition-smooth hover:border-primary hover:glow-cyan"
                  >
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                      <Icon icon="mdi:arrow-up-bold" width={24} height={24} className="text-primary" />
                    </div>

                    <p className="mb-2 text-sm text-text-muted">Upgrade</p>
                    <p className="mb-1 text-lg font-semibold text-text-primary">
                      {item.from} → {item.to}
                    </p>

                    <div className="mt-4 rounded-2xl bg-linear-to-r from-primary/10 to-secondary/10 p-3">
                      <p className="text-xl font-bold text-primary">{item.bonus}</p>
                      {item.bonus.includes("$") && <p className="mt-1 text-xs text-text-dimmed">Bonus</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedContent>
        </div>
      </section>

      {/* Monthly Rewards */}
      <section className="bg-bg-card py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedContent direction="horizontal" distance={100} reverse={true} config={{ tension: 55, friction: 24 }}>
            <div className="rounded-4xl border border-border bg-linear-to-br from-bg-elevated to-bg-card p-8 lg:p-12">
              <div className="mb-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-primary to-secondary">
                  <Icon icon="mdi:calendar-star" width={32} height={32} />
                </div>

                <ShinyText
                  text="Monthly Rewards"
                  textColor="rgba(0, 212, 255, 0.85)"
                  shineColor="#00D4FF"
                  className="text-xs font-semibold uppercase tracking-[0.24em]"
                />
                <h3 className="mt-3 mb-4 text-xl font-semibold">Limited Time Trading Boost</h3>
                <p className="mx-auto max-w-2xl text-base text-text-muted">
                  Active traders each month may receive special promotional bonuses
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {monthlyRewards.map((item, i) => (
                  <div key={i} className="rounded-3xl bg-bg-main p-6 text-center">
                    <Icon icon={item.icon} width={40} height={40} className="mx-auto mb-3 text-primary" />
                    <p className="text-text-muted">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedContent>
        </div>
      </section>

      {/* Why Indian Traders Choose Higher Packages */}
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="glow-orb glow-orb-blue top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedContent direction="horizontal" distance={100} reverse={false} config={{ tension: 55, friction: 24 }}>
            <div>
              <div className="mb-12 text-center">
                <h2 className="mb-4">Why Indian Traders Choose Higher Packages</h2>
                <p className="mx-auto mb-2 max-w-3xl text-lg text-text-muted">Maximize Your Profits with AI Trading</p>
                <p className="mx-auto max-w-3xl text-base text-text-muted">
                  Most of our Indian clients prefer AI trading packages of $5,000 and above because higher deposits give
                  the AI system more flexibility to capture profitable trades.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {higherPackagesBenefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="rounded-3xl border border-border bg-linear-to-br from-bg-card to-bg-elevated p-6 transition-smooth hover:border-primary hover:glow-cyan"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/20">
                      <Icon icon={benefit.icon} width={24} height={24} className="text-primary" />
                    </div>
                    <h4 className="mb-2 text-base font-semibold">{benefit.title}</h4>
                    <p className="text-sm text-text-muted">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedContent>
        </div>
      </section>

      {/* Special Offer */}
      <section className="bg-bg-card py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedContent direction="horizontal" distance={100} reverse={true} config={{ tension: 55, friction: 24 }}>
            <div className="rounded-4xl border border-primary/40 bg-linear-to-br from-primary/10 via-bg-elevated to-secondary/10 p-8 glow-cyan-lg lg:p-12">
              <div className="mb-8 text-center">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-primary to-secondary px-4 py-2">
                  <Icon icon="mdi:fire" width={20} height={20} />
                  <span className="text-sm font-bold uppercase tracking-wide text-white">Special Offer</span>
                </div>

                <h2 className="mb-4">Double Your Trading Power</h2>
                <p className="mx-auto mb-6 max-w-3xl text-base leading-8 text-text-muted">
                  Indian traders depositing $5,000 or more receive a 100% deposit bonus, instantly doubling their
                  trading capital. This allows the AI trading system to analyze larger market positions and potentially
                  deliver higher profits.
                </p>
              </div>

              <div className="mb-2 grid grid-cols-2 gap-4 md:grid-cols-4">
                {specialOfferCards.map((item, i) => (
                  <div key={i} className="rounded-3xl border border-primary/30 bg-bg-card p-4 text-center">
                    <p className="mb-1 text-xs text-text-dimmed">Deposit</p>
                    <p className="mb-2 text-lg font-bold text-text-primary">{item.deposit}</p>
                    <Icon icon="mdi:arrow-down" width={16} height={16} className="mx-auto mb-2 text-primary" />
                    <p className="mb-1 text-xs text-text-dimmed">Trade with</p>
                    <p className="text-xl font-bold text-primary">{item.result}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedContent>
        </div>
      </section>

      {/* VIP Perks */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedContent direction="horizontal" distance={100} reverse={false} config={{ tension: 55, friction: 24 }}>
            <div>
              <div className="mb-12 text-center">
                <ShinyText
                  text="VIP Perks"
                  textColor="rgba(0, 212, 255, 0.85)"
                  shineColor="#00D4FF"
                  className="text-xs font-semibold uppercase tracking-[0.24em]"
                />
                <h2 className="mt-3 mb-4">Exclusive VIP Perks for Higher Packages</h2>
                <p className="mx-auto max-w-2xl text-base text-text-muted">
                  Clients investing in $5,000+ AI systems also receive
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {vipPerks.map((perk, index) => (
                  <div
                    key={index}
                    className="rounded-3xl border border-border bg-bg-card p-6 transition-smooth hover:border-primary hover:glow-cyan"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/20">
                        <Icon icon={perk.icon} width={20} height={20} className="text-primary" />
                      </div>
                      <p className="pt-2 text-sm text-text-muted">{perk.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedContent>
        </div>
      </section>

      {/* Why Start Small */}
      <section className="bg-bg-card py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedContent direction="horizontal" distance={100} reverse={true} config={{ tension: 55, friction: 24 }}>
            <div className="rounded-4xl border border-primary/30 bg-linear-to-br from-bg-elevated to-bg-card p-8 text-center lg:p-12">
              <h2 className="mb-4">Why Start Small When You Can Trade Big?</h2>
              <p className="mx-auto mb-4 max-w-3xl text-lg text-text-muted">
                By choosing higher packages, you allow the AI system to maximize your market exposure, adapt to more
                trading opportunities, and optimize weekly profits.
              </p>
              <p className="mx-auto max-w-3xl text-base text-text-muted">
                Data shows that clients with $5,000+ packages consistently experience higher returns and faster growth.
              </p>
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
                  words="Start Trading with Extra Power"
                  className="text-3xl font-bold leading-tight sm:text-4xl"
                  duration={0.4}
                  multiColored={true}
                  animated={false}
                />
              </div>

              <p className="mx-auto mt-4 max-w-3xl text-lg text-text-muted">
                Take advantage of our 100% deposit bonus and VIP perks. Let the AI system work with more capital to
                potentially deliver greater weekly profits.
              </p>

              <p className="mx-auto mt-4 max-w-3xl text-base font-semibold text-primary">
                Start with $5,000 or more → Double Your Trading Power
              </p>

              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Button className="px-8 py-3">Activate Bonus Now</Button>
                <Button variant="outline" className="px-8 py-3">
                  Upgrade Your Package
                </Button>
              </div>
            </div>
          </AnimatedContent>
        </div>
      </section>
    </div>
  );
};

export default Promotions;
