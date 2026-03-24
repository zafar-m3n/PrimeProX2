import React, { useEffect, useState } from "react";

import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import AnimatedContent from "@/components/ui/AnimatedContent";
import ShinyText from "@/components/ui/ShinyText";
import Spotlight from "@/components/ui/Spotlight";
import TextGenerateEffect from "@/components/ui/TextGenerateEffect";

const ContactUs = () => {
  useEffect(() => {
    document.title = "PrimeProX | Contact Us";
  }, []);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: "mdi:phone",
      title: "Phone",
      info: "+44 20 7946 1188",
      link: "tel:+442079461188",
    },
    {
      icon: "mdi:email",
      title: "Email",
      info: "support@primeprox.com",
      link: "mailto:support@primeprox.com",
    },
    {
      icon: "mdi:map-marker",
      title: "Address",
      info: "25 Canary Wharf View, London, United Kingdom",
      link: null,
    },
  ];

  const supportHighlights = [
    {
      icon: "mdi:clock-outline",
      title: "Quick Response",
      subtitle: "Within 24 hours",
    },
    {
      icon: "mdi:shield-check",
      title: "Secure Communication",
      subtitle: "Your data is protected",
    },
    {
      icon: "mdi:account-group",
      title: "Expert Team",
      subtitle: "Professional support",
    },
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
                <Icon icon="mdi:message-text-outline" width={16} height={16} className="text-primary" />
                <ShinyText
                  text="Contact Us"
                  textColor="rgba(0, 212, 255, 0.85)"
                  shineColor="#00D4FF"
                  className="text-xs font-semibold uppercase tracking-[0.22em]"
                />
              </div>

              <div className="mx-auto max-w-3xl">
                <TextGenerateEffect
                  words="Get in Touch With PrimeProX"
                  className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
                  duration={0.45}
                  multiColored={true}
                  animated={true}
                />
              </div>

              <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-text-muted md:text-lg">
                Reach out for general questions, platform guidance, or information about our AI trading systems and
                market-focused services.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-sm text-text-muted">
                <span className="rounded-full border border-border bg-bg-card px-4 py-2">General Support</span>
                <span className="rounded-full border border-border bg-bg-card px-4 py-2">AI Systems</span>
                <span className="rounded-full border border-border bg-bg-card px-4 py-2">Platform Guidance</span>
              </div>
            </div>
          </AnimatedContent>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedContent direction="horizontal" distance={100} reverse={true} config={{ tension: 55, friction: 24 }}>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="rounded-4xl border border-border bg-linear-to-br from-bg-card to-bg-elevated p-6 text-center transition-smooth hover:border-primary/35 hover:glow-cyan lg:p-8"
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-primary to-secondary">
                    <Icon icon={item.icon} width={28} height={28} />
                  </div>

                  <h3 className="mb-3 text-lg font-semibold">{item.title}</h3>

                  {item.link ? (
                    <a
                      href={item.link}
                      className="block text-sm font-medium text-primary transition-smooth hover:text-primary-hover"
                    >
                      {item.info}
                    </a>
                  ) : (
                    <p className="text-sm leading-7 text-text-muted">{item.info}</p>
                  )}
                </div>
              ))}
            </div>
          </AnimatedContent>
        </div>
      </section>

      {/* Contact Form + Side Content */}
      <section className="bg-bg-card py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <AnimatedContent
                direction="horizontal"
                distance={100}
                reverse={true}
                config={{ tension: 55, friction: 24 }}
              >
                <div className="lg:sticky lg:top-8">
                  <ShinyText
                    text="Send a Message"
                    textColor="rgba(0, 212, 255, 0.85)"
                    shineColor="#00D4FF"
                    className="text-xs font-semibold uppercase tracking-[0.24em]"
                  />

                  <h2 className="mt-3">Let&apos;s Start the Conversation</h2>

                  <p className="mt-4 text-base leading-8 text-text-muted">
                    Whether you want to learn more about PrimeProX, explore our AI systems, or ask general questions,
                    our team is here to help.
                  </p>

                  <div className="mt-8 overflow-hidden rounded-4xl border border-primary/20 bg-linear-to-br from-bg-elevated to-bg-card glow-cyan">
                    <img
                      src="https://picsum.photos/700/500?random=85"
                      alt="PrimeProX support team placeholder"
                      className="h-56 w-full object-cover"
                    />

                    <div className="p-6">
                      <div className="space-y-4">
                        {supportHighlights.map((item, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-3 rounded-2xl border border-border bg-bg-main/55 p-4"
                          >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                              <Icon icon={item.icon} width={20} height={20} className="text-primary" />
                            </div>

                            <div>
                              <p className="text-sm font-medium text-text-primary">{item.title}</p>
                              <p className="text-xs text-text-dimmed">{item.subtitle}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
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
                <div className="rounded-4xl border border-border bg-linear-to-br from-bg-elevated to-bg-card p-6 sm:p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-text-primary">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                          className="w-full rounded-2xl border border-border bg-bg-main/70 px-4 py-3 text-text-primary outline-none transition-smooth placeholder:text-text-dimmed focus:border-primary"
                          placeholder="John Smith"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="mb-2 block text-sm font-medium text-text-primary">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full rounded-2xl border border-border bg-bg-main/70 px-4 py-3 text-text-primary outline-none transition-smooth placeholder:text-text-dimmed focus:border-primary"
                          placeholder="john.smith@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="phone" className="mb-2 block text-sm font-medium text-text-primary">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full rounded-2xl border border-border bg-bg-main/70 px-4 py-3 text-text-primary outline-none transition-smooth placeholder:text-text-dimmed focus:border-primary"
                          placeholder="+44 20 1234 5678"
                        />
                      </div>

                      <div>
                        <label htmlFor="subject" className="mb-2 block text-sm font-medium text-text-primary">
                          Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full rounded-2xl border border-border bg-bg-main/70 px-4 py-3 text-text-primary outline-none transition-smooth placeholder:text-text-dimmed focus:border-primary"
                          placeholder="How can we help you?"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="mb-2 block text-sm font-medium text-text-primary">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full resize-none rounded-2xl border border-border bg-bg-main/70 px-4 py-3 text-text-primary outline-none transition-smooth placeholder:text-text-dimmed focus:border-primary"
                        placeholder="Tell us more about your inquiry..."
                      />
                    </div>

                    <div>
                      <Button type="submit" className="w-full px-8 py-4 text-base">
                        Send Message
                      </Button>
                      <p className="mt-3 text-center text-xs text-text-dimmed">
                        We&apos;ll get back to you as soon as possible.
                      </p>
                    </div>
                  </form>
                </div>
              </AnimatedContent>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="glow-orb glow-orb-cyan top-1/2 right-0 h-72 w-72 translate-x-1/2 -translate-y-1/2 md:h-96 md:w-96" />

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <AnimatedContent direction="horizontal" distance={100} reverse={false} config={{ tension: 55, friction: 24 }}>
            <div className="relative z-10 rounded-4xl border border-primary/30 bg-linear-to-br from-primary/10 via-bg-elevated to-secondary/10 p-8 text-center glow-cyan-lg lg:p-12">
              <ShinyText
                text="Need More Information?"
                textColor="rgba(0, 212, 255, 0.85)"
                shineColor="#00D4FF"
                className="text-xs font-semibold uppercase tracking-[0.24em]"
              />

              <div className="mx-auto max-w-3xl">
                <TextGenerateEffect
                  words="Explore More About PrimeProX"
                  className="text-3xl font-bold leading-tight sm:text-4xl"
                  duration={0.4}
                  multiColored={true}
                  animated={false}
                />
              </div>

              <p className="mx-auto mt-4 max-w-3xl text-lg text-text-muted">
                Need a quicker overview first? Visit the FAQ or Quantum AI page to learn more about the PrimeProX
                experience.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Button variant="outline" className="px-8 py-3">
                  View FAQ
                </Button>
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

export default ContactUs;
