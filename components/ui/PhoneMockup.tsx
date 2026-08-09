import Image from "next/image";

interface PhoneMockupProps {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
}

/**
 * Displays a product phone render (images already include the device frame).
 * Wraps it with a soft floating drop-shadow.
 */
export default function PhoneMockup({
  src,
  alt,
  priority = false,
  className = "",
  sizes = "(max-width: 768px) 70vw, 320px",
}: PhoneMockupProps) {
  return (
    <div className={`relative ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={1024}
        height={1536}
        priority={priority}
        sizes={sizes}
        className="h-auto w-full drop-shadow-[0_30px_50px_rgba(6,26,51,0.22)]"
      />
    </div>
  );
}
