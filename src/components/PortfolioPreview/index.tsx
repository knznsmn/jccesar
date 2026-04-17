"use client";

import Image from "next/image";
import { useState } from "react";

type PortfolioPreviewProps = {
  src?: string;
  alt: string;
  title: string;
  className?: string;
  sizes?: string;
};

const defaultSizes = "(max-width: 700px) 92vw, (max-width: 1080px) 45vw, 520px";

export function PortfolioPreview({ src, alt, title, className, sizes = defaultSizes }: PortfolioPreviewProps) {
  const [hasError, setHasError] = useState(false);

  const words = title.split(" ").filter(Boolean);
  const initials = words.slice(0, 2).map((word) => word[0]?.toUpperCase()).join("") || "GD";

  if (!src || hasError) {
    return (
      <div className={`portfolioFallback ${className ?? ""}`.trim()} aria-label={`${title} preview unavailable`}>
        <span className="portfolioFallbackBadge">{initials}</span>
        <span className="portfolioFallbackText">Preview unavailable</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={900}
      height={520}
      sizes={sizes}
      loading="lazy"
      className={className}
      onError={() => setHasError(true)}
    />
  );
}
