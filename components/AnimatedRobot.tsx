'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AnimatedRobot() {
  return (
    <motion.div
      className="relative w-48 h-48 mx-auto"
      animate={{
        y: [0, -10, 0],
        rotateY: [0, 5, -5, 0],
      }}
      transition={{
        y: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        },
        rotateY: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
    >
      <Image
        src="/keyvisual.png"
        alt="DIAS Robot - Ihr digitaler Assistent"
        width={192}
        height={192}
        className="object-contain drop-shadow-2xl"
        priority
      />
      
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-dias-cyan/20 to-transparent rounded-full blur-xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
}