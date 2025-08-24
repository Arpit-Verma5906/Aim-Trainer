function LandingPage() {
    return (
        <div className="flex flex-col items-center gap-5">
            <p className="text-7xl">
                Aim Trainer
            </p>
            <img src="./src/assets/black-and-white-bullseye.svg" width="100px"/>
            <p>
                Hit 30 targets as fast as you can.<br/>
                Click the target above to begin.
            </p>
        </div>
    )
}

export default LandingPage