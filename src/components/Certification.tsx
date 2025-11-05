"use client";
import { useState, useEffect } from "react";

const Certificate = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImg(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const certificates = [
    { img: "/img/img1.png", alt: "Certificate 1" },
    { img: "/img/img2.jpg", alt: "Certificate 2" },
    { img: "/img/img3.png", alt: "Certificate 3" },
    { img: "/img/img4.png", alt: "Certificate 4" },
    { img: "/img/img5.png", alt: "Certificate 5" },
    { img: "/img/img6.png", alt: "Certificate 6" },
    { img: "/img/img7.png", alt: "Certificate 7" },
    { img: "/img/img8.png", alt: "Certificate 8" },
    { img: "/img/img9.png", alt: "Certificate 9" },
    { img: "/img/img10.png", alt: "Certificate 10" },
  ];

  return (
    <>
      {/* Certificates Section */}
      <section
        className="relative backdrop-blur-md rounded-md mt-4 p-6 transition-all duration-300 
        bg-black/20 border border-white/10"
      >
        <div className="relative mt-4 overflow-hidden">
          <div className="flex items-center gap-5 animate-marquee whitespace-nowrap h-30">
            {[...certificates, ...certificates].map((cert, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-44 h-20 flex items-center justify-center cursor-pointer"
                onClick={() => setSelectedImg(cert.img)}
              >
                <img
                  src={cert.img}
                  alt={cert.alt}
                  className="h-24 object-contain rounded-md transition-transform duration-300 hover:scale-110 shadow-md"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Viewer */}
      {selectedImg && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-[9999] p-4 overflow-auto"
          onClick={() => setSelectedImg(null)}
        >
          <div className="relative w-full flex justify-center">
            <img
              src={selectedImg}
              alt="Certificate"
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl animate-zoomIn"
            />
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-6 right-8 text-white text-4xl font-bold hover:text-gray-300"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Animations */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes zoomIn {
          0% {
            transform: scale(0.9);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-zoomIn {
          animation: zoomIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default Certificate;
