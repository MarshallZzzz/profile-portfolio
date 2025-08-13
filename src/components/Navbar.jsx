import React from 'react'
import { useState, useRef, useEffect } from 'react';

const Navbar = () => {
    const [copied, setCopied] = useState(false);
    const [visible, setVisible] = useState(true);

    const lastYRef = useRef(0);
    const tickingRef = useRef(false);
    const email = "marshall.zhang02@gmail.com";
    const resumeHref = "/mzhangResume.pdf";
    const resumeFileName = "mzhang_resume.pdf";

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 1200);
        } catch { }
    };

    useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (!tickingRef.current) {
        window.requestAnimationFrame(() => {
          const lastY = lastYRef.current;
          const delta = y - lastY;

          // Always show near the very top
          if (y < 10) {
            setVisible(true);
          } else if (Math.abs(delta) > 8) {
            // Hide when scrolling down; show when scrolling up
            setVisible(delta < 0);
          }

          lastYRef.current = y;
          tickingRef.current = false;
        });
        tickingRef.current = true;
      }
    };

    // Initialize last position
    lastYRef.current = window.scrollY;
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

      const tip =
    "pointer-events-none absolute left-1/2 -translate-x-1/2 top-[calc(100%+6px)] " +
    "text-[11px] px-2 py-0.5 rounded-md bg-black/70 text-white " +
    "opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap";

  return (
    <nav
      aria-label="Primary"
      className={[
        "fixed top-6 left-1/2 -translate-x-1/2 z-[9999]",
        "transition-all duration-300",
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-6 pointer-events-none",
      ].join(" ")}
    >
      <div className="flex items-center gap-2 px-2 py-1.5 rounded-full border shadow-lg bg-[#06402B]/40 backdrop-blur">
        {/* Pair 1 */}
        <div className="flex items-center gap-2 pl-1 pr-2">
          {/* GitHub */}
          <a
            href="https://github.com/MarshallZzzz"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            aria-label="GitHub"
            className="group relative inline-flex items-center justify-center w-9 h-9 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition transform hover:scale-110 active:scale-95"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
              <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.42c.58.11.8-.25.8-.56v-2.16c-3.26.7-3.95-1.4-3.95-1.4-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.74 1.26 3.41.96.11-.77.41-1.26.74-1.55-2.6-.3-5.34-1.3-5.34-5.78 0-1.28.46-2.33 1.2-3.15-.12-.3-.52-1.53.11-3.2 0 0 .98-.31 3.2 1.2a10.98 10.98 0 0 1 5.82 0c2.22-1.51 3.2-1.2 3.2-1.2.63 1.67.23 2.9.11 3.2.75.82 1.2 1.87 1.2 3.15 0 4.49-2.75 5.48-5.37 5.77.42.36.79 1.06.79 2.14v3.18c0 .33.21.68.81.56A11.5 11.5 0 0 0 12 .5Z" />
            </svg>
            <span className={tip}>GitHub</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/marshall-zhang-a23002291/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            aria-label="LinkedIn"
            className="group relative inline-flex items-center justify-center w-9 h-9 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition transform hover:scale-110 active:scale-95"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
              <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5ZM5 9.5H2V22h3V9.5ZM9 9.5H6V22h3v-6.5c0-2.48 3-2.68 3 0V22h3v-7.78c0-5.05-5.5-4.86-6-2.38V9.5Z" />
            </svg>
            <span className={tip}>LinkedIn</span>
          </a>
        </div>

        {/* Divider */}
        <span aria-hidden="true" className="h-6 w-px bg-black/10 dark:bg-white/20" />

        {/* Pair 2 */}
        <div className="flex items-center gap-2 pl-2 pr-1">
          {/* Email (copy) */}
          <button
            type="button"
            onClick={copyEmail}
            title={copied ? "Copied!" : `Copy email: ${email}`}
            aria-label="Copy email address"
            className="group relative inline-flex items-center justify-center w-9 h-9 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition transform hover:scale-110 active:scale-95"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
              <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z" />
            </svg>
            {/* Hover label beneath */}
            <span className={tip}>Copy Email</span>
            {/* Click feedback above */}
            <span className={`pointer-events-none absolute -top-7 text-xs px-2 py-0.5 rounded-md bg-black/70 text-white transition-opacity ${copied ? "opacity-100" : "opacity-0"}`}>
              Copied!
            </span>
          </button>

          {/* Resume (download) */}
          <a
            href={resumeHref}
            download={resumeFileName}
            title="Download resume"
            aria-label="Download resume"
            className="group relative inline-flex items-center justify-center w-9 h-9 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition transform hover:scale-110 active:scale-95"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Zm0 1.5L19.5 9H14V3.5ZM12 12v5m0 0-3-3m3 3 3-3M8 9h4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className={tip}>Download Resume</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
export default Navbar
