import {
  Building,
  Building2,
  Droplet,
  Droplets,
  Flame,
  Grid3x3,
  Hammer,
  Layers,
  Shield,
  Wrench,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Building,
  Building2,
  Droplet,
  Droplets,
  Flame,
  Grid3x3,
  Hammer,
  Layers,
  Shield,
  Wrench,
};

interface ServiceIconProps {
  name: string;
  className?: string;
}

export function ServiceIcon({ name, className }: ServiceIconProps) {
  const Icon = iconMap[name] ?? Wrench;
  return <Icon className={className} aria-hidden="true" />;
}
