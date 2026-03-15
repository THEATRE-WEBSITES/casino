import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Shows", href: "#shows" },
  { label: "Experience", href: "#experience" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const BOOKMYSHOW_URL = "https://in.bookmyshow.com/explore/cinemas-aluva";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#home" className="flex items-center gap-2">
          <img src={logo} alt="Casino Theatre" className="h-10 w-10" />
          <span className="font-display text-2xl text-gradient-gold tracking-wider">
            CASINO THEATRE
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href={BOOKMYSHOW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2 rounded-md text-sm font-semibold transition-all duration-200 glow-red"
          >
            Book Tickets
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm text-muted-foreground hover:text-foreground border-b border-border/50"
            >
              {link.label}
            </a>
          ))}
          <a
            href={BOOKMYSHOW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-3 text-center bg-primary text-primary-foreground px-5 py-3 rounded-md text-sm font-semibold"
          >
            Book Tickets
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
