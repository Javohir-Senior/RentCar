export function Gallery() {
  const photos = [
    "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&q=80",
    "https://images.unsplash.com/photo-1542362567-b07e54358753?w=600&q=80",
    "https://images.unsplash.com/photo-1581540222194-0def2dda95b8?w=600&q=80",
    "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=600&q=80"
  ];

  return (
    <section className="w-full flex">
      {photos.map((photo, idx) => (
        <div key={idx} className="flex-1 h-72 overflow-hidden group">
          <img 
            src={photo} 
            alt={`Gallery image ${idx + 1}`} 
            className="w-full h-full object-cover filter grayscale-[30%] transition-transform duration-700 group-hover:grayscale-0 group-hover:scale-[1.04]"
          />
        </div>
      ))}
    </section>
  );
}