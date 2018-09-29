class match extends Phaser.Scene {
    constructor() {
        super({
            key: "match"
        });
    }



    preload() {
        var cardAccessI = cardAccess.getInstance();
        var gamedeck = Array();
        var userdeck = Array();
        userdeck = cardAccessI.getUserDeck();
        gamedeck.push(...userdeck);

        console.log("gamedeck");

        console.log(gamedeck);

        for (var x = 0; x < gamedeck.length; x++) {
            this.load.image(gamedeck[x].keyID, gamedeck[x].url);
        }
        this.load.image('menu', 'assets/menu.png');

        var characterAccessI = characterAccess.getInstance();
        var character = new Array ();
        character = characterAccessI.getChosenCharacterPublic();
        console.log(character);
        this.load.image(character.name,character.url);
    }

    create() {
        

        var cardAccessI = cardAccess.getInstance();
        var scaleRatio = window.devicePixelRatio / 3;
        setBackground('menu', this);
        
        this.text = this.add.text(0, 0, "match", {
            font: "40px Impact"
        });

        var screenWidth = getWidth();
        var screenHeight = getHeight();

        
        var characterAccessI = characterAccess.getInstance();
        var character = new Array ();
        character = characterAccessI.getCharacterPublic();
        
        this.add.image(200, 200, character.name);
        
        var card = new Array();
        var gamedeck = new Array();
        var newCard = new Array();
        var currentCard = new Array();
        var hand = new Array()

        var gamedeck = Array();
        gamedeck = cardAccessI.getUserDeck();
        console.log("gamedeck");
        console.log(gamedeck);
        //if (gamedeck == null || []) {
        //    gamedeck = new Array();
        //}

        shuffle(gamedeck);

        console.log(gamedeck);

        var cardNo;
        this.add.image(screenWidth * (4 / 5) , screenHeight * (0.9 / 5) * (3 / scaleRatio), character.name);
        for (cardNo = 0; cardNo < 5; cardNo++) {
            console.log(cardNo);
            this.text2 = this.add.text(screenWidth * (4 / 5) + (cardNo * 200), screenHeight * (3.9 / 5) * (3 / scaleRatio), gamedeck[cardNo].keyID, {
                font: "40px Impact"
            });

            console.log(scaleRatio);

            this.add.image(screenWidth * (4 / 5) + (cardNo * 200), screenHeight * (4.5 / 5) * (3 / scaleRatio), gamedeck[cardNo].keyID).setInteractive();

            currentCard = card[cardNo];
            console.log(currentCard);
            
            this.atkText = this.add.text(screenWidth * (4 / 5) + (cardNo * 200) - 100, screenHeight * (5.1 / 5) * (3 / scaleRatio), gamedeck[cardNo].atk, {
                font: "40px Impact"
            });
            this.hpText = this.add.text(screenWidth * (4 / 5) + (cardNo * 200) - 100, screenHeight * (5.3 / 5) * (3 / scaleRatio), gamedeck[cardNo].hp, {
                font: "40px Impact"
            });




        }

        this.input.on('gameobjectdown', function (pointer, gameObject, currentCard) {
            console.log(gameObject);
            console.log(currentCard);
        }, this);
        console.log("end");


    }

    update() {
        //this.text = this.add.text( screenWidth, screenHeight, gamedeck[0][0], {font: "40px Impact"})
    }
}