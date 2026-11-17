import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

/** Original Saver logo (hotlinked from saverhealthcare.com). `light` renders it white for dark backgrounds. */
export function Logo({ light = false, className, size = 46 }: { light?: boolean; className?: string; size?: number }) {
  return (
    <Link href="/" aria-label={`${site.name} — home`} className={cn("flex items-center gap-3", className)}>
      <Image
        src={site.logo}
        alt={site.logoAlt}
        width={Math.round(size * (669 / 759))}
        height={size}
        priority
        className={cn("h-auto w-auto transition-[filter] duration-500", light && "brightness-0 invert")}
        style={{ height: size, width: "auto" }}
      />
    </Link>
  );
}
