import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import AnimatedContent from "@/components/ui/AnimatedContent";
import ShinyText from "@/components/ui/ShinyText";
import Spotlight from "@/components/ui/Spotlight";
import TextGenerateEffect from "@/components/ui/TextGenerateEffect";

const AccountTypes = () => {
  useEffect(() => {
    document.title = "PrimeProX | Investing";
  }, []);

  const [expanded, setExpanded] = useState({});

  const accounts = useMemo(
    () => [
      {
        name: "Classic",
        price: "$200",
        type: "manual",
        features: [
          "Daily Analysis",
          "Leverage 1:100",
          "Events and trades",
          "Spreads – Fixed",
          "Conditional Stock Trading",
          "Upto 96 hours withdrawal",
          "24/5 Customer Support",
        ],
        cta: "Register Now!",
        accent: "Starter Access",
      },
      {
        name: "Funded",
        price: "$1000",
        type: "manual",
        features: [
          "$1000 Will be funded to your account",
          "Daily Analysis",
          "Leverage 1:150",
          "Events and trades",
          "Spreads – Fixed",
          "Conditional Stock Trading",
          "Conditional Commodities Trading",
          "Upto 72 hours withdrawal",
          "24/5 Customer Support",
        ],
        cta: "Register Now!",
        accent: "Growth Start",
      },
      {
        name: "Trader",
        price: "$5000",
        type: "manual",
        features: [
          "Daily Analysis",
          "Leverage 1:250",
          "Events and trades",
          "Spreads – Variable",
          "Stock Trading",
          "Commodities Trading",
          "Upto 48 hours withdrawal",
          "24/7 Customer Support",
        ],
        cta: "Register Now!",
        accent: "Active Trading",
      },
      {
        name: "Expert",
        price: "$10,000",
        type: "manual",
        features: [
          "Cashback Guaranteed",
          "Leverage 1:300",
          "Events and trades",
          "Spreads – Variable",
          "Stock Trading",
          "Commodities Trading",
          "Premium Analysis",
          "24/7 Support",
          "Upto 24 hours withdrawal",
          "Trading Central",
        ],
        cta: "Register Now!",
        accent: "Advanced Access",
      },
      {
        name: "Exclusive",
        price: "$25,000",
        type: "manual",
        features: [
          "Cashback Guaranteed",
          "Leverage 1:500",
          "Events and trades",
          "Spreads – Variable",
          "ROI Plan",
          "Stock Trading Priority Basis",
          "Crypto Trading",
          "Premium Analysis",
          "Upto 12 hours Withdrawal",
          "Premium Support",
          "Trading Central",
        ],
        cta: "Register Now!",
        accent: "Priority Benefits",
      },
      {
        name: "Premium",
        price: "$50,000",
        type: "manual",
        features: [
          "Cashback Guaranteed",
          "Leverage 1:1000",
          "Events and trades",
          "Spreads – Variable",
          "Stock Trading Priority Basis",
          "Crypto Trading",
          "Premium Analysis",
          "Prompt Withdrawals",
          "Premium Support",
          "Trading Central",
          "Max. No. of Simultaneous Open Deals",
          "Increased Asset Profit",
          "ROI Plan",
          "Dedicated Relationship Manager",
        ],
        cta: "Register Now!",
        accent: "Highest Tier",
        popular: true,
      },
    ],
    [],
  );

  const paymentMethods = [
    { name: "Visa", icon: "mdi:credit-card-outline" },
    { name: "Google Pay", icon: "mdi:google" },
    { name: "Mastercard", icon: "mdi:credit-card" },
    { name: "UPI", icon: "mdi:cash-fast" },
    { name: "Binance", icon: "simple-icons:binance" },
    { name: "Bank Transfer", icon: "mdi:bank-transfer" },
  ];

  const joinUsPoints = [
    {
      icon: "mdi:shield-check-outline",
      title: "Structured Account Options",
      description: "Choose a manual trading account that aligns with your capital level and trading needs.",
    },
    {
      icon: "mdi:clock-fast",
      title: "Faster Platform Access",
      description: "Move into the markets with a cleaner onboarding flow and account setup experience.",
    },
    {
      icon: "mdi:chart-line",
      title: "Broader Trading Potential",
      description: "Explore account tiers built around access, leverage, support, and market participation.",
    },
  ];

  const toggleExpand = (index) => {
    setExpanded((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
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
                    <Icon icon="mdi:wallet-membership" width={16} height={16} className="text-primary" />
                    <ShinyText
                      text="Manual Trading Account Types"
                      textColor="rgba(0, 212, 255, 0.85)"
                      shineColor="#00D4FF"
                      className="text-xs font-semibold uppercase tracking-[0.22em]"
                    />
                  </div>

                  <div className="max-w-3xl">
                    <TextGenerateEffect
                      words="Choose the Account That Matches Your Trading Level"
                      className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
                      duration={0.45}
                      multiColored={true}
                      animated={true}
                    />
                  </div>

                  <p className="mt-6 max-w-3xl text-base leading-8 text-text-muted md:text-lg">
                    Explore PrimeProX manual trading account types designed for different capital levels, trading
                    priorities, and platform access needs.
                  </p>

                  <p className="mt-4 max-w-3xl text-base leading-8 text-text-muted">
                    From entry-level access to premium trading support, each account tier is structured to offer a
                    different combination of leverage, market features, withdrawals, and customer service.
                  </p>

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

                  <div className="mt-10 flex flex-wrap gap-3 text-sm text-text-muted">
                    <span className="rounded-full border border-border bg-bg-card px-4 py-2">
                      Multiple Account Tiers
                    </span>
                    <span className="rounded-full border border-border bg-bg-card px-4 py-2">
                      Manual Trading Access
                    </span>
                    <span className="rounded-full border border-border bg-bg-card px-4 py-2">
                      Flexible Trading Levels
                    </span>
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
                      <Icon icon="mdi:wallet-membership" width={34} height={34} className="text-primary" />
                    </div>

                    <div className="space-y-4">
                      <div className="rounded-2xl border border-border bg-bg-main/50 p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Entry Levels</p>
                        <p className="mt-2 text-sm leading-7 text-text-muted">
                          Account options ranging from starter access to premium-level trading support.
                        </p>
                      </div>

                      <div className="rounded-2xl border border-border bg-bg-main/50 p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                          Trading Flexibility
                        </p>
                        <p className="mt-2 text-sm leading-7 text-text-muted">
                          Different leverage, market access, withdrawal timing, and support across account tiers.
                        </p>
                      </div>

                      <div className="rounded-2xl border border-border bg-bg-main/50 p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                          Platform Structure
                        </p>
                        <p className="mt-2 text-sm leading-7 text-text-muted">
                          Built to help traders compare options more clearly and select the right account type.
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

      {/* Accounts Grid */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedContent direction="horizontal" distance={100} reverse={true} config={{ tension: 55, friction: 24 }}>
            <div className="mb-12 text-center">
              <ShinyText
                text="Manual Trading Account Types"
                textColor="rgba(0, 212, 255, 0.85)"
                shineColor="#00D4FF"
                className="text-xs font-semibold uppercase tracking-[0.24em]"
              />
              <h2 className="mt-3">Compare Account Options</h2>
              <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-text-muted">
                Review account tiers, capital entry points, and built-in features to choose the right trading setup.
              </p>
            </div>
          </AnimatedContent>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {accounts.map((account, index) => {
              const isExpanded = !!expanded[index];
              const visibleFeatures = isExpanded ? account.features : account.features.slice(0, 6);

              return (
                <AnimatedContent
                  key={`manual-${index}`}
                  distance={100}
                  direction="horizontal"
                  reverse={index % 2 === 0}
                  config={{ tension: 50, friction: 25 }}
                  initialOpacity={0}
                >
                  <div
                    className={`relative overflow-hidden rounded-4xl border p-5 transition-smooth sm:p-6 ${
                      account.popular
                        ? "border-primary/35 bg-linear-to-br from-bg-elevated via-bg-card to-bg-elevated glow-cyan-lg"
                        : "border-border bg-linear-to-br from-bg-card to-bg-elevated hover:border-primary/35 hover:glow-cyan"
                    }`}
                  >
                    {account.popular && (
                      <div className="absolute right-4 top-4 z-10">
                        <span className="rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                          Most Premium
                        </span>
                      </div>
                    )}

                    <div className="mb-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{account.accent}</p>
                      <h3 className="mt-2 text-2xl font-bold">{account.name}</h3>
                      <div className="mt-4 rounded-2xl border border-primary/20 bg-primary/8 p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-dimmed">
                          Account Price
                        </p>
                        <p className="mt-2 text-3xl font-bold text-primary">{account.price}</p>
                      </div>
                    </div>

                    <div className="rounded-3xl border border-border bg-bg-main/35 p-4">
                      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-text-dimmed">
                        Features
                      </p>

                      <ul className="space-y-3">
                        {visibleFeatures.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-3 text-sm text-text-muted">
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

                      {account.features.length > 6 && (
                        <button
                          type="button"
                          onClick={() => toggleExpand(index)}
                          className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary transition-smooth hover:text-primary-hover"
                        >
                          <span>{isExpanded ? "Show Less" : "Show More"}</span>
                          <Icon icon={isExpanded ? "mdi:chevron-up" : "mdi:chevron-down"} width={18} height={18} />
                        </button>
                      )}
                    </div>

                    <div className="mt-6">
                      <Button className="w-full py-3">{account.cta}</Button>
                    </div>
                  </div>
                </AnimatedContent>
              );
            })}
          </div>
        </div>
      </section>

      {/* Payment Methods Marquee */}
      <section className="overflow-hidden bg-bg-card py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedContent direction="horizontal" distance={100} reverse={false} config={{ tension: 55, friction: 24 }}>
            <div>
              <div className="mb-10 text-center">
                <ShinyText
                  text="Payment Methods"
                  textColor="rgba(0, 212, 255, 0.85)"
                  shineColor="#00D4FF"
                  className="text-xs font-semibold uppercase tracking-[0.24em]"
                />
                <h2 className="mt-3">Flexible Funding Options</h2>
                <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-text-muted">
                  PrimeProX supports multiple payment methods to help traders move through account activation more
                  smoothly.
                </p>
              </div>

              <div className="relative">
                <div className="flex animate-marquee gap-6 hover:marquee-paused">
                  {[...paymentMethods, ...paymentMethods].map((method, index) => (
                    <div
                      key={index}
                      className="min-w-60 shrink-0 rounded-3xl border border-border bg-linear-to-br from-bg-elevated to-bg-card px-8 py-6"
                    >
                      <div className="flex items-center justify-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10">
                          <Icon icon={method.icon} width={22} height={22} className="text-primary" />
                        </div>
                        <p className="text-base font-semibold text-text-primary">{method.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
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
                  words="Choose an Account Built for Your Trading Goals"
                  className="text-3xl font-bold leading-tight sm:text-4xl"
                  duration={0.4}
                  multiColored={true}
                  animated={false}
                />
              </div>

              <p className="mx-auto mt-4 max-w-3xl text-lg text-text-muted">
                Explore account tiers designed around access, support, flexibility, and broader market participation.
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

export default AccountTypes;
