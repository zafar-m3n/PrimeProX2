import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "../ui/Icon";
import Button from "../ui/Button";
import logoHorizontal from "@/assets/logoHorizontal.png";
import experienceBadge from "@/assets/experience.jpeg";

const INVESTING_LINKS = [
  { name: "Account Types", path: "/investing/account-types" },
  { name: "Deposits & Withdrawals", path: "/investing/deposits-withdrawals" },
  { name: "Platforms", path: "/investing/platforms" },
];

const COMPANY_LINKS = [
  { name: "About Us", path: "/company/about-us" },
  { name: "FAQ", path: "/company/faq" },
  { name: "Contact Us", path: "/company/contact-us" },
];

const EXTERNAL_LINKS = {
  signIn: "https://portal.primeprox.com/login",
  register: "https://portal.primeprox.com/register",
};

const AUTO_WEALTH_BADGE = (
  <span className="ml-2 inline-flex items-center rounded-full border border-primary/25 bg-primary px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-bg-main shadow-lg shadow-primary/20">
    New
  </span>
);

const TRUST_POINTS_LEFT = [
  { icon: "mdi:lock-outline", text: "Secure Client Portal" },
  { icon: "mdi:chart-timeline-variant", text: "Advanced Trading Tools" },
];

const TRUST_POINTS_RIGHT = [
  { icon: "mdi:cash-fast", text: "Fast Withdrawals" },
  { icon: "mdi:earth", text: "Global Market Access" },
];

const Header = () => {
  const location = useLocation();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDesktopDropdown, setActiveDesktopDropdown] = useState(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);

  const closeTimeoutRef = useRef(null);

  const isActivePath = (path) => location.pathname === path;
  const isParentActive = (links) => links.some((link) => location.pathname === link.path);

  const clearCloseTimeout = () => {
    if (!closeTimeoutRef.current) return;
    clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = null;
  };

  const closeAllMenus = () => {
    setMobileMenuOpen(false);
    setActiveDesktopDropdown(null);
    setActiveMobileDropdown(null);
  };

  const openDesktopDropdown = (dropdownKey) => {
    clearCloseTimeout();
    setActiveDesktopDropdown(dropdownKey);
  };

  const closeDesktopDropdownWithDelay = () => {
    clearCloseTimeout();
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDesktopDropdown(null);
    }, 180);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => {
      const nextState = !prev;
      if (!nextState) {
        setActiveMobileDropdown(null);
      }
      return nextState;
    });
  };

  const toggleMobileDropdown = (dropdownKey) => {
    setActiveMobileDropdown((prev) => (prev === dropdownKey ? null : dropdownKey));
  };

  const openExternalLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    closeAllMenus();
  }, [location.pathname]);

  useEffect(() => {
    return () => {
      clearCloseTimeout();
    };
  }, []);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeAllMenus();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const desktopLinkClass = (active = false) =>
    `relative inline-flex items-center text-sm font-medium transition-smooth ${
      active ? "text-primary" : "text-text-primary hover:text-primary"
    }`;

  const desktopDropdownItemClass = (active = false) =>
    `block rounded-xl px-4 py-3 text-sm transition-smooth ${
      active ? "bg-bg-card text-primary" : "text-text-muted hover:bg-bg-card hover:text-primary"
    }`;

  const mobileLinkClass = (active = false) =>
    `block rounded-xl px-3 py-3 text-sm font-medium transition-smooth ${
      active ? "bg-primary/10 text-primary" : "text-text-primary hover:bg-bg-elevated hover:text-primary"
    }`;

  const mobileDropdownItemClass = (active = false) =>
    `block rounded-xl px-3 py-2.5 text-sm transition-smooth ${
      active ? "bg-primary/10 text-primary" : "text-text-muted hover:bg-bg-elevated hover:text-primary"
    }`;

  const renderDesktopDropdown = (dropdownKey, label, links) => {
    const open = activeDesktopDropdown === dropdownKey;
    const parentActive = isParentActive(links);

    return (
      <div
        className="relative"
        onMouseEnter={() => openDesktopDropdown(dropdownKey)}
        onMouseLeave={closeDesktopDropdownWithDelay}
      >
        <button
          type="button"
          className={`${desktopLinkClass(parentActive)} gap-1.5`}
          onClick={() => setActiveDesktopDropdown((prev) => (prev === dropdownKey ? null : dropdownKey))}
          aria-expanded={open}
          aria-haspopup="menu"
        >
          <span>{label}</span>
          <Icon
            icon="mdi:chevron-down"
            width={18}
            height={18}
            className={`transition-smooth ${open ? "rotate-180 text-primary" : ""}`}
          />
        </button>

        <div
          className={`absolute left-0 top-full z-50 pt-4 transition-smooth ${
            open ? "pointer-events-auto visible opacity-100" : "pointer-events-none invisible opacity-0"
          }`}
        >
          <div className="w-64 rounded-2xl border border-border bg-bg-elevated p-2 shadow-2xl glow-cyan">
            {links.map((link) => (
              <Link key={link.path} to={link.path} className={desktopDropdownItemClass(isActivePath(link.path))}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderMobileDropdown = (dropdownKey, label, links) => {
    const open = activeMobileDropdown === dropdownKey;
    const parentActive = isParentActive(links);

    return (
      <div className="rounded-2xl border border-border bg-bg-main/40">
        <button
          type="button"
          className={`flex w-full items-center justify-between rounded-2xl px-3 py-3 text-left text-sm font-medium transition-smooth ${
            parentActive || open ? "text-primary" : "text-text-primary hover:bg-bg-elevated hover:text-primary"
          }`}
          onClick={() => toggleMobileDropdown(dropdownKey)}
          aria-expanded={open}
          aria-controls={`mobile-dropdown-${dropdownKey}`}
        >
          <span>{label}</span>
          <Icon
            icon="mdi:chevron-down"
            width={20}
            height={20}
            className={`transition-smooth ${open ? "rotate-180 text-primary" : ""}`}
          />
        </button>

        <div
          id={`mobile-dropdown-${dropdownKey}`}
          className={`overflow-hidden transition-all duration-300 ease-out ${
            open ? "max-h-96 px-2 pb-2 opacity-100" : "max-h-0 px-2 pb-0 opacity-0"
          }`}
        >
          <div className="space-y-1 pt-1">
            {links.map((link) => (
              <Link key={link.path} to={link.path} className={mobileDropdownItemClass(isActivePath(link.path))}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderTrustText = (items, align = "left") => (
    <div className={`flex flex-wrap items-center gap-x-6 gap-y-2 ${align === "right" ? "justify-end" : ""}`}>
      {items.map((item) => (
        <div key={item.text} className="inline-flex items-center gap-2 text-sm text-text-primary">
          <Icon icon={item.icon} width={16} height={16} className="text-primary" />
          <span className="font-medium">{item.text}</span>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <div className="border-b border-border bg-bg-main">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="hidden items-center gap-6 lg:grid lg:grid-cols-[1fr_auto_1fr]">
            <div>{renderTrustText(TRUST_POINTS_LEFT, "left")}</div>

            <div className="flex justify-center px-4">
              <img src={experienceBadge} alt="17+ Years Market Experience" className="h-20 w-auto object-contain" />
            </div>

            <div>{renderTrustText(TRUST_POINTS_RIGHT, "right")}</div>
          </div>

          <div className="flex items-center justify-center lg:hidden">
            <img src={experienceBadge} alt="17+ Years Market Experience" className="h-20 w-auto object-contain" />
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-border bg-bg-card/95 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between gap-4">
            <Link to="/" className="flex items-center">
              <img
                src={logoHorizontal}
                alt="PrimeProX AI Trading Platform"
                className="h-12 w-auto object-contain"
                loading="eager"
              />
            </Link>

            <nav className="hidden items-center gap-8 lg:flex" aria-label="Desktop navigation">
              <Link to="/" className={desktopLinkClass(isActivePath("/"))}>
                Home
              </Link>

              {renderDesktopDropdown("investing", "Investing", INVESTING_LINKS)}

              <Link to="/quantum-ai" className={`${desktopLinkClass(isActivePath("/quantum-ai"))} gap-2`}>
                <span>AutoWealth AI</span>
                {AUTO_WEALTH_BADGE}
              </Link>

              <Link to="/investing/promotions" className={desktopLinkClass(isActivePath("/investing/promotions"))}>
                Promotions
              </Link>

              <Link to="/markets" className={desktopLinkClass(isActivePath("/markets"))}>
                Markets
              </Link>

              {renderDesktopDropdown("company", "Company", COMPANY_LINKS)}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <Button variant="outline" onClick={() => openExternalLink(EXTERNAL_LINKS.signIn)}>
                Sign In
              </Button>

              <Button className="shadow-lg shadow-primary/20" onClick={() => openExternalLink(EXTERNAL_LINKS.register)}>
                Get Started
              </Button>
            </div>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-bg-elevated text-text-primary transition-smooth hover:border-border-hover hover:text-primary lg:hidden"
              onClick={toggleMobileMenu}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              <Icon icon={mobileMenuOpen ? "mdi:close" : "mdi:menu"} width={24} height={24} />
            </button>
          </div>

          <div
            id="mobile-navigation"
            className={`overflow-hidden transition-all duration-300 ease-out lg:hidden ${
              mobileMenuOpen ? "max-h-[80vh] pb-4 opacity-100" : "max-h-0 pb-0 opacity-0"
            }`}
          >
            <nav className="space-y-2 border-t border-border pt-4" aria-label="Mobile navigation">
              <Link to="/" className={mobileLinkClass(isActivePath("/"))}>
                Home
              </Link>

              {renderMobileDropdown("investing", "Investing", INVESTING_LINKS)}

              <Link to="/quantum-ai" className={mobileLinkClass(isActivePath("/quantum-ai"))}>
                <span className="inline-flex items-center">
                  AutoWealth AI
                  {AUTO_WEALTH_BADGE}
                </span>
              </Link>

              <Link to="/investing/promotions" className={mobileLinkClass(isActivePath("/investing/promotions"))}>
                Promotions
              </Link>

              <Link to="/markets" className={mobileLinkClass(isActivePath("/markets"))}>
                Markets
              </Link>

              {renderMobileDropdown("company", "Company", COMPANY_LINKS)}

              <div className="grid grid-cols-1 gap-3 pt-3 sm:grid-cols-2">
                <Button variant="outline" className="w-full" onClick={() => openExternalLink(EXTERNAL_LINKS.signIn)}>
                  Sign In
                </Button>

                <Button
                  className="w-full shadow-lg shadow-primary/20"
                  onClick={() => openExternalLink(EXTERNAL_LINKS.register)}
                >
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
