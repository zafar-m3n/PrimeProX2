import React, { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/Icon";

const WHATSAPP_NUMBER = "442079461188";

const chatOptions = [
  {
    id: 1,
    title: "New Client Support",
    subtitle: "Accounts, registration, and platform guidance",
    message: "Hello PrimeProX, I would like help with opening an account and getting started.",
  },
  {
    id: 2,
    title: "Existing Client Support",
    subtitle: "Deposits, withdrawals, and account assistance",
    message: "Hello PrimeProX, I am an existing client and need support with my account.",
  },
];

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  const togglePopup = () => {
    setIsOpen((prev) => !prev);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        closePopup();
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closePopup();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const getWhatsAppLink = (message) => {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div ref={wrapperRef} className="fixed right-5 bottom-5 z-70 flex items-center md:right-8 md:bottom-8">
      <div
        className={`absolute right-0 bottom-[calc(100%+16px)] w-[320px] origin-bottom-right overflow-hidden rounded-3xl border border-border bg-bg-card shadow-[0_20px_60px_rgba(0,0,0,0.45)] transition-all duration-300 sm:w-90 ${
          isOpen
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-3 scale-95 opacity-0"
        }`}
      >
        <div className="border-b border-primary/15 bg-linear-to-r from-primary/15 to-secondary/10 px-5 py-5">
          <div className="flex items-start gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/15 ring-1 ring-primary/25">
              <Icon icon="mdi:whatsapp" width={28} className="text-primary" />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-text-primary">Chat with PrimeProX</h3>
              <p className="mt-1 text-xs leading-6 text-text-muted">
                Connect with our support team on WhatsApp for faster assistance.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-bg-elevated px-5 py-5">
          <p className="mb-4 text-xs text-text-dimmed">Choose the option that best matches your enquiry.</p>

          <div className="space-y-4">
            {chatOptions.map((item) => (
              <a
                key={item.id}
                href={getWhatsAppLink(item.message)}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-border bg-bg-main/50 px-4 py-4 transition-smooth hover:border-primary/40 hover:bg-bg-main/80 hover:glow-cyan"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20 transition-smooth group-hover:scale-105">
                    <Icon icon="mdi:whatsapp" width={28} className="text-primary" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-text-primary">{item.title}</p>
                    <p className="text-xs text-text-muted">{item.subtitle}</p>
                  </div>
                </div>

                <Icon
                  icon="mdi:arrow-top-right"
                  width={22}
                  className="text-primary transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="relative mr-3 hidden overflow-hidden sm:block">
        <div
          className={`whitespace-nowrap rounded-full border border-border bg-bg-card/95 px-4 py-3 text-xs font-medium text-text-primary shadow-lg backdrop-blur-md transition-all duration-300 ${
            isOpen ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"
          }`}
        >
          Need help? Chat with us
        </div>
      </div>

      <button
        type="button"
        aria-label={isOpen ? "Close WhatsApp chat options" : "Open WhatsApp chat options"}
        aria-expanded={isOpen}
        onClick={togglePopup}
        className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-bg-main shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-smooth hover:scale-105 hover:bg-primary-hover"
      >
        <span
          className={`flex items-center justify-center transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <Icon icon={isOpen ? "mdi:close" : "mdi:whatsapp"} width={30} className="text-bg-main" />
        </span>
      </button>
    </div>
  );
};

export default WhatsAppButton;
