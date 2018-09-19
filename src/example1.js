class example1 extends Phaser.Scene {
    constructor() {
        super({
            key: "example1"
        });
    }

    preload() {
        this.load.image('menu', 'assets/menu.png');
        this.load.image('story', 'assets/story.png');
    }

    create() {
        var firstPage = localStorage.getItem("firstPage");
        setBackground('menu', this);
        this.story = this.add.image(400, 300, 'story').setScale(0.2).setInteractive();
        console.log(firstPage);
        this.story.on('pointerdown', function (event) {
            if (firstPage == null) {
                this.scene.start("firstPage");
            } else {
                this.scene.start("deckset");
            }
        }, this);
    }
}