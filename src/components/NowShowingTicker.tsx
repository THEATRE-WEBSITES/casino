const movies = [
  "🎬 Akhanda 2 — Malayalam — Now Showing",
  "🎬 L2: Empuraan — Malayalam — Now Showing",
  "🎬 Thudarum — Malayalam — Now Showing",
  "🎬 Retro — Malayalam — Now Showing",
  "🎬 Captain America: Brave New World — English — Now Showing",
];

const NowShowingTicker = () => {
  const tickerContent = movies.join("   •   ");

  return (
    <div className="bg-primary/90 overflow-hidden py-2 relative z-50">
      <div className="ticker-scroll whitespace-nowrap flex">
        <span className="text-primary-foreground text-sm font-body tracking-wide px-4">
          {tickerContent}
        </span>
        <span className="text-primary-foreground text-sm font-body tracking-wide px-4">
          {tickerContent}
        </span>
      </div>
    </div>
  );
};

export default NowShowingTicker;
