import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const BOOKMYSHOW_URL = "https://in.bookmyshow.com/explore/cinemas-aluva";

const CTASection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center py-12 px-6 rounded-2xl border border-primary/20 glow-red-lg"
        >
          <h2 className="font-display text-4xl md:text-6xl text-foreground tracking-wider">
            Ready for the <span className="text-primary">Big Screen</span>?
          </h2>
          <p className="font-body text-muted-foreground mt-4 text-lg max-w-xl mx-auto">
            Don't miss the latest blockbusters. Book your tickets now and experience cinema at its finest.
          </p>
          <a
            href={BOOKMYSHOW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8 bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 rounded-md font-body font-bold text-base transition-all duration-200 glow-red"
          >
            Book Tickets on BookMyShow <ExternalLink size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
