class match extends Phaser.Scene {
    constructor() {
        super({key:"match"});
    }
    
    
    
    preload(){
        var userdeck = Array();
        userdeck = localStorage.getItem("userDeck");
        console.log("userdeck");
        if (userdeck == null || []) {
            userdeck = new Array();
        }
        console.log(userdeck);
        var x;
        var y = userdeck.length;
        for (x = 0; x < y; x++) {
            this.load.image(x.toString(), userdeck[x][4]);
        }
        this.load.image('menu', 'assets/menu.png');
        //this.load.image('MM', 'assets/cards/Miles_Morales.png');
        //this.load.image('CM', 'assets/cards/Captain_Marvel.png');
        
    }
    
    create(){
        var scaleRatio = window.devicePixelRatio / 3;
        setBackground('menu', this);
        this.text = this.add.text(0,0, "match", {font: "40px Impact"});

        var screenWidth = getWidth();
        var screenHeight = getHeight();
        
        var card = new Array ();    
        var userDeck = new Array ();
        var newCard = new Array ();
        var currentCard = new Array ();
        var hand = new Array ()
        
        var userdeck = Array();
        userdeck = localStorage.getItem("userDeck");
        console.log("userdeck");
        if (userdeck == null || []) {
            userdeck = new Array();
        }
        
        shuffle(userDeck);
        
        console.log(userDeck);
        
        var cardNo;
        
        for (cardNo = 0; cardNo < 5; cardNo++){
            console.log(cardNo);
            this.text2 = this.add.text( screenWidth* (4/5)+ (cardNo * 200), screenHeight * (3.9/5) * (3/scaleRatio), userDeck[cardNo][0], {font: "40px Impact"});
            
            console.log(scaleRatio);
            
            card[cardNo] = this.add.image(screenWidth * (4/5) + (cardNo * 200), screenHeight * (4.5/5) * (3/scaleRatio) , userDeck[cardNo][0]).setInteractive();
            
            currentCard = card[cardNo];
            console.log(currentCard);
        
            
            //currentCard.on('gameobjectdown', playCard(event,userDeck[cardNo]));
            this.input.on('gameobjectdown', function (pointer,gameObject,currentCard){
                      console.log(gameObject);
                console.log(currentCard);
                },this);
            console.log("end");
            
        }
        
        /*card.input.on('gameobjectdown', function (pointer,gameObject){
                      console.log(gameObject);
        },this);*/
        
        
        function playCard(event, card){
            console.log(card);
            inPlayCard(card);
        }
        
    }
    
    update(){
        //this.text = this.add.text( screenWidth, screenHeight, userDeck[0][0], {font: "40px Impact"})
    }
}