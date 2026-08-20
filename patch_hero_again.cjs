const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

const startIndex = code.indexOf('{/* Huge Typo Hero Section */}');
const endIndex = code.indexOf('<HeroGallery />');
if (startIndex !== -1 && endIndex !== -1) {
  const newHero = `        {/* Hero Section */}
        <section className="relative w-full h-[60vh] md:h-[80vh] min-h-[500px] border-b border-grid overflow-hidden bg-[#E2DFD8]">
          {/* Main Hero Background Logo */}
          <div className="absolute inset-0 z-0">
               <img 
                 src={logo}
                 alt="CLG LABS"
                 className="w-full h-full object-cover pointer-events-none select-none"
               />
          </div>

          {/* Subtitle / Subheading */}
          <div className="absolute bottom-0 left-0 z-20 p-4 md:p-8 pointer-events-none">
             <motion.h2 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-[6vw] sm:text-[4.5vw] md:text-[3.5vw] leading-[0.9] tracking-tighter font-semibold font-display text-white drop-shadow-lg uppercase max-w-5xl"
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
