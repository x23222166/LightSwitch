import { useState } from "react";

function LightSwitch() {
    const [lightSwitch, setLightSwitch] = useState(false);

    function handleTurnOn(e) {
        e.preventDefault();
        setLightSwitch(true);
    }

    function handleTurnOff(e) {
        e.preventDefault();
        setLightSwitch(false);
    }

    return (
        <div>
            <p>{lightSwitch ? "The lightswitch is on" : "The Lightswitch is off"}</p>
            <button onClick={handleTurnOn} disabled={lightSwitch}>Turn on light switch</button>
            <button onClick={handleTurnOff} disabled={!lightSwitch}>Turn off light switch</button>
        </div>
    );
}

export default LightSwitch;