import { useEffect, useRef } from "react";

export function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far the section is through the viewport
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        const scrollPercent = (windowHeight - rect.top) / (windowHeight + rect.height);
        // Move images slightly down as you scroll past
        const yOffset = (scrollPercent - 0.5) * 40;
        
        const images = containerRef.current.querySelectorAll('.gallery-image');
        images.forEach((img, idx) => {
          // Add staggered effect based on index
          const stagger = idx % 2 === 0 ? 1 : -1;
          (img as HTMLElement).style.transform = `translateY(${yOffset * stagger}px)`;
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const photos = [
    "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&q=80",
    "https://images.unsplash.com/photo-1542362567-b07e54358753?w=600&q=80",
    "https://images.unsplash.com/photo-1581540222194-0def2dda95b8?w=600&q=80",
    "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=600&q=80"
  ];

  return (
    <section className="py-0 bg-[#0A0A0A] overflow-hidden" ref={containerRef}>
      <div className="w-full flex">
        {photos.map((url, idx) => (
          <div key={idx} className="w-1/4 h-48 md:h-80 relative overflow-hidden group">
            <div 
              className="gallery-image absolute inset-0 w-full h-[120%] -top-[10%] bg-cover bg-center filter grayscale-[20%] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              style={{ backgroundImage: `url(${url})` }}
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
          </div>
        ))}
      </div>
    </section>
  );
}