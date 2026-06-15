import Image from "next/image";

interface LogoProps {
  className?: string;
  /** Height in pixels – width scales automatically via aspect ratio */
  height?: number;
}

export function Logo({ className, height = 48 }: LogoProps) {
  return (
    <Image
      src="/logo-dachmalservis.png"
      alt="Dach Mal Servis – logo"
      height={height}
      width={Math.round(height * (350 / 150))}
      className={className}
      priority
    />
  );
}
