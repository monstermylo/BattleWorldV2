class firstPage extends Phaser.Scene {
    constructor() {
        super({key:"firstPage"});
    }
    
    
    
    preload(){
        var userOwned = Array ();
        userOwned = localStorage.getItem("ownedCards");
        console.log(userOwned);
        localStorage.removeItem("ownedCards");
        
        this.load.image('menu', 'assets/menu.png');
        this.load.image('story', 'assets/story.png');
        
        var userDeck = new Array ();
        var newCard = new Array ();
        var x;
        for (x = 0; x < 10; x++){
            var type = (Math.random() * 2);
            if (type < 1){
                var cardPic = x.toString();
                var url = 'assets/cards/Miles_Morales.png';
            } else {
                var cardPic = x.toString();
                var url = 'assets/cards/Captain_Marvel.png';
            }
            newCard = {key:cardPic,name:"card"+x,atk: Math.floor(Math.random() * Math.floor(5))+1,hp: Math.floor(Math.random() * Math.floor(15))+1, url:url};
            userDeck.push(newCard);
        }
        
        var x;
        var y = userDeck.length;
        for (x = 0; x < y; x++) {
            this.load.image(x.toString(), userDeck[x].url);
        }
        console.log(userDeck);
        localStorage.setItem("ownedCards",JSON.stringify(userDeck));
        
    }
    
    create(){
        var scaleRatio = window.devicePixelRatio / 3;
        setBackground('menu', this);
        var screenWidth = getWidth();
        var screenHeight = getHeight();
        this.text = this.add.text(0,0, "firstPage", {font: "40px Impact"});
        var scaleRatio = window.devicePixelRatio / 3;
        setBackground('menu', this);
        this.story = 
        this.add.image(400,300,'story').setScale(0.2).setInteractive();
        this.story.on('pointerdown', function(event){
        this.scene.start("deckset");},this);
        
        
        localStorage.setItem("firstPage",1);
        
        var userDeck = new Array();
        userDeck = localStorage.getItem("ownedCards");
        userDeck = JSON.parse(userDeck);
        
        var card = new Array();
        var currentCard = new Array();
        var newCard = new Array();
        var x;
        var y = userDeck.length;
        this.text = this.add.text(screenWidth * (3 / 5),screenHeight * (3.9 / 5), "YOUR STARTING CARDS", {font: "80px Impact"});
        for (x = 0; x < y; x++) {

            //name of card in owned row
            this.text2 = this.add.text(screenWidth * (4 / 5) + (x * 150) - 70, screenHeight * (3.9 / 5) * (3 / scaleRatio), userDeck[x].key, {
                font: "40px Impact"
            });

            //adds card cards in owned row
            card[x] = this.add.image(screenWidth * (4 / 5) + (x * 150), screenHeight * (4.5 / 5) * (3 / scaleRatio), userDeck[x].key).setInteractive();

            currentCard = card[x];

        }
        
    }
    
    update(){

    }
}