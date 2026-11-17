export function Photo({ img, className = "", eager = false }: { img: { src: string; alt: string; credit: string; page: string }; className?: string; eager?: boolean }) {
  return (
    <figure className={`relative overflow-hidden ${className}`}>
      <img src={img.src} alt={img.alt} loading={eager ? "eager" : "lazy"} className="h-full w-full object-cover" />
      <figcaption className="absolute bottom-2 right-3 text-[10px] text-navy-foreground/80">
        <a href={img.page} target="_blank" rel="noreferrer" className="hover:underline">Photo: {img.credit}</a>
      </figcaption>
    </figure>
  );
}
