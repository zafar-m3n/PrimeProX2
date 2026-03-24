import React, { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";

import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import AnimatedContent from "@/components/ui/AnimatedContent";
import ShinyText from "@/components/ui/ShinyText";
import Spotlight from "@/components/ui/Spotlight";
import TextGenerateEffect from "@/components/ui/TextGenerateEffect";

const DepositsWithdrawals = () => {
  useEffect(() => {
    document.title = "PrimeProX | Investing";
  }, []);

  const accountData = useMemo(
    () => [
      {
        type: "Classic",
        minimumDeposit: "$200",
        minimumWithdrawal: "$100",
        timeFrame: "Up to 96 hours",
      },
      {
        type: "Funded",
        minimumDeposit: "$1,000",
        minimumWithdrawal: "$100",
        timeFrame: "Up to 72 hours",
      },
      {
        type: "Trader",
        minimumDeposit: "$5,000",
        minimumWithdrawal: "$100",
        timeFrame: "Up to 48 hours",
      },
      {
        type: "Expert",
        minimumDeposit: "$10,000",
        minimumWithdrawal: "$100",
        timeFrame: "Up to 24 hours",
      },
      {
        type: "Exclusive",
        minimumDeposit: "$25,000",
        minimumWithdrawal: "$100",
        timeFrame: "Up to 12 hours",
      },
      {
        type: "Premium",
        minimumDeposit: "$50,000",
        minimumWithdrawal: "$100",
        timeFrame: "Prompt Withdrawals",
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

  const transactionHighlights = [
    {
      icon: "mdi:shield-check-outline",
      title: "Secure Payment Flow",
      description: "Built to support safer deposits and withdrawals with trusted transaction pathways.",
    },
    {
      icon: "mdi:clock-outline",
      title: "Clear Processing Windows",
      description: "Account tiers include defined withdrawal timelines for a more transparent experience.",
    },
    {
      icon: "mdi:swap-horizontal-bold",
      title: "Smooth Account Funding",
      description: "Fund your account and manage transactions through a cleaner, more structured interface.",
    },
  ];

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
                    <Icon icon="mdi:bank-transfer-in" width={16} height={16} className="text-primary" />
                    <ShinyText
                      text="Efficiency"
                      textColor="rgba(0, 212, 255, 0.85)"
                      shineColor="#00D4FF"
                      className="text-xs font-semibold uppercase tracking-[0.22em]"
                    />
                  </div>

                  <div className="max-w-3xl">
                    <TextGenerateEffect
                      words="Seamless Financial Transactions"
                      className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
                      duration={0.45}
                      multiColored={true}
                      animated={true}
                    />
                  </div>

                  <p className="mt-6 max-w-3xl text-base leading-8 text-text-muted md:text-lg">
                    At PrimeProX, we understand the importance of smooth and secure financial transactions in the world
                    of trading. Our platform offers a user-friendly interface for hassle-free deposits and withdrawals.
                    Easily fund your account to start trading or withdraw your profits with confidence.
                  </p>

                  <p className="mt-4 max-w-3xl text-base leading-8 text-text-muted">
                    We provide a variety of secure payment methods, ensuring that your financial transactions are
                    conducted seamlessly. Enjoy a smooth experience for both deposits and withdrawals, allowing you to
                    focus on your trading strategies with peace of mind.
                  </p>

                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <Link to="/investing/account-types">
                      <Button className="px-8 py-3">View Account Types</Button>
                    </Link>

                    <Link to="/investing/promotions">
                      <Button variant="outline" className="px-8 py-3">
                        View Promotions
                      </Button>
                    </Link>
                  </div>

                  <div className="mt-10 flex flex-wrap gap-3 text-sm text-text-muted">
                    <span className="rounded-full border border-border bg-bg-card px-4 py-2">Secure Transactions</span>
                    <span className="rounded-full border border-border bg-bg-card px-4 py-2">Smooth Funding</span>
                    <span className="rounded-full border border-border bg-bg-card px-4 py-2">Clear Time Frames</span>
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
                      src="https://picsum.photos/1200/900?random=301"
                      alt="Deposits and withdrawals"
                      className="h-80 w-full rounded-3xl object-cover sm:h-112"
                    />
                    <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-primary/20 bg-bg-main/85 p-5 backdrop-blur-md">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Transaction flow</p>
                      <p className="mt-2 text-sm leading-7 text-text-muted">
                        Fund your account, manage withdrawals, and move through the platform with more confidence and
                        clarity.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    {transactionHighlights.map((item, index) => (
                      <div
                        key={index}
                        className="rounded-3xl border border-border bg-linear-to-br from-bg-card to-bg-elevated p-5 transition-smooth hover:border-primary/30"
                      >
                        <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10">
                          <Icon icon={item.icon} width={20} height={20} className="text-primary" />
                        </div>
                        <h4 className="text-sm">{item.title}</h4>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedContent>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
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
                <h2 className="mt-3">Flexible Ways to Fund Your Account</h2>
                <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-text-muted">
                  PrimeProX supports multiple payment methods to help make deposits and withdrawals feel more
                  convenient.
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

      {/* Details Table */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedContent direction="horizontal" distance={100} reverse={true} config={{ tension: 55, friction: 24 }}>
            <div>
              <div className="mb-12">
                <ShinyText
                  text="Deposit & Withdrawal Details"
                  textColor="rgba(0, 212, 255, 0.85)"
                  shineColor="#00D4FF"
                  className="text-xs font-semibold uppercase tracking-[0.24em]"
                />
                <h2 className="mt-3">Account Funding and Withdrawal Overview</h2>
                <p className="mt-4 max-w-3xl text-base leading-8 text-text-muted">
                  Review deposit requirements, withdrawal minimums, and general time frames across account types.
                </p>
              </div>

              {/* Desktop Table */}
              <div className="hidden overflow-hidden rounded-4xl border border-border bg-bg-card shadow-[0_10px_40px_rgba(0,0,0,0.25)] md:block">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-bg-elevated">
                      <th className="border-b border-border px-6 py-4 text-left text-sm font-semibold text-primary">
                        Type
                      </th>
                      <th className="border-b border-border px-6 py-4 text-left text-sm font-semibold text-primary">
                        Minimum Deposit
                      </th>
                      <th className="border-b border-border px-6 py-4 text-left text-sm font-semibold text-primary">
                        Minimum Withdrawal
                      </th>
                      <th className="border-b border-border px-6 py-4 text-left text-sm font-semibold text-primary">
                        Dep - With - Time Frame
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {accountData.map((account, index) => (
                      <tr
                        key={index}
                        className={`transition-smooth hover:bg-bg-main/40 ${
                          index % 2 === 0 ? "bg-bg-card" : "bg-bg-main/25"
                        }`}
                      >
                        <td className="border-b border-border px-6 py-5 text-sm text-text-primary">{account.type}</td>
                        <td className="border-b border-border px-6 py-5 text-sm text-text-muted">
                          {account.minimumDeposit}
                        </td>
                        <td className="border-b border-border px-6 py-5 text-sm text-text-muted">
                          {account.minimumWithdrawal}
                        </td>
                        <td className="border-b border-border px-6 py-5 text-sm text-text-muted">
                          {account.timeFrame}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="space-y-4 md:hidden">
                {accountData.map((account, index) => (
                  <div
                    key={index}
                    className="rounded-4xl border border-border bg-linear-to-br from-bg-card to-bg-elevated p-5 transition-smooth hover:border-primary/35 hover:glow-cyan"
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="text-lg">{account.type}</h3>
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10">
                        <Icon icon="mdi:bank-transfer" width={20} height={20} className="text-primary" />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="rounded-2xl border border-border bg-bg-main/45 p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-dimmed">
                          Minimum Deposit
                        </p>
                        <p className="mt-2 text-sm text-text-primary">{account.minimumDeposit}</p>
                      </div>

                      <div className="rounded-2xl border border-border bg-bg-main/45 p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-dimmed">
                          Minimum Withdrawal
                        </p>
                        <p className="mt-2 text-sm text-text-primary">{account.minimumWithdrawal}</p>
                      </div>

                      <div className="rounded-2xl border border-border bg-bg-main/45 p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-dimmed">
                          Dep - With - Time Frame
                        </p>
                        <p className="mt-2 text-sm text-text-primary">{account.timeFrame}</p>
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
                  words="Fund Your Account with a Smoother Trading Experience"
                  className="text-3xl font-bold leading-tight sm:text-4xl"
                  duration={0.4}
                  multiColored={true}
                  animated={false}
                />
              </div>

              <p className="mx-auto mt-4 max-w-3xl text-lg text-text-muted">
                Explore account funding options, review withdrawal timelines, and move through the platform with more
                clarity and confidence.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Link to="/investing/account-types">
                  <Button className="px-8 py-3">View Account Types</Button>
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

export default DepositsWithdrawals;
