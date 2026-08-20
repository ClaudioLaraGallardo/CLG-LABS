const fs = require('fs');
let code = fs.readFileSync('src/components/HeroGallery.tsx', 'utf8');

const remoteImages = [
  "https://clg-labs.vercel.app/assets/5-BjgSMLsO.png",
  "https://clg-labs.vercel.app/assets/5gel-BIZX0McC.png",
  "https://clg-labs.vercel.app/assets/A_hyper-real_digital_photograph_captures_a_moss-co-WVyvwU1b.png",
  "https://clg-labs.vercel.app/assets/Gemini_Generated_Image_jg7svjjg7svjjg7s-BX33eoPE.png",
  "https://clg-labs.vercel.app/assets/Gemini_Generated_Image_leuz5sleuz5sleuz-DH-qTsX1.png",
  "https://clg-labs.vercel.app/assets/Gemini_Generated_Image_nv9lr3nv9lr3nv9l-Dqbs8LIU.png",
  "https://clg-labs.vercel.app/assets/Gemini_Generated_Image_tdkd4ytdkd4ytdkd-zYkxUjUh.png",
  "https://clg-labs.vercel.app/assets/Nano_Banana_Pro_Ultra_wide_cinematic_shot_of_the_same_Chilean_altiplano_with_red_mineral_soil_and_vi_1-xMhW2P9m.png"
];

const newImagesArray = "const GALLERY_IMAGES = [\n  " + remoteImages.map(img => `"${img}"`).join(",\n  ") + "\n];\n";

code = code.replace(/const imageModules = import\.meta\.glob[^;]+;/, '');
code = code.replace(/const GALLERY_IMAGES = [^;]+;/, newImagesArray);

fs.writeFileSync('src/components/HeroGallery.tsx', code);
