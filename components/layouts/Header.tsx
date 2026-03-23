"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import plant1 from "@/components/images/plant 1.png";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { User, LogOut } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import { useLogout } from "@/hooks/use-logout";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Blog", href: "/blog" },
  { label: "Testimonials", href: "/testimonials" },
];

function Header() {
  const router = useRouter();
  const { user, isLoading } = useAuth();
  const { mutate: logout } = useLogout();

  function handleLogout() {
    logout(undefined, {
      onSuccess: () => router.push("/login"),
    });
  }

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

        {/* Profile */}
        {!isLoading && (
          user ? (
            <Popover>
              <PopoverTrigger asChild>
                <button>
                  <Avatar>
                    <AvatarFallback>
                      {user.name.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-48 p-2" align="end">
                <p className="text-[14px] font-medium px-2 py-1">{user.name}</p>
                <p className="text-[12px] text-[#808080] px-2 pb-2">{user.email}</p>
                <Button
                  variant="ghost"
                  className="w-full justify-start gap-2 text-[14px]"
                  onClick={handleLogout}
                >
                  <LogOut className="size-4" />
                  Logout
                </Button>
              </PopoverContent>
            </Popover>
          ) : (
            <Link href="/login">
              <Avatar>
                <AvatarFallback>
                  <User className="size-4" />
                </AvatarFallback>
              </Avatar>
            </Link>
          )
        )}
      </div>
    </header>
  );
}

export default Header;
