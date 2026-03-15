import { motion } from "framer-motion";
import { Monitor, Volume2, Armchair, Wind, Users } from "lucide-react";

const features = [
  { icon: Monitor, title: "4K Digital Projection", desc: "Crystal clear visuals on our state-of-the-art 4K screen" },
  { icon: Volume2, title: "Dolby Atmos Sound", desc: "Immersive surround sound that puts you inside the movie" },
  { icon: Armchair, title: "Luxury Seating", desc: "Premium recliner seats for ultimate comfort" },
  { icon: Wind, title: "Air Conditioned", desc: "Perfect climate-controlled auditorium" },
  { icon: Users, title: "Family Friendly", desc: "A welcoming environment for all ages" },
];

const FeaturesSection = () => {
  return (
    <section className="section-padding cinema-gradient">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl text-foreground tracking-wider">
            Why <span className="text-gradient-gold">Casino Theatre</span>
          </h2>
          <p className="font-body text-muted-foreground mt-3 text-lg">
            A premium cinema experience awaits you
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="cinema-card p-6 text-center group"
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feat.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl text-foreground tracking-wide mb-2">
                {feat.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
