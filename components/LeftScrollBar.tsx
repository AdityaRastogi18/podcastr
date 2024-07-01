"use client";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const LeftScrollBar = () => {
  const pathName = usePathname();
  const router = useRouter();
  return (
    <section className="left_sidebar">
      <nav className="flex flex-col gap-6">
        <Link href="/" className="flex gap-3 items-center cursor-pointer">
          <Image src="/icons/logo.svg" alt="logo" width={38} height={32} />{" "}
          <h1 className="max-lg:hidden">Podcastr</h1>
        </Link>
        {sidebarLinks.map((link) => {
          const isActive =
            pathName === link.route || pathName.startsWith(`${link.route}/`);
          return (
            <Link
              href={link.route}
              className={cn(
                "flex gap-3 items-center cursor-pointer py-4 max-lg:px-4 justify-center lg:justify-start",
                {
                  "bg-nav-focus border-r-4 border-orange-1": isActive,
                }
              )}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={38}
                height={32}
              />{" "}
              <h1 className="max-lg:hidden">{link.label}</h1>
            </Link>
          );
        })}
      </nav>
    </section>
  );
};

export default LeftScrollBar;
