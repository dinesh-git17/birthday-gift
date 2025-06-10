'use client';

import StartScreen from '@/components/StartScreen';
import { useState } from 'react';

export default function Home() {
  const [started, setStarted] = useState(false);

  const handleStart = () => {
    setStarted(true);
    // Later: music + animation flow
  };

  return (
    <>
      {!started ? (
        <StartScreen onStart={handleStart} />
      ) : (
        <main className="w-full h-screen flex items-center justify-center bg-rosy">
          <h1 className="text-white text-3xl font-romantic">🎉 Coming Next: Story Cards...</h1>
        </main>
      )}
    </>
  );
}
