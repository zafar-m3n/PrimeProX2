import React from "react";
import { Link } from "react-router-dom";
import Icon from "../ui/Icon";

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
            <Link to="/" className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-primary to-secondary shadow-[0_0_30px_rgba(0,212,255,0.2)]">
                <span className="text-lg font-bold text-bg-main">P</span>
              </div>

              <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-2xl font-bold text-transparent">
                PrimeProX
              </span>
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

        {/* Risk Warning / Compliance */}
        <div className="mb-8 rounded-4xl border border-primary/15 bg-linear-to-br from-bg-elevated to-bg-card p-6 sm:p-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2">
            <Icon icon="mdi:alert-outline" width={16} height={16} className="text-primary" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Risk Warning</span>
          </div>

          <div className="space-y-5">
            <p className="text-sm leading-7 text-text-muted">
              <span className="font-semibold text-text-primary">Risk Warning:</span> Our services involve trading in
              complex financial instruments that carry a high level of risk and may not be suitable for all investors.
              You could lose all your invested capital. Please ensure you fully understand the risks involved, consider
              your level of experience, and seek independent financial advice if necessary. Past performance does not
              guarantee future results.
            </p>

            <p className="text-sm leading-7 text-text-muted">
              PrimeProX is proud to be a certified broker, duly licensed and regulated by CFS-ZIPP LIMITED. Our company
              number is 03925386, reflecting our commitment to maintaining the highest standards of financial integrity
              and transparency. Our registration address is 790 Uxbridge Road, Hayes, Middlesex, England, UB4 0RS.
            </p>

            <p className="text-sm leading-7 text-text-muted">
              We are also regulated under ZipMoney Securities Ltd (Licence No. 222040, ABN: 17 082 380 023, ACN: 082 380
              023), with the registation address: L7 180 GEORGE ST SYDNEY NSW 2000.
            </p>

            <p className="text-sm leading-7 text-text-muted">
              In addition, our server operations are regulated under Fiz Consultants Limited (Company No. 06145674),
              which is registered at the address 17 Holly Drive, Minster On Sea, Sheerness, Kent, ME12 3GR.
            </p>
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
