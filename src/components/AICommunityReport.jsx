import React from "react";

import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import AnimatedContent from "@/components/ui/AnimatedContent";
import ShinyText from "@/components/ui/ShinyText";

const activatedSystems = [
  {
    rank: "1",
    medal: "🥇",
    name: "Quantum Prime",
    activations: "1,248",
    badgeClass: "from-lime-300 via-emerald-400 to-primary",
    rowClass: "border-lime-300/45 bg-linear-to-r from-lime-300/16 via-bg-card to-bg-elevated",
  },
  {
    rank: "2",
    medal: "🥈",
    name: "Quantum Edge",
    activations: "984",
    badgeClass: "from-lime-300 via-emerald-400 to-primary",
    rowClass: "border-emerald-400/35 bg-linear-to-r from-emerald-400/12 via-bg-card to-bg-elevated",
  },
  {
    rank: "3",
    medal: "🥉",
    name: "Quantum Elite",
    activations: "762",
    badgeClass: "from-emerald-300 via-emerald-400 to-primary/80",
    rowClass: "border-emerald-400/25 bg-linear-to-r from-emerald-400/8 via-bg-card to-bg-elevated",
  },
  {
    rank: "4",
    medal: "🏅",
    name: "Quantum Institutional",
    activations: "541",
    badgeClass: "from-emerald-300 to-emerald-500",
    rowClass: "border-border bg-linear-to-r from-bg-card via-bg-elevated to-bg-card",
  },
  {
    rank: "5",
    medal: "🏅",
    name: "Quantum Capital Pro",
    activations: "319",
    badgeClass: "from-emerald-300 to-emerald-500",
    rowClass: "border-border bg-linear-to-r from-bg-card via-bg-elevated to-bg-card",
  },
  {
    rank: "6",
    medal: "🏅",
    name: "Quantum Sovereign",
    activations: "167",
    badgeClass: "from-emerald-300 to-emerald-500",
    rowClass: "border-border bg-linear-to-r from-bg-card via-bg-elevated to-bg-card",
  },
  {
    rank: "7",
    medal: "🏅",
    name: "Quantum Core",
    activations: "4,731",
    badgeClass: "from-lime-300 via-emerald-400 to-primary",
    rowClass: "border-emerald-400/25 bg-linear-to-r from-emerald-400/10 via-bg-card to-bg-elevated",
  },
];

const communityStats = [
  {
    icon: "mdi:robot-excited",
    label: "Total AI System Activations",
    value: "8,752+",
  },
  {
    icon: "mdi:account-group",
    label: "Active Trading Accounts",
    value: "5,483+",
  },
  {
    icon: "mdi:cash-fast",
    label: "Total Withdrawals Processed",
    value: "$18.6M+",
    featured: true,
  },
  {
    icon: "mdi:chart-line",
    label: "Trades Executed",
    value: "2.8M+",
  },
  {
    icon: "mdi:flash",
    label: "Markets Monitored Daily",
    value: "50+",
  },
];

const recentActivations = [
  {
    city: "Mumbai",
    system: "Quantum Prime",
    icon: "mdi:city",
  },
  {
    city: "Chennai",
    system: "Quantum Edge",
    icon: "mdi:office-building-marker",
  },
  {
    city: "New Delhi",
    system: "Quantum Prime",
    icon: "mdi:bank",
  },
  {
    city: "Hyderabad",
    system: "Quantum Elite",
    icon: "mdi:tower-fire",
  },
  {
    city: "Bangalore",
    system: "Quantum Sovereign",
    icon: "mdi:domain",
  },
  {
    city: "Pune",
    system: "Quantum Institutional",
    icon: "mdi:warehouse",
  },
];

const trendingSystems = [
  {
    icon: "mdi:star",
    label: "Most Popular",
    name: "Quantum Prime",
  },
  {
    icon: "mdi:rocket-launch",
    label: "Fastest Growing",
    name: "Quantum Edge",
  },
  {
    icon: "mdi:crown",
    label: "Premium Choice",
    name: "Quantum Sovereign",
  },
  {
    icon: "mdi:diamond-stone",
    label: "Best for Beginners",
    name: "Quantum Core",
  },
];

const bottomStats = [
  {
    icon: "mdi:robot-excited",
    value: "8,752+",
    label: "AI Systems Activated",
  },
  {
    icon: "mdi:account-group",
    value: "5,483+",
    label: "Active Accounts",
  },
  {
    icon: "mdi:cash-fast",
    value: "$18.6M+",
    label: "Withdrawals Processed",
  },
  {
    icon: "mdi:chart-bar",
    value: "2.8M+",
    label: "Trades Executed",
  },
];

function AICommunityReport() {
  return (
    <section className="relative overflow-hidden bg-bg-main py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 gradient-mesh" />

      <div className="glow-orb glow-orb-cyan -top-24 right-0 h-72 w-72 md:h-96 md:w-96" />
      <div className="glow-orb glow-orb-blue bottom-0 left-0 h-72 w-72 md:h-96 md:w-96" />
      <div className="pointer-events-none absolute left-1/2 top-28 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/8 blur-3xl" />
      <div className="pointer-events-none absolute bottom-24 right-12 h-80 w-80 rounded-full bg-primary/6 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedContent
          direction="vertical"
          distance={100}
          reverse={false}
          config={{ tension: 55, friction: 24 }}
          initialOpacity={0}
        >
          <div className="overflow-hidden rounded-4xl border border-emerald-400/35 bg-linear-to-br from-bg-card via-bg-main to-bg-elevated p-4 shadow-[0_0_90px_rgba(52,211,153,0.16),0_0_42px_rgba(163,230,53,0.10),0_0_35px_rgba(0,212,255,0.06)] sm:p-6 lg:p-8">
            {/* Header */}
            <div className="relative overflow-hidden rounded-3xl border border-emerald-400/30 bg-bg-main p-6 text-center shadow-[0_0_56px_rgba(52,211,153,0.13),0_0_34px_rgba(0,212,255,0.06)] sm:p-8 lg:p-10">
              <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-emerald-400/16 via-bg-main to-primary/10" />
              <div className="pointer-events-none absolute left-10 top-10 h-28 w-28 rounded-full bg-primary/12 blur-3xl" />
              <div className="pointer-events-none absolute bottom-6 right-10 h-28 w-28 rounded-full bg-primary/10 blur-3xl" />

              <div className="relative z-10">
                <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-lime-300/40 bg-bg-card px-4 py-2 shadow-[0_0_34px_rgba(163,230,53,0.16),0_0_24px_rgba(52,211,153,0.14),0_0_16px_rgba(0,212,255,0.06)]">
                  <Icon icon="mdi:calendar-month" width={18} height={18} className="text-lime-300" />
                  <ShinyText
                    text="May 2026"
                    textColor="rgba(190, 242, 100, 0.95)"
                    shineColor="#34D399"
                    className="text-xs font-semibold uppercase tracking-[0.28em]"
                  />
                </div>

                <h2 className="mx-auto max-w-4xl text-3xl font-bold uppercase tracking-[0.12em] text-text-primary sm:text-4xl lg:text-5xl">
                  AI Community Report
                </h2>

                <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-text-muted sm:text-base">
                  Explore the latest AI trading community activity, system activations, and platform statistics from
                  across India.
                </p>
              </div>
            </div>

            {/* Top Dashboard Grid */}
            <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2">
              {/* Most Activated */}
              <div className="rounded-3xl border border-emerald-400/28 bg-linear-to-br from-bg-main via-bg-card to-bg-elevated p-5 shadow-[0_0_42px_rgba(52,211,153,0.10),0_0_24px_rgba(163,230,53,0.06),0_0_18px_rgba(0,212,255,0.04)] sm:p-6">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-lime-300/35 bg-linear-to-br from-lime-300/20 to-emerald-400/16 shadow-[0_0_26px_rgba(163,230,53,0.18),0_0_18px_rgba(52,211,153,0.12)]">
                    <Icon icon="mdi:trophy" width={22} height={22} className="text-lime-300" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lime-300">
                      Most Activated AI Systems
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-text-primary">May 2026 Rankings</h3>
                  </div>
                </div>

                <div className="space-y-2.5">
                  {activatedSystems.map((system) => (
                    <div
                      key={system.name}
                      className={`flex items-center justify-between gap-4 rounded-2xl border px-4 py-3 transition-smooth hover:border-lime-300/45 hover:shadow-[0_0_34px_rgba(163,230,53,0.16),0_0_24px_rgba(52,211,153,0.10)] ${system.rowClass}`}
                    >
                      <div className="flex min-w-0 items-center gap-3">
                        <div
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-linear-to-br ${system.badgeClass} text-sm font-bold text-white shadow-[0_0_24px_rgba(163,230,53,0.22),0_0_18px_rgba(52,211,153,0.16)]`}
                        >
                          {system.rank}
                        </div>

                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-sm">{system.medal}</span>
                            <p className="truncate text-sm font-semibold text-text-primary sm:text-base">
                              {system.name}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="text-right">
                        <p className="text-sm font-bold text-lime-300 sm:text-base">{system.activations}</p>
                        <p className="text-xs text-text-dimmed">Activations</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Community Statistics */}
              <div className="rounded-3xl border border-emerald-400/28 bg-linear-to-br from-bg-main via-bg-card to-bg-elevated p-5 shadow-[0_0_42px_rgba(52,211,153,0.10),0_0_24px_rgba(163,230,53,0.06),0_0_18px_rgba(0,212,255,0.04)] sm:p-6">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-lime-300/35 bg-linear-to-br from-lime-300/20 to-emerald-400/16 shadow-[0_0_26px_rgba(163,230,53,0.18),0_0_18px_rgba(52,211,153,0.12)]">
                    <Icon icon="mdi:chart-box" width={22} height={22} className="text-lime-300" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lime-300">
                      May 2026 Community Statistics
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-text-primary">Platform Activity Snapshot</h3>
                  </div>
                </div>

                <div className="space-y-3">
                  {communityStats.map((stat) => (
                    <div
                      key={stat.label}
                      className={`flex items-center justify-between gap-4 rounded-2xl border px-4 py-4 transition-smooth ${
                        stat.featured
                          ? "border-lime-300/45 bg-linear-to-r from-lime-300/16 via-emerald-400/8 to-bg-card shadow-[0_0_38px_rgba(163,230,53,0.18),0_0_30px_rgba(52,211,153,0.12)]"
                          : "border-emerald-400/15 bg-linear-to-r from-bg-card via-bg-elevated to-bg-card hover:border-lime-300/35 hover:shadow-[0_0_28px_rgba(163,230,53,0.11)]"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border ${
                            stat.featured
                              ? "border-lime-300/35 bg-lime-300/16"
                              : "border-emerald-400/24 bg-emerald-400/12"
                          }`}
                        >
                          <Icon
                            icon={stat.icon}
                            width={22}
                            height={22}
                            className={stat.featured ? "text-lime-300" : "text-emerald-300"}
                          />
                        </div>

                        <p className="text-sm text-text-muted sm:text-base">{stat.label}</p>
                      </div>

                      <p
                        className={`shrink-0 text-xl font-bold sm:text-2xl lg:text-3xl ${
                          stat.featured ? "text-lime-300" : "text-emerald-300"
                        }`}
                      >
                        {stat.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Activations */}
            <div className="mt-5 rounded-3xl border border-emerald-400/28 bg-linear-to-br from-bg-main via-bg-card to-bg-elevated p-5 shadow-[0_0_42px_rgba(52,211,153,0.10),0_0_24px_rgba(163,230,53,0.06),0_0_18px_rgba(0,212,255,0.04)] sm:p-6">
              <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-lime-300/35 bg-linear-to-br from-lime-300/20 to-emerald-400/16 shadow-[0_0_26px_rgba(163,230,53,0.18),0_0_18px_rgba(52,211,153,0.12)]">
                    <Icon icon="mdi:map-marker-radius" width={22} height={22} className="text-lime-300" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lime-300">
                      Recent Activations
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-text-primary">May 2026</h3>
                  </div>
                </div>

                <span className="w-fit rounded-full border border-lime-300/35 bg-linear-to-r from-lime-300/16 to-emerald-400/12 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-lime-300 shadow-[0_0_28px_rgba(163,230,53,0.15),0_0_18px_rgba(52,211,153,0.10)]">
                  Live Community Activity
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
                {recentActivations.map((activation) => (
                  <div
                    key={activation.city}
                    className="relative rounded-3xl border border-emerald-400/18 bg-linear-to-br from-bg-card via-bg-elevated to-bg-card p-4 text-center transition-smooth hover:border-lime-300/38 hover:shadow-[0_0_32px_rgba(163,230,53,0.13),0_0_22px_rgba(52,211,153,0.08)]"
                  >
                    <div className="absolute right-4 top-4 flex h-6 w-6 items-center justify-center rounded-full bg-linear-to-br from-lime-300 to-emerald-400 shadow-[0_0_20px_rgba(163,230,53,0.20),0_0_14px_rgba(52,211,153,0.14)]">
                      <Icon icon="mdi:check" width={14} height={14} className="text-bg-main" />
                    </div>

                    <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-lime-300/28 bg-linear-to-br from-lime-300/18 via-emerald-400/12 to-bg-card shadow-[0_0_28px_rgba(163,230,53,0.10),0_0_20px_rgba(52,211,153,0.08)]">
                      <Icon icon={activation.icon} width={34} height={34} className="text-lime-300" />
                    </div>

                    <h4 className="text-base font-semibold text-text-primary">{activation.city}</h4>
                    <p className="mt-1 text-sm leading-5 text-emerald-300">{activation.system}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Split */}
            <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-5">
              {/* Trending Systems */}
              <div className="rounded-3xl border border-emerald-400/28 bg-linear-to-br from-bg-main via-bg-card to-bg-elevated p-5 shadow-[0_0_42px_rgba(52,211,153,0.10),0_0_24px_rgba(163,230,53,0.06),0_0_18px_rgba(0,212,255,0.04)] sm:p-6 lg:col-span-2">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-lime-300/35 bg-linear-to-br from-lime-300/20 to-emerald-400/16 shadow-[0_0_26px_rgba(163,230,53,0.18),0_0_18px_rgba(52,211,153,0.12)]">
                    <Icon icon="mdi:fire" width={22} height={22} className="text-lime-300" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lime-300">
                      Trending AI Systems
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-text-primary">Community Picks</h3>
                  </div>
                </div>

                <div className="space-y-3">
                  {trendingSystems.map((system) => (
                    <div
                      key={system.label}
                      className="flex items-center gap-4 rounded-2xl border border-emerald-400/18 bg-linear-to-r from-bg-card via-bg-elevated to-bg-card p-4 transition-smooth hover:border-lime-300/38 hover:shadow-[0_0_30px_rgba(163,230,53,0.12),0_0_20px_rgba(52,211,153,0.08)]"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-lime-300/28 bg-linear-to-br from-lime-300/18 to-emerald-400/12">
                        <Icon icon={system.icon} width={24} height={24} className="text-lime-300" />
                      </div>

                      <div>
                        <p className="text-xs text-text-dimmed">{system.label}</p>
                        <p className="text-base font-semibold text-emerald-300">{system.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Join Community CTA */}
              <div className="relative overflow-hidden rounded-3xl border border-lime-300/38 bg-linear-to-br from-lime-300/14 via-emerald-400/8 to-bg-main p-6 shadow-[0_0_55px_rgba(163,230,53,0.16),0_0_38px_rgba(52,211,153,0.12),0_0_20px_rgba(0,212,255,0.05)] lg:col-span-3 lg:p-8">
                <div className="pointer-events-none absolute -right-20 top-1/2 -translate-y-1/2 opacity-10 sm:-right-10">
                  <Icon icon="twemoji:flag-india" width={360} height={360} />
                </div>

                <div className="pointer-events-none absolute -left-10 top-0 h-44 w-44 rounded-full bg-primary/12 blur-3xl" />
                <div className="pointer-events-none absolute bottom-0 right-0 h-60 w-60 rounded-full bg-primary/10 blur-3xl" />
                <div className="pointer-events-none absolute right-1/3 top-1/3 h-40 w-40 rounded-full bg-primary/6 blur-3xl" />

                <div className="relative z-10">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-lime-300/40 bg-bg-card px-4 py-2 shadow-[0_0_30px_rgba(163,230,53,0.16),0_0_20px_rgba(52,211,153,0.11)]">
                    <Icon icon="mdi:rocket-launch" width={18} height={18} className="text-lime-300" />
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-lime-300">
                      Join the Community
                    </span>
                  </div>

                  <h3 className="max-w-2xl text-2xl font-bold uppercase tracking-[0.08em] text-text-primary sm:text-3xl">
                    Join India&apos;s Growing AI Trading Community
                  </h3>

                  <p className="mt-5 max-w-2xl text-sm leading-7 text-text-muted sm:text-base">
                    Thousands of traders across India are exploring AI-powered trading systems designed to simplify
                    market participation through advanced automation, market analysis, and real-time monitoring.
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <Button className="px-6 py-3">
                      Start AI Trading Today
                      <Icon icon="mdi:arrow-right" width={18} height={18} className="ml-2" />
                    </Button>

                    <div className="rounded-2xl border border-lime-300/30 bg-bg-card/80 px-4 py-3 shadow-[0_0_24px_rgba(163,230,53,0.10)] backdrop-blur-sm">
                      <p className="text-xs uppercase tracking-wide text-text-dimmed">Community Growth</p>
                      <p className="text-lg font-bold text-lime-300">8,752+ Activations</p>
                    </div>

                    <div className="rounded-2xl border border-emerald-400/28 bg-bg-card/80 px-4 py-3 shadow-[0_0_22px_rgba(52,211,153,0.09)] backdrop-blur-sm">
                      <p className="text-xs uppercase tracking-wide text-text-dimmed">Daily Markets</p>
                      <p className="text-lg font-bold text-emerald-300">50+ Monitored</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Stat Bar */}
            <div className="mt-5 grid grid-cols-1 gap-3 rounded-3xl border border-emerald-400/28 bg-linear-to-r from-bg-main via-bg-card to-bg-main p-4 shadow-[0_0_40px_rgba(52,211,153,0.09),0_0_24px_rgba(163,230,53,0.06),0_0_14px_rgba(0,212,255,0.04)] sm:grid-cols-2 lg:grid-cols-4">
              {bottomStats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-4 rounded-2xl border border-emerald-400/18 bg-linear-to-r from-bg-card via-bg-elevated to-bg-card p-4 transition-smooth hover:border-lime-300/36 hover:shadow-[0_0_28px_rgba(163,230,53,0.11),0_0_18px_rgba(52,211,153,0.08)]"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-lime-300/28 bg-linear-to-br from-lime-300/18 to-emerald-400/12 shadow-[0_0_20px_rgba(163,230,53,0.09)]">
                    <Icon icon={stat.icon} width={26} height={26} className="text-lime-300" />
                  </div>

                  <div>
                    <p className="text-2xl font-bold text-lime-300">{stat.value}</p>
                    <p className="text-xs uppercase tracking-wide text-text-dimmed">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}

export default AICommunityReport;
