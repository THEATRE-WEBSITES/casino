import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

const BOOKMYSHOW_URL = "https://in.bookmyshow.com/cinemas/kochi/casino-talkies-a-c-real-laser-3d-dolby-71-aluva/buytickets/CAIS/20260319";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Casino Theatre" className="h-8 w-8" />
              <span className="font-display text-xl text-gradient-gold tracking-wider">
                CASINO THEATRE
              </span>
            </div>
            <p className="font-body text-sm text-muted-foreground">
              Market Road, Aluva,<br />
              Ernakulam District, Kerala 683101
            </p>
            <p className="font-body text-sm text-muted-foreground mt-2">
              +91 484 262 3456
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-lg text-foreground tracking-wide mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["Home", "Shows", "Experience", "Gallery", "Location", "About", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social & Booking */}
          <div>
            <h4 className="font-display text-lg text-foreground tracking-wide mb-4">Connect</h4>
            <div className="flex gap-4 mb-6">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
            <a
              href={BOOKMYSHOW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-md font-body font-semibold text-sm transition-all duration-200"
            >
              Book on BookMyShow
            </a>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center">
          <p className="font-body text-xs text-muted-foreground">
            © {new Date().getFullYear()} Casino Theatre, Aluva. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
