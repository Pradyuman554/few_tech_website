'use client'
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-[90vh] bg-black flex items-center justify-center p-8 font-sans text-white relative overflow-hidden">
      <BackgroundAnimation />
      <div className="text-center z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="text-4xl sm:text-6xl lg:text-8xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 drop-shadow-lg mb-4 leading-tight pb-2"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Few Technologies
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="mt-6 text-lg sm:text-xl font-bold lg:text-2xl max-w-xl mx-auto text-gray-300 tracking-wide leading-relaxed"
          style={{ fontFamily: 'Lato, sans-serif' }}
        >
          Building the Future: Innovative Tech Services Tailored for Your Success
        </motion.p>
      </div>
    </div>
  );
}

function BackgroundAnimation() {
  return (
    <motion.div
      className="absolute top-0 left-0 w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.5 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="absolute w-96 h-96 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-70"
        animate={{
          x: [0, 100, -100, 0],
          y: [0, -100, 100, 0],
          scale: [1, 1.5, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'mirror',
        }}
      />
      <motion.div
        className="absolute w-72 h-72 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full opacity-70"
        animate={{
          x: [100, -100, 100],
          y: [100, -100, 100],
          scale: [1, 1.5, 1],
          rotate: [360, 0],
        }}
        transition={{
          duration: 25,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'mirror',
        }}
      />
    </motion.div>
  );
}