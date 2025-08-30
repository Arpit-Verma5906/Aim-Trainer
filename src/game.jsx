import { useState, useEffect } from "react";
import bullseye from "./assets/black-and-white-bullseye.svg";

const TOTAL_TARGETS = 30

function GamePage() {
  const [targetsLeft, setTargetsLeft] = useState(TOTAL_TARGETS);
  const [timeMS, setTimeMS] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [targetPos, setTargetPos] = useState({ top: "50%", left: "50%" });

  useEffect(() => {
    if (timeMS == null && isPlaying) {
      setTimeMS(Date.now());
    } else if (timeMS != null && !isPlaying) {
      setTimeMS(oldTime => Date.now() - oldTime);
    }
  }, [isPlaying]);

  const spawnTarget = () => {
    const top = Math.random() * 60 + 20;
    const left = Math.random() * 60 + 20;
    setTargetPos({ top: `${top}%`, left: `${left}%` });
  };

  const handleHit = () => {
    if (!isPlaying) setIsPlaying(true);

    if (targetsLeft > 1) {
      setTargetsLeft((prev) => prev - 1);
      spawnTarget();
    } else {
      setTargetsLeft(0);
      setIsPlaying(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">

      {targetsLeft > 0 && (
        <>
          <div className="absolute top-6 flex gap-12 md:text-2xl text-sm font-bold">
            <p>🎯 Targets Left: {targetsLeft}</p>
          </div>
          <img src={bullseye}
            onClick={handleHit}
            draggable="false"
            className="absolute w-25 -translate-[50%] rounded-full shadow-lg hover:scale-110 transition-transform"
            style={{ top: targetPos.top, left: targetPos.left }}
          />
        </>
      )}

      {targetsLeft === 0 && (
        <div className="text-center">
          <h1 className="md:text-5xl text-4xl font-extrabold mb-4">🔥 Done!</h1>
          <p className="md:text-2xl text-xl mb-1">Total time you took: {(timeMS / 1000).toFixed(2)} s</p>
          <p className="md:text-2xl text-xl mb-6">Average time per target: {(timeMS / TOTAL_TARGETS).toFixed(0)} ms</p>
          <a
            href="/"
            className="px-8 py-3 bg-amber-400 text-gray-900 font-bold rounded-full shadow-lg hover:bg-amber-500 hover:scale-105 transition-transform"
          >
            Play Again
          </a>
        </div>
      )}
    </div>
  );
}

export default GamePage;