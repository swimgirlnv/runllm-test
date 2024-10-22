import Phaser from 'phaser';

class ConspiracyBoardScene extends Phaser.Scene {
  constructor() {
    super('ConspiracyBoardScene');
  }

  preload() {
    // Load assets for the conspiracy board screen
    this.load.image('cork', 'assets/cork.jpg');
    this.load.image('back', 'assets/back.png');
    this.load.image('adam_sticky', 'assets/adam.png');
  }

  create() {
    // Add a background or board details for the conspiracy board
    const cork = this.add.image(0, 0, 'cork').setOrigin(0, 0);
    cork.setScale(2.4);
    const adamsticky = this.add.image(300, 300, 'adam_sticky').setInteractive().on('pointerdown', () => {
        alert('Adam’s sticky note clicked! Here’s some information...');
        }
    );
    adamsticky.on('pointerover', () => {
        this.input.setDefaultCursor('pointer');
    });
    adamsticky.on('pointerout', () => {
        this.input.setDefaultCursor('auto');
    });
    adamsticky.setScale(0.3);

    // Add an exit button to return to the main scene
    const exitButton = this.add.image(50, 30, 'back').setInteractive();
    exitButton.setTint(0xFFFFFF);
    exitButton.setTintFill(0xFFFFFF);
    exitButton.setScale(0.07);
    exitButton.on('pointerdown', () => {
      this.cameras.main.zoomTo(1, 1000); // Zoom out effect
      this.time.delayedCall(1000, () => {
        this.scene.start('MainScene'); // Switch back to the main room
      });
    });
    exitButton.on('pointerover', () => {
        this.input.setDefaultCursor('pointer');
    });
    exitButton.on('pointerout', () => {
        this.input.setDefaultCursor('auto');
    });
  }
}

export default ConspiracyBoardScene;
