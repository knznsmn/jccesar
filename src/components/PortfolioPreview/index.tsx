"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type PortfolioPreviewProps = {
  src?: string;
  alt: string;
  title: string;
  className?: string;
};

export function PortfolioPreview({ src, alt, title, className }: PortfolioPreviewProps) {
  const [hasError, setHasError] = useState(false);

  const initials = useMemo(() => {
    const words = title.split(" ").filter(Boolean);
    return words.slice(0, 2).map((word) => word[0]?.toUpperCase()).join("") || "GD";
  }, [title]);

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
      loading="lazy"
      className={className}
      onError={() => setHasError(true)}
    />
  );
}
