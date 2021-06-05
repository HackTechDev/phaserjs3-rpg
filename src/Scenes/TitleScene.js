import 'phaser';
import Config from '../Config/Config';
import Button from '../Objects/Button';

export default class TitleScene extends Phaser.Scene {
  constructor () {
    super('Title');
  }

  preload() {
        this.load.image('background', 'assets/images/team.jpg');
    }

  create () {
    this.add.image(0, 33, 'background').setOrigin(0).setScale(1);

    // Game
    //this.gameButton = new Button(this, Config.width/2, Config.height/2 - 200, 'blueButton1', 'blueButton2', 'Jouer', 'Game');
    //this.dungeonButton = new Button(this, Config.width/2, Config.height/2 - 100, 'blueButton1', 'blueButton2', 'Donjon', 'Dungeon');
    this.stendhalButton = new Button(this, Config.width/2, Config.height/2, 'blueButton1', 'blueButton2', 'Stendhal', 'Stendhal');
    //this.houseButton = new Button(this, Config.width/2 + 200, Config.height/2, 'blueButton1', 'blueButton2', 'Maison', 'House');

    // Options
    this.optionsButton = new Button(this, Config.width/2, Config.height/2 + 100, 'blueButton1', 'blueButton2', 'Options', 'Options');

    // Credits
    this.creditsButton = new Button(this, Config.width/2, Config.height/2 + 200, 'blueButton1', 'blueButton2', 'Crédits', 'Credits');

    this.music = this.sys.game.globals.music;
    if (this.music.musicOn === true && this.music.bgMusicPlaying === false) {
      this.bgMusic = this.sound.add('bgMusic', { volume: 0.5, loop: true });
      this.bgMusic.play();
      this.music.bgMusicPlaying = true;
      this.sys.game.globals.bgMusic = this.bgMusic;
    }
  }

  centerButton (gameObject, offset = 0) {
    Phaser.Display.Align.In.Center(
      gameObject,
      this.add.zone(Config.width/2, Config.height/2 - offset * 100, Config.width, Config.height)
    );
  }

  centerButtonText (gameText, gameButton) {
    Phaser.Display.Align.In.Center(
      gameText,
      gameButton
    );
  }
};
