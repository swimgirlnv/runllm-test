import Phaser from 'phaser';
import { EventBus } from '../EventBus';
import { Scene } from 'phaser';

class MainScene extends Scene {
    camera: Phaser.Cameras.Scene2D.Camera;
    background: Phaser.GameObjects.Image;
    gameText: Phaser.GameObjects.Text;
    private monitor!: Phaser.GameObjects.Image;
    private conspiracyBoard!: Phaser.GameObjects.Image;

    constructor() {
        super('MainScene');
    }

    preload() {
        // Load assets
        this.load.image('monitor', 'assets/monitor.png');
        this.load.image('conspiracy_board', 'assets/cb2.png');
    }

    create() {
        this.camera = this.cameras.main;
        this.camera.setBackgroundColor(0x000000);

        this.background = this.add.image(512, 500, 'background');
        this.background.setScale(.7);
        this.background.setAlpha(0.5);
    
        // Add clickable conspiracy board
        this.conspiracyBoard = this.add.image(535, 300, 'conspiracy_board').setInteractive();
        this.conspiracyBoard.setScale(.6);

        // Add clickable monitor
        this.monitor = this.add.image(500, 533, 'monitor').setInteractive();
        this.monitor.setScale(.5);
    

        // Monitor click triggers zoom and transition to MonitorScene
        this.monitor.on('pointerdown', () => {
        this.cameras.main.zoomTo(2, 1000); // Zoom in effect
        this.time.delayedCall(1000, () => {
            this.scene.start('MonitorScene'); // Switch to monitor view scene
        });
        });

        // Conspiracy Board click triggers zoom and transition to ConspiracyBoardScene
        this.conspiracyBoard.on('pointerdown', () => {
        this.cameras.main.zoomTo(1.5, 1000); // Zoom in effect
        this.time.delayedCall(1000, () => {
            this.scene.start('ConspiracyBoardScene'); // Switch to conspiracy board scene
        });
        });

        // Emit the current scene event
        EventBus.emit('current-scene-ready', this);
    }
}

export default MainScene;