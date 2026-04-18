"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import contents from "@/data/contents.json";
import { DarkmodeToggle } from "@/components/Darkmode";
import styles from "./Navigation.module.css";

export function Navigation() {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement | null>(null);
  const mobileDetailsRef = useRef<HTMLDetailsElement | null>(null);
  const toggleRef = useRef<HTMLElement | null>(null);
  const closingTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuClosing, setMenuClosing] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    return () => {
      if (closingTimerRef.current) {
        clearTimeout(closingTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const updateRevealOrigin = () => {
      const nav = navRef.current;
      const toggle = toggleRef.current;

      if (!nav || !toggle) {
        return;
      }

      const rect = toggle.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      nav.style.setProperty("--reveal-x", `${centerX}px`);
      nav.style.setProperty("--reveal-y", `${centerY}px`);
    };

    updateRevealOrigin();
    window.addEventListener("resize", updateRevealOrigin);

    return () => {
      window.removeEventListener("resize", updateRevealOrigin);
    };
  }, []);

  useEffect(() => {
    let ticking = false;

    const updateScrollProgress = () => {
      const doc = document.documentElement;
      const maxScrollable = doc.scrollHeight - window.innerHeight;
      const progress = maxScrollable > 0 ? window.scrollY / maxScrollable : 0;
      const clamped = Math.min(1, Math.max(0, progress));

      navRef.current?.style.setProperty("--scroll-progress", clamped.toFixed(4));
      ticking = false;
    };

    const onScrollOrResize = () => {
      if (ticking) {
        return;
      }

      ticking = true;
      window.requestAnimationFrame(updateScrollProgress);
    };

    updateScrollProgress();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [pathname]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        const details = mobileDetailsRef.current;
        if (details?.open) {
          details.open = false;
          setMenuOpen(false);
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const menuLabel = menuOpen ? "Close menu" : "Open menu";

  return (
    <nav className={`${styles.siteNav}${menuClosing ? ` ${styles.menuClosing}` : ""}`} aria-label="Main" ref={navRef}>
      <details
        ref={mobileDetailsRef}
        className={styles.mobileDetails}
        onToggle={(event) => {
          const isOpen = event.currentTarget.open;
          setMenuOpen(isOpen);

          if (closingTimerRef.current) {
            clearTimeout(closingTimerRef.current);
            closingTimerRef.current = null;
          }

          if (isOpen) {
            setMenuClosing(false);
            return;
          }

          setMenuClosing(true);
          closingTimerRef.current = setTimeout(() => {
            setMenuClosing(false);
            closingTimerRef.current = null;
          }, 1300);
        }}
      >
        <summary
          ref={toggleRef}
          className={`${styles.menuToggle}${menuOpen ? ` ${styles.menuToggleOpen}` : ""}`}
          aria-label={menuLabel}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-overlay"
        >
          <span className={styles.menuToggleBar} />
          <span className={styles.menuToggleBar} />
          <span className={styles.menuToggleBar} />
        </summary>

        <div id="mobile-nav-overlay" className={styles.mobileMenu} aria-hidden={!menuOpen}>
          <div className={styles.mobileMenuInner}>
            <div className={styles.mobileMenuGroup}>
              <div className={styles.mobileMenuLogoWrap}>
                <Image
                  src={contents.website.logo}
                  alt={contents.website.name}
                  width={170}
                  height={48}
                  className={styles.mobileMenuLogo}
                  priority
                />
              </div>

              <ul className={styles.mobileMenuLinks}>
                {contents.navigation.map((item, index) => {
                  const isActive =
                    item.link === "/"
                      ? pathname === item.link
                      : pathname === item.link || pathname.startsWith(`${item.link}/`);

                  return (
                    <li
                      key={`mobile-${item.link}`}
                      style={{
                        ["--mobile-link-delay" as string]: `${180 + index * 70}ms`,
                      }}
                    >
                      <Link
                        className={`${styles.mobileNavLink}${isActive ? ` ${styles.mobileNavLinkActive}` : ""}`}
                        href={item.link}
                        aria-current={isActive ? "page" : undefined}
                        onClick={() => {
                          const details = mobileDetailsRef.current;
                          if (details) {
                            details.open = false;
                          }
                          setMenuOpen(false);
                        }}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className={styles.mobileMenuTools}>
                <DarkmodeToggle />
              </div>
            </div>
          </div>
        </div>
      </details>
    </nav>
  );
}