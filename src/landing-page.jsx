import bullseye from "./assets/black-and-white-bullseye.svg";

function LandingPage({ onClose }) {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <h1 className="md:text-7xl text-4xl  font-extrabold text-white drop-shadow-lg mb-8">
        Aim Trainer 🎯
      </h1>

      <img
        src={bullseye}
        alt="Bullseye target"
        width="160"
        className="mb-8 cursor-pointer transition-transform transform hover:scale-125 hover:rotate-6 "
        draggable="false"
        onClick={onClose}
      />

      <p className="text-xl md:text-2xl text-white font-medium drop-shadow-md mb-8 max-w-2xl">
        Hit <span className="font-bold text-yellow-300">30 targets</span> as fast as you can.
        <br />
        Click the target above to begin!
      </p>
    </div>
  );
}

export default LandingPage;
