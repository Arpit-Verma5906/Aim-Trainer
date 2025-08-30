import { useState, useEffect } from "react";
import bullseye from "./assets/black-and-white-bullseye.svg";

function GamePage() {
  const [targetsLeft, setTargetsLeft] = useState(30);
  const [time, setTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [targetPos, setTargetPos] = useState({ top: "50%", left: "50%" });

  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => setTime((t) => t + 0.01), 10);
    }
    return () => clearInterval(timer);
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
      <div className="absolute top-6 flex gap-12 text-2xl font-bold">
        <p>⏱ Time: {time.toFixed(2)}s</p>
        <p>🎯 Targets Left: {targetsLeft}</p>
      </div>

      {targetsLeft > 0 && (
        <img src={bullseye}
          onClick={handleHit}
          draggable="false"
          className="absolute w-25 -translate-[50%] rounded-full shadow-lg hover:scale-110 transition-transform"
          style={{ top: targetPos.top, left: targetPos.left }}
        />
      )}

      {targetsLeft === 0 && (
        <div className="text-center">
          <h1 className="text-5xl font-extrabold mb-4">🔥 Done!</h1>
          <p className="text-2xl mb-1">Total time you took: {time.toFixed(2)} s</p>
          <p className="text-2xl mb-6">Average time per target: {(time.toFixed(2) / 3 * 100).toFixed(0)} ms</p>
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