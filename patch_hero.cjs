const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

const startIndex = code.indexOf('{/* Hero Section */}');
const endIndex = code.indexOf('<HeroGallery />');
if (startIndex !== -1 && endIndex !== -1) {
  const newHero = `        {/* Huge Typo Hero Section */}
        <section className="relative border-b border-grid overflow-hidden">
          {/* Fondo base */}
          <div className="absolute inset-0 bg-transparent -z-30 pointer-events-none" />
          
          {/* Spinning Orange/Yellow Halos */}
          <div className="absolute top-[30%] left-[60%] -translate-x-1/2 -translate-y-1/2 w-[150vw] md:w-[80vw] max-w-[1200px] aspect-square bg-gradient-to-r from-[#FFCC00] via-[#FF5A00] to-[transparent] rounded-full blur-[80px] md:blur-[140px] animate-[spin_20s_linear_infinite] opacity-80 -z-20 pointer-events-none" style={{ transformOrigin: 'calc(50% + 10%) calc(50% + 5%)' }} />
          <div className="absolute bottom-[-10%] left-[-10%] w-[120vw] md:w-[60vw] max-w-[1000px] aspect-square bg-gradient-to-l from-[#FF5A00] via-[#E62E00] to-[transparent] rounded-full blur-[60px] md:blur-[120px] animate-[spin_25s_linear_infinite_reverse] opacity-60 -z-20 pointer-events-none" style={{ transformOrigin: 'calc(50% - 15%) calc(50% - 10%)' }} />
          
          {/* Cristal Acrílico Layer */}
          <div className="absolute inset-0 bg-[#FF5A00]/5 backdrop-blur-[60px] shadow-[inset_0_4px_40px_rgba(255,255,255,0.3),inset_0_0_80px_rgba(255,90,0,0.2)] -z-10 pointer-events-none" />

          {/* Main Title Background layer */}
          <div className="relative z-10 w-full">
             <motion.div 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-fit md:h-[80vh]"
              >
               <img 
                 src={logo}
                 alt="CLG LABS" 
                 className="w-full h-full object-cover mix-blend-multiply opacity-90 pointer-events-none select-none" 
               />
             </motion.div>
          </div>

          {/* Subtitle / Subheading */}
          <div className="absolute bottom-0 left-0 z-20 p-4 md:p-8 pointer-events-none">
             <motion.h2 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-[6vw] sm:text-[4.5vw] md:text-[3.5vw] leading-[0.9] tracking-tighter font-semibold font-display text-white drop-shadow-lg uppercase max-w-5xl mix-blend-difference"
              >
                Portafolio audiovisual<br className="md:hidden" /> & experimentación <span className="font-serif italic text-white/90">IA.</span>
             </motion.h2>
          </div>
        </section>

        `;
  
  code = code.substring(0, startIndex) + newHero + code.substring(endIndex);
  fs.writeFileSync('src/App.tsx', code);
  console.log("Replaced successfully");
} else {
  console.log("Could not find start or end index");
}
