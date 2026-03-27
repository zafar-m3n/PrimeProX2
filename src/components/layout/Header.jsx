import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "../ui/Icon";
import Button from "../ui/Button";
import logoHorizontal from "@/assets/logoHorizontal.png";

const Header = () => {
  const location = useLocation();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);

  const closeTimeoutRef = useRef(null);

  const investingLinks = [
    { name: "Account Types", path: "/investing/account-types" },
    { name: "Deposits & Withdrawals", path: "/investing/deposits-withdrawals" },
    { name: "Platforms", path: "/investing/platforms" },
  ];

  const companyLinks = [
    { name: "About Us", path: "/company/about-us" },
    { name: "FAQ", path: "/company/faq" },
    { name: "Contact Us", path: "/company/contact-us" },
  ];

  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const openDropdown = (name) => {
    clearCloseTimeout();
    setActiveDropdown(name);
  };

  const closeDropdownWithDelay = () => {
    clearCloseTimeout();
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  const closeEverything = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setActiveMobileDropdown(null);
  };

  useEffect(() => {
    closeEverything();
  }, [location.pathname]);

  useEffect(() => {
    return () => clearCloseTimeout();
  }, []);

  const isActive = (path) => location.pathname === path;
  const isParentActive = (paths) => paths.some((item) => location.pathname === item.path);

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

  const autoWealthAiBadge = (
    <span className="ml-2 inline-flex items-center rounded-full border border-primary/25 bg-primary px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-bg-main shadow-lg shadow-primary/20">
      New
    </span>
  );

  const renderDesktopDropdown = (key, label, links) => {
    const parentActive = isParentActive(links);
    const isOpen = activeDropdown === key;

    return (
      <div className="relative" onMouseEnter={() => openDropdown(key)} onMouseLeave={closeDropdownWithDelay}>
        <button
          type="button"
          className={`${desktopLinkClass(parentActive)} gap-1.5`}
          onClick={() => setActiveDropdown((prev) => (prev === key ? null : key))}
        >
          <span>{label}</span>
          <Icon
            icon="mdi:chevron-down"
            width={18}
            height={18}
            className={`transition-smooth ${isOpen ? "rotate-180 text-primary" : ""}`}
          />
        </button>

        <div
          className={`absolute left-0 top-full z-50 pt-4 transition-smooth ${
            isOpen ? "pointer-events-auto visible opacity-100" : "pointer-events-none invisible opacity-0"
          }`}
        >
          <div className="w-64 rounded-2xl border border-border bg-bg-elevated p-2 shadow-2xl glow-cyan">
            {links.map((link) => (
              <Link key={link.path} to={link.path} className={desktopDropdownItemClass(isActive(link.path))}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
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

          <nav className="hidden items-center gap-8 lg:flex">
            <Link to="/" className={desktopLinkClass(isActive("/"))}>
              Home
            </Link>

            {renderDesktopDropdown("investing", "Investing", investingLinks)}

            <Link to="/quantum-ai" className={`${desktopLinkClass(isActive("/quantum-ai"))} gap-2`}>
              <span>AutoWealth AI</span>
              {autoWealthAiBadge}
            </Link>

            <Link to="/investing/promotions" className={desktopLinkClass(isActive("/investing/promotions"))}>
              Promotions
            </Link>

            <Link to="/markets" className={desktopLinkClass(isActive("/markets"))}>
              Markets
            </Link>

            {renderDesktopDropdown("company", "Company", companyLinks)}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button variant="outline" onClick={() => window.open("https://portal.primeprox.com/login", "_blank")}>
              Sign In
            </Button>

            <Button
              className="shadow-lg shadow-primary/20"
              onClick={() => window.open("https://portal.primeprox.com/register", "_blank")}
            >
              Get Started
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-bg-elevated text-text-primary transition-smooth hover:border-border-hover hover:text-primary lg:hidden"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            <Icon icon={mobileMenuOpen ? "mdi:close" : "mdi:menu"} width={24} height={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
