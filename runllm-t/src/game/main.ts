import { Game as MainGame } from './scenes/Game';
import { AUTO, Game } from 'phaser';
import MainScene from './scenes/MainScene';
import MonitorScene from './scenes/MonitorScene';
import ConspiracyBoardScene from './scenes/ConspiracyBoardScene';

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config: Phaser.Types.Core.GameConfig = {
    type: AUTO,
    width: 1024,
    height: 768,
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
