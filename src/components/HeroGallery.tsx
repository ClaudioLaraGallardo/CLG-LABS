import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const GALLERY_IMAGES = [
  "/assets/images/ChatGPT Image 21 ago 2026, 11_01_28 a.m..png",
  "/assets/images/ChatGPT Image 21 ago 2026, 11_01_38 a.m..png",
  "/assets/images/ChatGPT Image 21 ago 2026, 11_02_14 a.m..png",
  "/assets/images/ChatGPT Image 21 ago 2026, 11_02_54 a.m..png",
  "/assets/images/Gemini_Generated_Image_leuz5sleuz5sleuz.png",
  "/assets/images/Gemini_Generated_Image_tdkd4ytdkd4ytdkd.png",
  "/assets/images/Nano_Banana_Pro_Ultra_wide_cinematic_shot_of_the_same_Chilean_altiplano_with_red_mineral_soil_and_vi_3.png"
];





export default function HeroGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (GALLERY_IMAGES.length > 0) {
      setCurrentIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
    }
  };
  
  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (GALLERY_IMAGES.length > 0) {
      setCurrentIndex((prev) => (prev === 0 ? GALLERY_IMAGES.length - 1 : prev - 1));
    }
  };

  const mainImage = GALLERY_IMAGES.length > 0 ? GALLERY_IMAGES[currentIndex] : '';
  const nextImage = GALLERY_IMAGES.length > 0 ? GALLERY_IMAGES[(currentIndex + 1) % GALLERY_IMAGES.length] : '';
  const nextNextImage = GALLERY_IMAGES.length > 0 ? GALLERY_IMAGES[(currentIndex + 2) % GALLERY_IMAGES.length] : '';
  const prevImage = GALLERY_IMAGES.length > 0 ? GALLERY_IMAGES[(currentIndex === 0 ? GALLERY_IMAGES.length - 1 : currentIndex - 1)] : '';

  return (
    <section className="border-b border-grid bg-[#E2DFD8] text-[#111111] overflow-hidden flex flex-col selection:bg-[#111111] selection:text-[#E2DFD8]">
      {/* Top Bar */}
      <div className="flex justify-between items-center text-[10px] font-mono tracking-widest uppercase px-4 py-2 border-b border-grid font-semibold">
        <span>AI Experiment [Gallery]</span>
        <span className="hidden sm:block">Index / Experiment / About</span>
        <span>Studio ©{new Date().getFullYear()}</span>
      </div>

      <div className="flex flex-col min-h-[80vh] p-4 lg:p-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 border-b border-grid pb-4 gap-4">
          <div>
             <h4 className="text-xs font-sans uppercase tracking-wider font-semibold">Galería de Exploración Visual</h4>
             <span className="font-mono text-[10px] uppercase opacity-50 tracking-widest mt-1 block">Artwork N°{String(currentIndex + 1).padStart(2, '0')} / {String(GALLERY_IMAGES.length).padStart(2, '0')}</span>
          </div>
          <div className="flex gap-2">
             <button onClick={handlePrev} className="uppercase font-mono text-[10px] tracking-widest hover:bg-[#111111] hover:text-[#E2DFD8] transition-colors flex items-center justify-center gap-2 border border-grid px-4 py-2 md:cursor-none w-full sm:w-auto">
               <ArrowLeft size={12}/> Prev
             </button>
             <button onClick={handleNext} className="uppercase font-mono text-[10px] tracking-widest hover:bg-[#111111] hover:text-[#E2DFD8] transition-colors flex items-center justify-center gap-2 border border-grid px-4 py-2 md:cursor-none w-full sm:w-auto">
               Next <ArrowRight size={12}/>
             </button>
          </div>
        </div>

        <div 
             className="flex-1 w-full min-h-[50vh] relative isolate group overflow-hidden md:cursor-none flex items-center justify-center bg-[#111111]/5 border border-grid/50" 
             onClick={handleNext}
          >
             
               {mainImage ? (
                 <motion.img 
                    key={mainImage}
                    src={mainImage} 
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 w-full h-full object-contain" 
                    alt={`Artwork ${currentIndex + 1}`} 
                 />
               ) : (
                 <div className="flex items-center justify-center w-full h-full text-xs font-mono uppercase opacity-50">Esperando imágenes...</div>
               )}
             
             {/* Hover instructions */}
             <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/5 pointer-events-none">
                <span className="font-mono text-[10px] uppercase tracking-widest backdrop-blur-md bg-white/80 text-[#111111] px-4 py-2 border border-black/10 rounded-full shadow-lg">Siguiente Imágen</span>
             </div>
          </div>
      </div>
    </section>
  );
}
