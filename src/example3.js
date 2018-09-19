class example3 extends Phaser.Scene {
    constructor() {
        super({key:"example3"});
    }
    
    preload(){
        this.load.image('menu3', 'assets/menu3.png');
        this.load.image('story', 'assets/story.png');
    }
    
    create(){
        setBackground('menu3', this);
        this.text = this.add.text(0,0, "page 3", {font: "40px Impact"});
        this.story = this.add.image(400,300,'story').setScale(0.2).setInteractive();
        this.story.on('pointerdown', function(event){
        this.scene.start("match");},this);
    }
}