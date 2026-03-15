import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const BOOKMYSHOW_URL = "https://in.bookmyshow.com/explore/cinemas-aluva";

const shows = [
  {
    title: "Akhanda 2",
    language: "Malayalam",
    timings: "10:00 AM, 1:30 PM, 6:00 PM, 9:30 PM",
    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300&h=450&fit=crop",
  },
  {
    title: "L2: Empuraan",
    language: "Malayalam",
    timings: "11:00 AM, 2:30 PM, 6:30 PM, 10:00 PM",
    poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=300&h=450&fit=crop",
  },
  {
    title: "Thudarum",
    language: "Malayalam",
    timings: "10:30 AM, 1:00 PM, 5:30 PM, 9:00 PM",
    poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=450&fit=crop",
  },
  {
    title: "Captain America: Brave New World",
    language: "English",
    timings: "11:30 AM, 3:00 PM, 7:00 PM, 10:30 PM",
    poster: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=300&h=450&fit=crop",
  },
];

const CurrentShowsSection = () => {
  return (
    <section id="shows" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl text-foreground tracking-wider">
            Now <span className="text-primary">Showing</span>
          </h2>
          <p className="font-body text-muted-foreground mt-3 text-lg">
            Catch the latest blockbusters on the big screen
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {shows.map((show, i) => (
            <motion.div
              key={show.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="cinema-card group"
            >
              <div className="relative overflow-hidden aspect-[2/3]">
                <img
                  src={show.poster}
                  alt={show.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>
              <div className="p-4">
                <h3 className="font-display text-xl text-foreground tracking-wide">
                  {show.title}
                </h3>
                <p className="text-sm text-muted-foreground font-body mt-1">
                  {show.language}
                </p>
                <p className="text-xs text-muted-foreground font-body mt-1">
                  {show.timings}
                </p>
                <a
                  href={BOOKMYSHOW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md text-sm font-body font-semibold transition-all duration-200"
                >
                  Book on BookMyShow <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentShowsSection;
