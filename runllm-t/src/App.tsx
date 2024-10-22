import { useRef, useState } from 'react';
import { IRefPhaserGame, PhaserGame } from './game/PhaserGame';

function App()
{
    // Phaser Game Ref
    const phaserRef = useRef<IRefPhaserGame | null>(null);

    // State for tracking if the monitor modal is open
    const [isMonitorOpen, setIsMonitorOpen] = useState(false);

    // Handle Monitor Click (this will open the modal)
    const openMonitor = () => {
        setIsMonitorOpen(true);
    };

    // Handle Post-it Click
    const viewPostIt = () => {
        alert("You clicked a post-it! Here's a clue...");
        // Logic to display more post-it content goes here
    };

    // Handle Conspiracy Board Click
    const viewConspiracyBoard = () => {
        alert("You clicked the conspiracy board! Something's not right...");
        // Logic to reveal conspiracy theory details
    };

    return (
        <div id="app">
            <PhaserGame ref={phaserRef} />
        </div>
    );
}

export default App;

/**
 * 
 * 
 * 
 {isMonitorOpen && (
    <div className="modal">
        <button onClick={() => setIsMonitorOpen(false)}>Close</button>
        <h2>About R U N LLM</h2>
    </div>
)}

<div>
    <div>
        <button className="button" onClick={openMonitor}>About</button>
    </div>
    {/* <div>
        <button className="button" onClick={viewPostIt}>View Post-it</button>
    </div>
    <div>
        <button className="button" onClick={viewConspiracyBoard}>View Conspiracy Board</button>
    </div>
</div>
 */