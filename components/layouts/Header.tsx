import Image from "next/image";
import Link from "next/link";
import plant1 from "@/components/images/plant 1.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Blog", href: "/blog" },
  { label: "Testimonials", href: "/testimonials" },
];

function Header() {
  return (
    <header className="border-b border-[#E6E6E6]">
      <div className="wrapper flex items-center justify-between py-4 px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8">
            <Image src={plant1} alt="logo" />
          </div>
          <h1 className="text-[24px] font-semibold">Ecobazar</h1>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[14px] text-[#666666] hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Sign In */}
        <div className="flex items-center gap-4">
          <Link href="/" className="text-[14px] font-medium">
            Sign In
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
