import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

const LocationSection = () => {
  return (
    <section id="location" className="section-padding cinema-gradient">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl text-foreground tracking-wider">
            Find <span className="text-gradient-gold">Us</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-lg overflow-hidden border border-border h-80"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.842!2d76.3559!3d10.1074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d08f976f3a7%3A0x7e3c2d2e5b8f5a1!2sCasino%20Theatre%20Aluva!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Casino Theatre Location"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-start gap-4 mb-6">
              <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-display text-2xl text-foreground tracking-wide">Casino Theatre</h3>
                <p className="font-body text-muted-foreground mt-1">
                  Market Road, Aluva, Ernakulam District,<br />
                  Kerala 683101, India
                </p>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Casino+Theatre+Aluva"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground px-6 py-3 rounded-md font-body font-semibold text-sm transition-all duration-200"
            >
              <Navigation size={16} /> Open in Google Maps
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
