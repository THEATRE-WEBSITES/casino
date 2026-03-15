import { motion } from "framer-motion";
import screenImg from "@/assets/theatre-screen.jpg";
import seatsImg from "@/assets/theatre-seats.jpg";
import soundImg from "@/assets/theatre-sound.jpg";
import lobbyImg from "@/assets/theatre-lobby.jpg";

const experiences = [
  {
    title: "Premium 4K Screen",
    desc: "Our massive 4K digital projection screen delivers razor-sharp visuals with vibrant colors and deep contrast, making every frame come alive.",
    img: screenImg,
  },
  {
    title: "Dolby Atmos Sound",
    desc: "Experience sound that moves all around you — above, below, and behind — with our Dolby Atmos surround sound system.",
    img: soundImg,
  },
  {
    title: "Luxury Comfort",
    desc: "Sink into our premium recliner seats with ample legroom and armrests. Designed for hours of comfortable movie watching.",
    img: seatsImg,
  },
  {
    title: "Elegant Interiors",
    desc: "From the grand lobby to the screening hall, every corner of Casino Theatre is designed to make you feel special.",
    img: lobbyImg,
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding cinema-gradient">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl text-foreground tracking-wider">
            The <span className="text-gradient-gold">Experience</span>
          </h2>
          <p className="font-body text-muted-foreground mt-3 text-lg">
            Every detail crafted for your cinematic pleasure
          </p>
        </motion.div>

        <div className="space-y-20">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
            >
              <div className="flex-1 overflow-hidden rounded-lg">
                <img
                  src={exp.img}
                  alt={exp.title}
                  className="w-full h-64 md:h-80 object-cover rounded-lg hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-3xl md:text-4xl text-foreground tracking-wide mb-4">
                  {exp.title}
                </h3>
                <p className="font-body text-muted-foreground text-base leading-relaxed">
                  {exp.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
