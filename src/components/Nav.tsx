"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Button from "@/components/common/Button";
import { useScrollY } from "@/lib/useScrollY";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Books", href: "#books" },
  { label: "Speaker", href: "#speaker" },
  { label: "Founder", href: "#founder" },
  { label: "Brands", href: "#brands" },
];

const SECTION_IDS = NAV_LINKS.map((link) => link.href.slice(1));

const menuContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const menuItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function scrollToSection(href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 80;
  window.scrollTo({ top, behavior: "smooth" });
}

function NavLink({
  label,
  href,
  active,
  onNavigate,
  className = "",
}: {
  label: string;
  href: string;
  active: boolean;
  onNavigate?: () => void;
  className?: string;
}) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToSection(href);
    onNavigate?.();
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`group relative font-body font-normal tracking-[0.08em] transition-colors duration-200 ${className}`}
      style={{
        fontSize: "0.85rem",
        color: active ? "var(--storia-black)" : "var(--storia-gray)",
      }}
    >
      <span className="relative inline-block pb-0.5">
        {label}
        <span
          className={`absolute bottom-0 left-0 h-px w-full origin-left bg-[var(--storia-black)] transition-transform duration-[250ms] ease-[ease] ${
            active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
          }`}
        />
      </span>
    </a>
  );
}

function HamburgerButton({
  open,
  onClick,
}: {
  open: boolean;
  onClick: () => void;
}) {
  const barClass = "block h-0.5 w-5 bg-[var(--storia-black)]";

  return (
    <button
      type="button"
      onClick={onClick}
      className="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
    >
      <span className="relative flex h-5 w-5 items-center justify-center">
        <motion.span
          className={`absolute ${barClass}`}
          animate={{
            rotate: open ? 45 : 0,
            y: open ? 0 : -6,
          }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        />
        <AnimatePresence>
          {!open && (
            <motion.span
              key="bar-mid"
              className={`absolute ${barClass}`}
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              exit={{ opacity: 0, scaleX: 0 }}
              transition={{ duration: 0.2 }}
            />
          )}
        </AnimatePresence>
        <motion.span
          className={`absolute ${barClass}`}
          animate={{
            rotate: open ? -45 : 0,
            y: open ? 0 : 6,
          }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        />
      </span>
    </button>
  );
}

export default function Nav() {
  const scrollY = useScrollY();
  const scrolled = scrollY > 50;
  const [activeSection, setActiveSection] = useState<string>("about");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = SECTION_IDS.map((id) =>
      document.getElementById(id),
    ).filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length === 0) return;

        const best = visible.reduce((a, b) =>
          a.intersectionRatio >= b.intersectionRatio ? a : b,
        );
        setActiveSection(best.target.id);
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleCtaClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      scrollToSection("#contact");
      setMenuOpen(false);
    },
    [],
  );

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-10"
        initial={false}
        animate={{
          backgroundColor: scrolled
            ? "var(--storia-beige)"
            : "rgba(243, 238, 232, 0)",
          backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
          borderBottomWidth: scrolled ? 1 : 0,
          borderBottomStyle: "solid",
          borderBottomColor: scrolled
            ? "var(--storia-black15)"
            : "rgba(33, 37, 41, 0)",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Logo */}
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#about");
          }}
          className="font-display font-light text-[var(--storia-blackLight)] transition-opacity hover:opacity-80"
          style={{
            fontSize: "1.4rem",
            letterSpacing: "0.15em",
          }}
        >
          Elizabeth
        </a>

        {/* Desktop nav links */}
        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <NavLink
                label={link.label}
                href={link.href}
                active={activeSection === link.href.slice(1)}
              />
            </li>
          ))}
        </ul>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-4">
          <span className="relative hidden md:inline-block">
            <Button color="var(--storia-orange)" onClick={handleCtaClick}>
              {"Let's chat"}
            </Button>
          </span>

          <HamburgerButton
            open={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>
      </motion.nav>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center md:hidden"
            style={{ background: "var(--storia-beige)" }}
          >
            <motion.ul
              variants={menuContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center gap-8"
            >
              {NAV_LINKS.map((link) => (
                <motion.li key={link.href} variants={menuItem}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                      setMenuOpen(false);
                    }}
                    className="font-display font-light text-[var(--storia-black)]"
                    style={{
                      fontSize: "2.5rem",
                      color:
                        activeSection === link.href.slice(1)
                          ? "var(--storia-black)"
                          : "var(--storia-gray)",
                    }}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li variants={menuItem} className="mt-4">
                <Button color="var(--storia-orange)" onClick={handleCtaClick}>
                  {"Let's chat"}
                </Button>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
