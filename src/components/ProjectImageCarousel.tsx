import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Props {
  images: string[];
  projectName: string;
  defaultImage?: string;
}

const ProjectImageCarousel = ({
  images,
  projectName,
  defaultImage = "./project-pic.jpg",
}: Props) => {

  const safeImages = images && images.length > 0 ? images : [defaultImage];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imgSrc, setImgSrc] = useState(safeImages[0]);

  const prevSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const nextIdx = currentIndex === 0 ? safeImages.length - 1 : currentIndex - 1;
    setCurrentIndex(nextIdx);
    setImgSrc(safeImages[nextIdx]);
  };

  const nextSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const nextIdx = currentIndex === safeImages.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(nextIdx);
    setImgSrc(safeImages[nextIdx]);
  };

  return (
    <div className="relative sm:h-64 md:h-auto w-full rounded-t-2xl overflow-hidden group/carousel bg-neutral-900 border border-neutral-800">
      <img
        src={imgSrc}
        alt={`Captura de ${projectName}`}
        loading="lazy"
        onError={() => setImgSrc(defaultImage)}
        className="w-full h-full object-cover object-center transition-all duration-300 block"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent pointer-events-none" />

      {safeImages.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            aria-label="Anterior"
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-bg/70 text-pure hover:bg-purple hover:text-slate-950 opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 z-10"
          >
            <FaChevronLeft size={14} />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Siguiente"
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-bg/70 text-pure hover:bg-purple hover:text-slate-950 opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 z-10"
          >
            <FaChevronRight size={14} />
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {safeImages.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setCurrentIndex(idx);
                  setImgSrc(safeImages[idx]);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "w-5 bg-purple"
                    : "w-1.5 bg-pure/50 hover:bg-white"
                }`}
                aria-label={`Imagen ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectImageCarousel;