"use client";

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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

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
    <nav className={styles.siteNav} aria-label="Main" ref={navRef}>
      <details
        ref={mobileDetailsRef}
        className={styles.mobileDetails}
        onToggle={(event) => {
          setMenuOpen(event.currentTarget.open);
        }}
      >
        <summary
          className={`${styles.menuToggle}${menuOpen ? ` ${styles.menuToggleOpen}` : ""}`}
          aria-label={menuLabel}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-overlay"
        >
          <span className={styles.menuToggleBar} />
          <span className={styles.menuToggleBar} />
          <span className={styles.menuToggleBar} />
        </summary>

        <div className={styles.navInner}>
          <ul className={`${styles.navList} ${styles.navListDesktop}`}>
            {contents.navigation.map((item) => {
              const isActive =
                item.link === "/"
                  ? pathname === item.link
                  : pathname === item.link || pathname.startsWith(`${item.link}/`);

              return (
                <li key={item.link}>
                  <Link
                    className={`${styles.navLink}${isActive ? ` ${styles.navLinkActive}` : ""}`}
                    href={item.link}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
            <li className={styles.navItemToggle}>
              <DarkmodeToggle />
            </li>
          </ul>
        </div>

        <div id="mobile-nav-overlay" className={styles.mobileMenu} aria-hidden={!menuOpen}>
          <div className={styles.mobileMenuInner}>
            {process.env.NODE_ENV !== "production" ? (
              <span className={styles.mobileStateBadge}>
                menu: {menuOpen ? "open" : "closed"}
              </span>
            ) : null}

            <p className={styles.mobileMenuTagline}>{contents.website.tagline}</p>

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
          </div>
        </div>
      </details>
    </nav>
  );
}