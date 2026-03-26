import React from "react";
import { Link } from "react-router-dom";
import Icon from "../ui/Icon";

// ✅ import logo
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const investingLinks = [
    { name: "Account Types", path: "/investing/account-types" },
    { name: "Deposits & Withdrawals", path: "/investing/deposits-withdrawals" },
    { name: "Platforms", path: "/investing/platforms" },
    { name: "Education", path: "/investing/education" },
    { name: "Promotions", path: "/investing/promotions" },
  ];

  const companyLinks = [
    { name: "About Us", path: "/company/about-us" },
    { name: "FAQ", path: "/company/faq" },
    { name: "Contact Us", path: "/company/contact-us" },
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Quantum AI", path: "/quantum-ai" },
    { name: "Markets", path: "/markets" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms of Service", path: "/terms-and-conditions" },
    { name: "Risk Disclosure", path: "/risk-disclosure" },
  ];

  const socialLinks = [
    { name: "Twitter", icon: "mdi:twitter", url: "#" },
    { name: "Facebook", icon: "mdi:facebook", url: "#" },
    { name: "LinkedIn", icon: "mdi:linkedin", url: "#" },
    { name: "Instagram", icon: "mdi:instagram", url: "#" },
  ];

  return (
    <footer className="mt-auto border-t border-border bg-bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 pb-10 md:grid-cols-2 xl:grid-cols-5">
          <div className="xl:col-span-2">
            <Link to="/" className="mb-5 flex items-center">
              <img src={logo} alt="PrimeProX AI Trading Platform" className="h-20 w-auto object-contain" />
            </Link>

            <p className="max-w-md text-sm leading-7 text-text-muted">
              Your premier destination for advanced trading solutions. Experience cutting-edge technology, comprehensive
              market access, and professional-grade tools designed for modern investors.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  aria-label={social.name}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-bg-elevated text-text-muted transition-smooth hover:border-primary/30 hover:bg-bg-main hover:text-primary"
                >
                  <Icon icon={social.icon} width={20} height={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-base font-semibold text-text-primary">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-text-muted transition-colors hover:text-primary">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-base font-semibold text-text-primary">Investing</h4>
            <ul className="space-y-3">
              {investingLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-text-muted transition-colors hover:text-primary">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-base font-semibold text-text-primary">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-text-muted transition-colors hover:text-primary">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-center text-sm text-text-dimmed md:text-left">
            &copy; {currentYear} PrimeProX. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 text-sm md:justify-end">
            {legalLinks.map((link) => (
              <Link key={link.path} to={link.path} className="text-text-dimmed transition-colors hover:text-primary">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
