import { useState } from "react";

function AimTrainer() {

    const [targetsHit, setTargetsHit] = useState(0)
    const [startTime, setStartTime] = useState(null)
    const [endTime, setEndTime] = useState(null)
    const [targetPos, setTargetPos] = useState({x: 200, y:200})

    const TOTAL_TARGETS = 30
    const GAME_WIDTH = window.innerWidth - 400
    const GAME_HEIGHT = window.innerHeight - 200
    const TARGET_SIZE = 50

    function spawnTarget() {
        const x = Math.random() * (GAME_WIDTH - TARGET_SIZE)
        const y = Math.random() * (GAME_HEIGHT - TARGET_SIZE)
        setTargetPos({x, y})
    }

    function hanndleHit() {
        if(!startTime === null) setStartTime(Date.now());
    }

    return (
        <>

        </>
    )
}

export default AimTrainer