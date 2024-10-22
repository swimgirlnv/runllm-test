import Phaser from 'phaser';

class MonitorScene extends Phaser.Scene {
    private screenbg!: Phaser.GameObjects.Image;
  constructor() {
    super('MonitorScene');
  }

  preload() {
    // Load assets for the monitor screen
    this.load.image('folder', 'assets/folder.png');
    this.load.image('message_board', 'assets/message_board.png');
    this.load.image('screen_1', 'assets/1.png');
    this.load.image('exit_button', 'assets/exit_button.png'); // Add exit button image
  }

  create() {
    // Add a background to simulate the monitor's desktop
    this.screenbg = this.add.image(0, 0, 'screen_1').setOrigin(0, 0);
    this.screenbg.setScale(0.67);
    

    // Add interactive folder icons
    const folder = this.add.image(45, 680, 'folder').setInteractive();
    folder.setAlpha(0.01);
    folder.on('pointerdown', () => {
      alert('Folder clicked! Here’s some information...');
    });
    folder.on('pointerover', () => {
        this.input.setDefaultCursor('pointer');
        }
    );
    folder.on('pointerout', () => {
        this.input.setDefaultCursor('auto');
        }
    );

    // Add message board for the player to click and interact
    const messageBoard = this.add.image(65, 85, 'message_board').setInteractive();
    messageBoard.setAlpha(0.01);
    messageBoard.on('pointerdown', () => {
      alert('Message Board clicked! Check the messages...');
    });
    messageBoard.on('pointerover', () => {
        this.input.setDefaultCursor('pointer');
    });
    messageBoard.on('pointerout', () => {
        this.input.setDefaultCursor('auto');
    });

    // Add an exit button to return to the main scene
    const exitButton = this.add.image(1209, 81, 'exit_button').setInteractive();
    exitButton.setScale(0.5);
    exitButton.setAlpha(0.01);
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

export default MonitorScene;
