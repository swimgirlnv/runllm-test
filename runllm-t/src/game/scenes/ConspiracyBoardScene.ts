import Phaser from 'phaser';

class ConspiracyBoardScene extends Phaser.Scene {
  constructor() {
    super('ConspiracyBoardScene');
  }

  preload() {
    // Load assets for the conspiracy board screen
    this.load.image('conspiracy_details', 'assets/conspiracy_details.png');
    this.load.image('exit_button', 'assets/exit_button.png');
    this.load.image('adam_sticky', 'assets/adam.png');
  }

  create() {
    // Add a background or board details for the conspiracy board
    this.add.image(400, 300, 'conspiracy_details').setOrigin(0.5, 0.5);
    this.add.image(300, 300, 'adam_sticky').setInteractive().on('pointerdown', () => {
        alert('Adam’s sticky note clicked! Here’s some information...');
        }
    );

    // Add an exit button to return to the main scene
    const exitButton = this.add.image(700, 50, 'exit_button').setInteractive();
    exitButton.setScale(0.5);
    exitButton.on('pointerdown', () => {
      this.cameras.main.zoomTo(1, 1000); // Zoom out effect
      this.time.delayedCall(1000, () => {
        this.scene.start('MainScene'); // Switch back to the main room
      });
    });
  }
}

export default ConspiracyBoardScene;
