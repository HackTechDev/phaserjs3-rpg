/**
 *
 *
 */

export default class ZombiStatic extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);
            
        scene.add.existing(this)
        scene.physics.add.existing(this)

        this.body.immovable = true;
        this.body.moves = false;


    }

    collision(player, npc) {
        console.log("collideToZombiStatic");
        let p = player.body.touching.none;
        let n = npc.body.touching.none;
    }



}

