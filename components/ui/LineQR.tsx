"use client";

import { useState } from "react";
import { QrCode } from "lucide-react";

interface LineQRProps {
  href: string;
  caption: string;
  lineId: string;
  /** pixel size of the QR square */
  size?: number;
  /** tailwind classes for the caption text (varies by background) */
  captionClassName?: string;
}

/**
 * Shows the LINE add-friend QR code (public/images/line-qr.png) inside a white,
 * scannable card. If the image file is missing, it falls back to a labelled
 * placeholder so the layout never shows a broken image.
 */
export default function LineQR({
  href,
  caption,
  lineId,
  size = 132,
  captionClassName = "text-ink-muted",
}: LineQRProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="flex flex-col items-center gap-2.5">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={caption}
        className="block rounded-2xl bg-white p-2.5 shadow-lift transition-transform duration-200 hover:-translate-y-0.5"
      >
        {failed ? (
          <div
            style={{ width: size, height: size }}
            className="flex flex-col items-center justify-center gap-1.5 rounded-lg border border-dashed border-line"
          >
            <QrCode className="h-9 w-9 text-brand-600" strokeWidth={1.75} />
            <span className="text-[0.72rem] font-bold text-ink">{lineId}</span>
          </div>
        ) : (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src="/images/line-qr.png"
            alt={`LINE QR — ${caption}`}
            width={size}
            height={size}
            onError={() => setFailed(true)}
            style={{ width: size, height: size }}
            className="block rounded-lg"
          />
        )}
      </a>
      <p className={`text-[0.82rem] font-medium ${captionClassName}`}>{caption}</p>
    </div>
  );
}
