import Phaser from 'phaser';

class MonitorScene extends Phaser.Scene {
  constructor() {
    super('MonitorScene');
  }

  preload() {
    // Load assets for the monitor screen
    this.load.image('folder', 'assets/folder.png');
    this.load.image('message_board', 'assets/message_board.png');
    this.load.image('screen_bg', 'assets/desktop.png');
    this.load.image('exit_button', 'assets/exit_button.png'); // Add exit button image
  }

  create() {
    // Add a background to simulate the monitor's desktop
    this.add.image(400, 300, 'screen_bg').setOrigin(0.5, 0.5);

    // Add interactive folder icons
    const folder = this.add.image(300, 300, 'folder').setInteractive();
    folder.on('pointerdown', () => {
      alert('Folder clicked! Here’s some information...');
    });

    // Add message board for the player to click and interact
    const messageBoard = this.add.image(500, 300, 'message_board').setInteractive();
    messageBoard.on('pointerdown', () => {
      alert('Message Board clicked! Check the messages...');
    });

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

export default MonitorScene;
