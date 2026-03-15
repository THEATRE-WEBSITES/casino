import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import heroImg from "@/assets/hero-theatre.jpg";
import screenImg from "@/assets/theatre-screen.jpg";
import seatsImg from "@/assets/theatre-seats.jpg";
import lobbyImg from "@/assets/theatre-lobby.jpg";
import soundImg from "@/assets/theatre-sound.jpg";

const images = [
  { src: heroImg, alt: "Theatre Exterior" },
  { src: lobbyImg, alt: "Theatre Lobby" },
  { src: screenImg, alt: "Premium Screen" },
  { src: seatsImg, alt: "Luxury Seating" },
  { src: soundImg, alt: "Sound System" },
  { src: heroImg, alt: "Night View" },
];

const GallerySection = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl text-foreground tracking-wider">
            <span className="text-primary">Gallery</span>
          </h2>
          <p className="font-body text-muted-foreground mt-3 text-lg">
            Take a look inside Casino Theatre
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => setSelected(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-48 md:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <button
              className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"
              onClick={() => setSelected(null)}
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={images[selected].src}
              alt={images[selected].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
