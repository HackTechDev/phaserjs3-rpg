import 'phaser';
import Config from '../Config/Config';

export default class Credits extends Phaser.Scene {
  constructor () {
    super('Credits');
  }

  create () {
    this.creditsText = this.add.text(0, 0, 'Crédits', { fontSize: '32px', fill: '#fff' });
    this.madeByText = this.add.text(0, 0, 'Développer par Nekrofage', { fontSize: '26px', fill: '#fff' });
    this.zone = this.add.zone(Config.width/2, Config.height/2, Config.width, Config.height);

    Phaser.Display.Align.In.Center(
      this.creditsText,
      this.zone
    );

    Phaser.Display.Align.In.Center(
      this.madeByText,
      this.zone
    );

    this.madeByText.setY(1000);

    this.creditsTween = this.tweens.add({
      targets: this.creditsText,
      y: -100,
      ease: 'Power1',
      duration: 3000,
      delay: 1000,
      onComplete: function () {
        this.destroy;
      }
    });

    this.madeByTween = this.tweens.add({
      targets: this.madeByText,
      y: -300,
      ease: 'Power1',
      duration: 8000,
      delay: 1000,
      onComplete: function () {
        this.madeByTween.destroy;
        this.scene.start('Menu');
      }.bind(this)
    });
  }
};
