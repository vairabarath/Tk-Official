import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { MobileNavMenu, NavMenu } from "./Navbar"; // full menu (desktop)
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header
      className={cn(
        "w-full z-[999] sticky top-0  transition-transform duration-300 bg-background border-b",
        showHeader ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="flex h-[88px] justify-between items-center max-w-7xl mx-auto px-4">
        {/* Logo */}
        <h1 className="text-xl font-bold">Logo</h1>

        {/* Desktop Nav */}
        <div className="hidden md:block p-1 bg-background rounded-md shadow-sm border-2">
          <NavMenu />
        </div>

        {/* Desktop Right Side */}
        <div className="hidden md:flex items-center gap-4">
          <ModeToggle />
          <Button variant="default">Get Started</Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 px-4",
          isMobileMenuOpen ? "max-h-[500px] pb-4" : "max-h-0"
        )}
      >
        <div className="rounded-md border bg-card p-2 shadow-sm">
          <MobileNavMenu closeMenu={() => setIsMobileMenuOpen(false)} />
          <Button variant="default" className="mt-4 w-full">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
