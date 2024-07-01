import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const RightScrollBar = () => {
  return (
    <section className="right_sidebar">
      <nav className="flex flex-col gap-6">
        <Link href="/" className="flex gap-4 items-center cursor-pointer">
          <Image src="/icons/logo.svg" alt="logo" width={24} height={28} />
          <h1 className="max-lg:hidden">Podcastr</h1>
        </Link>
        {sidebarLinks.map((link) => (
          <Link href={link.route} className="flex gap-4 items-center cursor-pointer">
            <Image src={link.imgURL} alt={link.label} width={24} height={24} />
            <h1 className="max-lg:hidden">{link.label}</h1>
          </Link>
        ))}
      </nav>
    </section>
  );
};

export default RightScrollBar;
