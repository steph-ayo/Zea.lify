// "use client";

// import Image from "next/image";

// const CustomBranding = () => {
//   return (
//     <div className="text-white">
//       <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
//         <div className="text-4xl  md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50">
//           Custom Branding
//         </div>
//         <p className="mt-4 text-lg font-normal  text-neutral-300 max-w-lg text-center mx-auto px-4">
//           Creating, designing and developing custom wears
//         </p>
//       </div>

//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-10">
//         <div className="grid gap-4">
//           <div>
//             <Image
//               width={500}
//               height={500}
//               priority
//               className="h-auto max-w-full rounded-lg"
//               src="/images/custom1.png"
//               alt=""
//             />
//           </div>
//           <div>
//             <Image
//               width={500}
//               height={500}
//               priority
//               className="h-auto max-w-full rounded-lg"
//               src="/images/custom2.png"
//               alt=""
//             />
//           </div>
//         </div>
//         <div className="grid gap-4">
//           <div>
//             <Image
//               width={500}
//               height={500}
//               priority
//               className="h-auto max-w-full rounded-lg"
//               src="/images/custom4.png"
//               alt=""
//             />
//           </div>
//           <div>
//             <Image
//               width={500}
//               height={500}
//               priority
//               className="h-auto max-w-full rounded-lg"
//               src="/images/custom5.png"
//               alt=""
//             />
//           </div>
//         </div>
//         <div className="grid gap-4">
//           <div>
//             <Image
//               width={500}
//               height={500}
//               priority
//               className="h-auto max-w-full rounded-lg"
//               src="/images/custom7.png"
//               alt=""
//             />
//           </div>
//           <div>
//             <Image
//               width={500}
//               height={500}
//               priority
//               className="h-auto max-w-full rounded-lg"
//               src="/images/custom8.png"
//               alt=""
//             />
//           </div>
//         </div>
//         <div className="grid gap-4">
//           <div>
//             <Image
//               width={500}
//               height={500}
//               priority
//               className="h-auto max-w-full rounded-lg"
//               src="/images/custom3.png"
//               alt=""
//             />
//           </div>
//           <div>
//             <Image
//               width={500}
//               height={500}
//               priority
//               className="h-auto max-w-full rounded-lg"
//               src="/images/custom6.png"
//               alt=""
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CustomBranding;

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  ["/images/custom1.png", "/images/custom2.png"],
  ["/images/custom4.png", "/images/custom5.png"],
  ["/images/custom7.png", "/images/custom8.png"],
  ["/images/custom3.png", "/images/custom6.png"],
];

const CustomBranding = () => {
  return (
    <section className="text-white bg-[#0a0a0a] py-20">
      <div className="mx-auto w-full px-4 md:px-10 text-center">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200">
            Custom Branding
          </h2>

          <p className="mt-4 text-base md:text-lg text-neutral-300 max-w-2xl mx-auto">
            We don’t just design apparel — we craft wearable identities. Every
            thread, tone, and texture tells your brand’s story.
          </p>

          <p className="mt-3 text-neutral-400 italic max-w-xl mx-auto">
            “Turn your vision into a lifestyle — not just a logo.”
          </p>
        </motion.div>

        {/* Image Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 py-14"
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {images.map((col, i) => (
            <div key={i} className="grid gap-4">
              {col.map((src, j) => (
                <motion.div
                  key={j}
                  className="relative group overflow-hidden rounded-2xl"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <Image
                    width={500}
                    height={500}
                    priority
                    src={src}
                    alt={`Custom branding ${i}-${j}`}
                    className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                    <p className="text-sm text-neutral-200 font-medium tracking-wide">
                      Zea.lify Exclusive Drop
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CustomBranding;
