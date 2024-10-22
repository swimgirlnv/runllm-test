import { AUTO, Game } from 'phaser';
import MainScene from './scenes/MainScene';
import MonitorScene from './scenes/MonitorScene';
import ConspiracyBoardScene from './scenes/ConspiracyBoardScene';

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config: Phaser.Types.Core.GameConfig = {
    type: AUTO,
    width: 1280,
    height: 720,
    scale: {
        // Fit to window
        mode: Phaser.Scale.FIT,
        // Center vertically and horizontally
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    parent: 'game-container',
    backgroundColor: '#028af8',
    scene: [
        // Boot,
        // Preloader,
        // MainMenu,
        // MainGame,
        // GameOver
        MainScene,
        MonitorScene,
        ConspiracyBoardScene
    ]
};

const StartGame = (parent: string) => {

    return new Game({ ...config, parent });

}

export default StartGame;
