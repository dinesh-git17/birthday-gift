'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

interface StartScreenProps {
  onStart: () => void;
}

export default function StartScreen({ onStart }: StartScreenProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center bg-blush overflow-hidden">
      {/* Background Balloons */}
      <motion.img
        src="/images/balloons.png"
        alt="balloons"
        className="absolute top-0 w-full h-full object-cover opacity-20"
        initial={{ y: 50 }}
        animate={{ y: [-10, 10, -10] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
      />

      {/* Glowing Heart */}
      <motion.div
        className="text-rosy text-7xl drop-shadow-lg"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <FaHeart className="text-gold drop-shadow-xl" />
      </motion.div>

      {/* Tap to Begin */}
      <motion.button
        onClick={onStart}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`mt-8 px-8 py-3 rounded-2xl bg-white bg-opacity-20 text-white text-lg font-semibold backdrop-blur-md border border-white/30 shadow-lg transition-all ${
          hovered ? 'scale-105 bg-opacity-30' : ''
        }`}
        whileTap={{ scale: 0.95 }}
      >
        Tap to Begin
      </motion.button>
    </div>
  );
}
