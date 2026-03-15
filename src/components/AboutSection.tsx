import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding cinema-gradient">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-display text-4xl md:text-5xl text-foreground tracking-wider mb-6">
            About <span className="text-gradient-gold">Casino Theatre</span>
          </h2>
          <p className="font-body text-muted-foreground text-base leading-relaxed mb-4">
            Casino Theatre, Aluva, has been a landmark of entertainment in Ernakulam district for decades. 
            Known for its commitment to delivering an unmatched cinema experience, Casino Theatre has evolved 
            with the times — upgrading to 4K digital projection, Dolby Atmos surround sound, and luxurious 
            recliner seating.
          </p>
          <p className="font-body text-muted-foreground text-base leading-relaxed">
            Whether it's the latest Malayalam blockbuster or a Hollywood spectacle, Casino Theatre promises 
            a viewing experience that goes beyond just watching a movie. It's about feeling every scene, 
            hearing every whisper, and living every moment on the big screen.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
