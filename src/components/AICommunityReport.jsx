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
    badgeClass: "from-primary to-secondary",
  },
  {
    rank: "2",
    medal: "🥈",
    name: "Quantum Edge",
    activations: "984",
    badgeClass: "from-bg-elevated to-border",
  },
  {
    rank: "3",
    medal: "🥉",
    name: "Quantum Elite",
    activations: "762",
    badgeClass: "from-secondary to-accent",
  },
  {
    rank: "4",
    medal: "🏅",
    name: "Quantum Institutional",
    activations: "541",
    badgeClass: "from-bg-elevated to-border",
  },
  {
    rank: "5",
    medal: "🏅",
    name: "Quantum Capital Pro",
    activations: "319",
    badgeClass: "from-bg-elevated to-border",
  },
  {
    rank: "6",
    medal: "🏅",
    name: "Quantum Sovereign",
    activations: "167",
    badgeClass: "from-bg-elevated to-border",
  },
  {
    rank: "7",
    medal: "🏅",
    name: "Quantum Core",
    activations: "4,731",
    badgeClass: "from-bg-elevated to-border",
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

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedContent
          direction="vertical"
          distance={100}
          reverse={false}
          config={{ tension: 55, friction: 24 }}
          initialOpacity={0}
        >
          <div className="overflow-hidden rounded-4xl border border-primary/25 bg-linear-to-br from-bg-card via-bg-main to-bg-elevated p-4 shadow-[0_0_60px_rgba(0,212,255,0.08)] sm:p-6 lg:p-8">
            {/* Header */}
            <div className="relative overflow-hidden rounded-3xl border border-border bg-bg-main p-6 text-center sm:p-8 lg:p-10">
              <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-primary/10 via-transparent to-secondary/10" />

              <div className="relative z-10">
                <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-primary/25 bg-bg-card px-4 py-2">
                  <Icon icon="mdi:calendar-month" width={18} height={18} className="text-primary" />
                  <ShinyText
                    text="May 2026"
                    textColor="rgba(0, 212, 255, 0.85)"
                    shineColor="#00D4FF"
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
              <div className="rounded-3xl border border-border bg-bg-main p-5 sm:p-6">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/15">
                    <Icon icon="mdi:trophy" width={22} height={22} className="text-primary" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                      Most Activated AI Systems
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-text-primary">May 2026 Rankings</h3>
                  </div>
                </div>

                <div className="space-y-2">
                  {activatedSystems.map((system) => (
                    <div
                      key={system.name}
                      className="flex items-center justify-between gap-4 rounded-2xl border border-border bg-bg-card px-4 py-3"
                    >
                      <div className="flex min-w-0 items-center gap-3">
                        <div
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-linear-to-br ${system.badgeClass} text-sm font-bold text-white`}
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
                        <p className="text-sm font-bold text-primary sm:text-base">{system.activations}</p>
                        <p className="text-xs text-text-dimmed">Activations</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Community Statistics */}
              <div className="rounded-3xl border border-border bg-bg-main p-5 sm:p-6">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/15">
                    <Icon icon="mdi:chart-box" width={22} height={22} className="text-primary" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                      May 2026 Community Statistics
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-text-primary">Platform Activity Snapshot</h3>
                  </div>
                </div>

                <div className="space-y-3">
                  {communityStats.map((stat) => (
                    <div
                      key={stat.label}
                      className={`flex items-center justify-between gap-4 rounded-2xl border px-4 py-4 ${
                        stat.featured
                          ? "border-primary bg-primary/10 shadow-[0_0_35px_rgba(0,212,255,0.12)]"
                          : "border-border bg-bg-card"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-primary/15">
                          <Icon icon={stat.icon} width={22} height={22} className="text-primary" />
                        </div>

                        <p className="text-sm text-text-muted sm:text-base">{stat.label}</p>
                      </div>

                      <p className="shrink-0 text-xl font-bold text-primary sm:text-2xl lg:text-3xl">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Activations */}
            <div className="mt-5 rounded-3xl border border-border bg-bg-main p-5 sm:p-6">
              <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/15">
                    <Icon icon="mdi:map-marker-radius" width={22} height={22} className="text-primary" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Recent Activations</p>
                    <h3 className="mt-1 text-lg font-semibold text-text-primary">May 2026</h3>
                  </div>
                </div>

                <span className="w-fit rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-primary">
                  Live Community Activity
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
                {recentActivations.map((activation) => (
                  <div
                    key={activation.city}
                    className="relative rounded-3xl border border-border bg-bg-card p-4 text-center transition-smooth hover:border-primary hover:glow-cyan"
                  >
                    <div className="absolute right-4 top-4 flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                      <Icon icon="mdi:check" width={14} height={14} className="text-white" />
                    </div>

                    <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-primary/25 bg-linear-to-br from-primary/20 to-secondary/10">
                      <Icon icon={activation.icon} width={34} height={34} className="text-primary" />
                    </div>

                    <h4 className="text-base font-semibold text-text-primary">{activation.city}</h4>
                    <p className="mt-1 text-sm leading-5 text-primary">{activation.system}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Split */}
            <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-5">
              {/* Trending Systems */}
              <div className="rounded-3xl border border-border bg-bg-main p-5 sm:p-6 lg:col-span-2">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/15">
                    <Icon icon="mdi:fire" width={22} height={22} className="text-primary" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                      Trending AI Systems
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-text-primary">Community Picks</h3>
                  </div>
                </div>

                <div className="space-y-3">
                  {trendingSystems.map((system) => (
                    <div
                      key={system.label}
                      className="flex items-center gap-4 rounded-2xl border border-border bg-bg-card p-4 transition-smooth hover:border-primary"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/15">
                        <Icon icon={system.icon} width={24} height={24} className="text-primary" />
                      </div>

                      <div>
                        <p className="text-xs text-text-dimmed">{system.label}</p>
                        <p className="text-base font-semibold text-primary">{system.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Join Community CTA */}
              <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-linear-to-br from-primary/10 via-bg-main to-secondary/10 p-6 lg:col-span-3 lg:p-8">
                <div className="pointer-events-none absolute -right-20 top-1/2 -translate-y-1/2 opacity-10 sm:-right-10">
                  <Icon icon="twemoji:flag-india" width={360} height={360} />
                </div>

                <div className="pointer-events-none absolute bottom-0 right-0 h-56 w-56 bg-primary/10 blur-3xl" />
                <div className="glow-orb glow-orb-cyan -right-16 top-1/2 h-56 w-56 -translate-y-1/2" />

                <div className="relative z-10">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-bg-card px-4 py-2">
                    <Icon icon="mdi:rocket-launch" width={18} height={18} className="text-primary" />
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
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
                    <Button className="px-6 py-3">Start AI Trading Today</Button>

                    <div className="rounded-2xl border border-primary/20 bg-bg-card/80 px-4 py-3 backdrop-blur-sm">
                      <p className="text-xs uppercase tracking-wide text-text-dimmed">Community Growth</p>
                      <p className="text-lg font-bold text-primary">8,752+ Activations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Stat Bar */}
            <div className="mt-5 grid grid-cols-1 gap-3 rounded-3xl border border-border bg-bg-main p-4 sm:grid-cols-2 lg:grid-cols-4">
              {bottomStats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-4 rounded-2xl border border-border bg-bg-card p-4"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/15">
                    <Icon icon={stat.icon} width={26} height={26} className="text-primary" />
                  </div>

                  <div>
                    <p className="text-2xl font-bold text-primary">{stat.value}</p>
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
