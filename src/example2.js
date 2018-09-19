class example2 extends Phaser.Scene {
    constructor() {
        super({key:"example2"});
    }
    
    preload(){
        this.load.image('menu2', 'assets/menu2.png');
        this.load.image('story', 'assets/story.png');
    }
    
    create(){
        setBackground('menu2', this);
        this.text = this.add.text(0,0, "page 2", {font: "40px Impact"});
        this.story = this.add.image(700,450,'story').setScale(0.2).setInteractive();
        this.story.on('pointerdown', function(event){
        this.scene.start("example1");},this);
        
        
        this.story1Text = this.add.text(100, 100, "Story 1", {font: "40px Impact"});
        this.story2Text = this.add.text(100, 150, "Story 2", {font: "40px Impact"});
        this.story3Text = this.add.text(100, 200, "Story 3", {font: "40px Impact"});
        
        this.story = this.add.image(100,250,'story').setScale(0.15).setInteractive();
        this.story.on('pointerdown', function(event){
        this.scene.start("example3");},this);
        
        //this.story1Text.on("pointerdown",function(event){
        //this.scene.start("example3");},this);
        
    }
}