import { motion } from "framer-motion";
import heroImg from "@/assets/hero-theatre.jpg";

const BOOKMYSHOW_URL = "https://in.bookmyshow.com/explore/cinemas-aluva";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Casino Theatre Aluva" className="w-full h-full object-cover" />
        <div className="cinema-overlay absolute inset-0" />
      </div>

      {/* Spotlight effect */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-spotlight" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-[100px] animate-spotlight" style={{ animationDelay: "4s" }} />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground leading-tight tracking-wider"
        >
          Casino Theatre, <span className="text-gradient-gold">Aluva</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-xl md:text-3xl text-foreground/80 mt-2 tracking-wide"
        >
          Experience Movies Like Never Before
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-body text-muted-foreground text-base md:text-lg mt-4 max-w-2xl mx-auto"
        >
          Premium cinema experience with 4K projection and Dolby Atmos sound.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
        >
          <a
            href="#shows"
            className="bg-secondary hover:bg-secondary/80 text-secondary-foreground px-8 py-3 rounded-md font-body font-semibold text-sm transition-all duration-200"
          >
            View Current Shows
          </a>
          <a
            href={BOOKMYSHOW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-md font-body font-semibold text-sm transition-all duration-200 glow-red"
          >
            Book Tickets
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
