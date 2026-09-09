import { createFileRoute } from "@tanstack/react-router";
import {
  ChevronLeft,
  ChevronRight,
  Expand,
  Grid2X2,
  Layers3,
  Play,
  X,
} from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";

import logo from "../assets/zegi-logo-transparent.png.asset.json";
import brandBoard from "../assets/Zegi_Holidays_Coastal_Brand_Board.webp.asset.json";
import palette from "../assets/Zegi_holidays_brand_color_palette.webp.asset.json";
import businessCards from "../assets/Zegi_holidays_business_card.JPG.asset.json";
import stationery from "../assets/Luxury_Zeqi_Holidays_Stationery_Flat_Lay.webp.asset.json";
import journey from "../assets/ZH_4.webp.asset.json";
import journeyView from "../assets/ZH_5.webp.asset.json";
import billboard from "../assets/Twilight_City_Billboard_Escape.webp.asset.json";
import sunsetBillboard from "../assets/Zegi_Santorini_Sunset_Travel_Billboard.webp.asset.json";
import digital from "../assets/Luxury_Travel_Tech_Showcase.webp.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zegi Holidays — Brand Identity Reveal" },
      { name: "description", content: "A cinematic reveal of the Zegi Holidays luxury travel identity." },
      { property: "og:title", content: "Zegi Holidays — Brand Identity Reveal" },
      { property: "og:description", content: "A cinematic reveal of the Zegi Holidays luxury travel identity." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Presentation,
});

type Slide = {
  title: string;
  label: string;
  render: () => React.ReactNode;
};

const colors = [
  ["Deep Ocean", "#0D4D5C", "ocean"],
  ["Aegean Blue", "#1BA5A6", "aegean"],
  ["Coastal Mist", "#69C2BE", "mist"],
  ["Golden Sand", "#C9A770", "sand"],
  ["Warm Ivory", "#F2E9DF", "ivory"],
] as const;

function BrandLogo({ inverse = false }: { inverse?: boolean }) {
  return <img className={inverse ? "brand-logo brand-logo--inverse" : "brand-logo"} src={logo.url} alt="Zegi Holidays" />;
}

function SlideFrame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <section className={`slide-content ${className}`}>{children}</section>;
}

function Presentation() {
  const [current, setCurrent] = useState(0);
  const [overview, setOverview] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const slides = useMemo<Slide[]>(() => [
    {
      title: "A journey beyond expectations",
      label: "Opening",
      render: () => (
        <SlideFrame className="slide-cover">
          <img className="slide-image image-cover image-drift" src={sunsetBillboard.url} alt="Zegi Holidays Santorini sunset campaign" />
          <div className="cover-wash" />
          <div className="cover-content reveal-up">
            <BrandLogo />
            <p className="slide-kicker cover-kicker">Brand identity reveal · 2026</p>
          </div>
          <p className="slide-page cover-page">01 / 10</p>
        </SlideFrame>
      ),
    },
    {
      title: "More than destinations",
      label: "The promise",
      render: () => (
        <SlideFrame className="slide-promise">
          <div className="promise-copy reveal-up">
            <span className="slide-kicker">The promise</span>
            <h1 className="display-xl">More than<br /><em>destinations.</em></h1>
            <p className="slide-body">Journeys that stay with you.</p>
          </div>
          <div className="promise-visual">
            <img className="slide-image image-cover image-drift" src={journeyView.url} alt="Zegi Holidays travel journals overlooking Santorini" />
          </div>
          <div className="promise-axis" aria-hidden="true" />
        </SlideFrame>
      ),
    },
    {
      title: "A mark for the journey",
      label: "The mark",
      render: () => (
        <SlideFrame className="slide-mark">
          <div className="mark-orbit" aria-hidden="true"><span /><span /><span /></div>
          <div className="mark-copy reveal-up">
            <p className="slide-kicker">The mark</p>
            <BrandLogo />
            <p className="slide-subtitle">A line that travels.<br />A pin that arrives.</p>
          </div>
          <div className="mark-number slide-page">03</div>
        </SlideFrame>
      ),
    },
    {
      title: "Colors inspired by journeys",
      label: "Color world",
      render: () => (
        <SlideFrame className="slide-colors">
          <header className="slide-heading reveal-up">
            <p className="slide-kicker">Color world</p>
            <h1 className="slide-title">Drawn from the coast.</h1>
          </header>
          <div className="color-rhythm">
            {colors.map(([name, hex, token], i) => (
              <div className={`color-column color-${token}`} key={name}>
                <span className="color-index">0{i + 1}</span>
                <div className="color-label"><strong>{name}</strong><span>{hex}</span></div>
              </div>
            ))}
          </div>
        </SlideFrame>
      ),
    },
    {
      title: "The world of Zegi",
      label: "Visual language",
      render: () => (
        <SlideFrame className="slide-world">
          <img className="slide-image image-cover" src={brandBoard.url} alt="Zegi Holidays coastal brand identity board" />
          <div className="world-caption reveal-up">
            <p className="slide-kicker">Visual language</p>
            <h1 className="slide-title">Light. Texture. Horizon.</h1>
          </div>
        </SlideFrame>
      ),
    },
    {
      title: "Identity in hand",
      label: "Tactile identity",
      render: () => (
        <SlideFrame className="slide-tactile">
          <div className="tactile-image"><img className="slide-image image-cover image-drift" src={businessCards.url} alt="Zegi Holidays premium business cards" /></div>
          <div className="tactile-copy reveal-up">
            <p className="slide-kicker">Identity in hand</p>
            <h1 className="slide-title">Made to be<br /><em>remembered.</em></h1>
            <p className="slide-body">Warm ivory. Deep ocean.<br />A precise edge of gold.</p>
          </div>
        </SlideFrame>
      ),
    },
    {
      title: "Every detail travels",
      label: "Journey system",
      render: () => (
        <SlideFrame className="slide-system">
          <img className="slide-image image-cover" src={journey.url} alt="Zegi Holidays curated travel documents" />
          <div className="system-panel reveal-up">
            <span className="slide-kicker">Journey system</span>
            <h1 className="slide-title">Every detail<br />travels together.</h1>
            <p className="slide-body">A considered suite for every moment.</p>
          </div>
        </SlideFrame>
      ),
    },
    {
      title: "A quiet presence at scale",
      label: "Brand in motion",
      render: () => (
        <SlideFrame className="slide-motion">
          <img className="slide-image image-cover image-drift" src={billboard.url} alt="Zegi Holidays illuminated city billboard" />
          <div className="motion-title reveal-up">
            <p className="slide-kicker">Brand in motion</p>
            <h1 className="slide-title">A quiet presence.<br />At any scale.</h1>
          </div>
        </SlideFrame>
      ),
    },
    {
      title: "Designed for discovery",
      label: "Digital expression",
      render: () => (
        <SlideFrame className="slide-digital">
          <img className="slide-image image-cover image-drift" src={digital.url} alt="Zegi Holidays website across desktop, tablet, and mobile" />
          <div className="digital-copy reveal-up">
            <p className="slide-kicker">Digital expression</p>
            <h1 className="slide-title">Designed for<br /><em>discovery.</em></h1>
          </div>
        </SlideFrame>
      ),
    },
    {
      title: "Zegi Holidays",
      label: "Closing",
      render: () => (
        <SlideFrame className="slide-closing">
          <img className="slide-image image-cover image-drift" src={stationery.url} alt="Zegi Holidays luxury stationery collection" />
          <div className="closing-wash" />
          <div className="closing-copy reveal-up">
            <BrandLogo inverse />
            <p className="slide-subtitle">Journey. Escape. Discover.</p>
          </div>
          <p className="slide-kicker closing-foot">A journey beyond expectations</p>
        </SlideFrame>
      ),
    },
  ], []);

  const goTo = useCallback((index: number) => {
    const bounded = Math.max(0, Math.min(slides.length - 1, index));
    setCurrent(bounded);
    const url = new URL(window.location.href);
    url.searchParams.set("slide", String(bounded + 1));
    window.history.replaceState({}, "", url);
  }, [slides.length]);

  useEffect(() => {
    const value = Number(new URLSearchParams(window.location.search).get("slide"));
    if (Number.isFinite(value) && value >= 1 && value <= slides.length) setCurrent(value - 1);
  }, [slides.length]);

  useEffect(() => {
    document.title = `${current + 1}/${slides.length} — ${slides[current]?.title ?? "Zegi Holidays"}`;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" || event.key === " ") goTo(current + 1);
      if (event.key === "ArrowLeft") goTo(current - 1);
      if (event.key.toLowerCase() === "g") setOverview((value) => !value);
      if (event.key === "Escape") setOverview(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current, goTo, slides]);

  useEffect(() => {
    const onFullscreen = () => setIsFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", onFullscreen);
    return () => document.removeEventListener("fullscreenchange", onFullscreen);
  }, []);

  const present = async () => {
    if (!document.fullscreenElement) await document.documentElement.requestFullscreen();
    else await document.exitFullscreen();
  };

  const activeSlide = slides[current] ?? slides[0];
  if (!activeSlide) return null;

  return (
    <main className={`presentation-shell ${isFullscreen ? "is-fullscreen" : ""}`}>
      <header className="app-bar">
        <div className="app-brand"><BrandLogo /><span>Identity reveal</span></div>
        <div className="app-actions">
          <button className="icon-button" onClick={() => setOverview(true)} aria-label="Open slide overview" title="Overview"><Grid2X2 /></button>
          <button className="present-button" onClick={present}><Play /> Present</button>
        </div>
      </header>

      <aside className="slide-rail" aria-label="Slides">
        <div className="rail-title"><Layers3 /><span>Scenes</span></div>
        {slides.map((slide, index) => (
          <button key={slide.title} className={`rail-item ${current === index ? "is-active" : ""}`} onClick={() => goTo(index)}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{slide.label}</strong>
          </button>
        ))}
      </aside>

      <div className="stage">
        <div className="slide-scaler" key={current}>{activeSlide.render()}</div>
      </div>

      <div className="navigation-pill">
        <button onClick={() => goTo(current - 1)} disabled={current === 0} aria-label="Previous slide"><ChevronLeft /></button>
        <span className="slide-page">{String(current + 1).padStart(2, "0")} <i /> {String(slides.length).padStart(2, "0")}</span>
        <button onClick={() => goTo(current + 1)} disabled={current === slides.length - 1} aria-label="Next slide"><ChevronRight /></button>
        <button onClick={present} aria-label="Toggle fullscreen"><Expand /></button>
      </div>

      {overview && (
        <div className="overview" role="dialog" aria-modal="true" aria-label="Slide overview">
          <div className="overview-head"><div><span className="slide-kicker">Zegi Holidays</span><h2>Brand identity reveal</h2></div><button className="icon-button light" onClick={() => setOverview(false)} aria-label="Close overview"><X /></button></div>
          <div className="overview-grid">
            {slides.map((slide, index) => (
              <button className="overview-card" key={slide.title} onClick={() => { goTo(index); setOverview(false); }}>
                <div className="overview-preview"><div className="overview-scale">{slide.render()}</div></div>
                <span>{String(index + 1).padStart(2, "0")}</span><strong>{slide.label}</strong>
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="print-deck" aria-hidden="true">{slides.map((slide) => <div className="print-slide" key={slide.title}>{slide.render()}</div>)}</div>
    </main>
  );
}