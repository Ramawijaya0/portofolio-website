import { useState, useEffect } from "react";

const Slideshow = () => {
  const slides = [
    { id: 1, src: "/images/1.jpg", alt: "Gambar 1", caption: "Proyek 1" },
    { id: 2, src: "/images/2.jpg", alt: "Gambar 2", caption: "Proyek 2" },
    { id: 3, src: "/images/3.jpg", alt: "Gambar 3", caption: "Proyek 3" },
    { id: 4, src: "/images/4.jpg", alt: "Gambar 4", caption: "Proyek 4" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Ganti slide setiap 3 detik
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-[75vh] overflow-hidden shadow-xl">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-full bg-center bg-cover transition-transform transform ${
            index === currentIndex ? "translate-x-0" : "-translate-x-full"
          }`}
          style={{
            backgroundImage: `url(${slide.src})`,
            transition: "transform 0.5s ease-in-out",
          }}
          aria-label={slide.alt}
        >
          {/* <img src={slide.src} alt="" className="w-full h-full" /> */}
          <div className="absolute bottom-4 left-4 text-white bg-black bg-opacity-50 p-2 rounded">
            {slide.caption}
          </div>
        </div>
      ))}

      {/* Tombol Navigasi */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded"
        onClick={() =>
          setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
          )
        }
      >
        ❮
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded"
        onClick={() =>
          setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
        }
      >
        ❯
      </button>
    </div>
  );
};

export default Slideshow;
