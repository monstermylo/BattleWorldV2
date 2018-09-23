class deckset extends Phaser.Scene {
    constructor() {
        super({
            key: "deckset"
        });
    }



    preload() {
        var userdeck = Array();
        userdeck = localStorage.getItem("userDeck");
        userdeck = JSON.parse(userdeck);
        console.log("userdeck");
        if (userdeck == null) {
            userdeck = {};
        }
        console.log(userdeck);
        var userOwned = Array();
        userOwned = localStorage.getItem("ownedCards");
        //console.log(userOwned);
        userOwned = JSON.parse(userOwned);
        console.log("userowned");
        console.log(userOwned);
        var x;
        var y = userOwned.length;
        for (x = 0; x < y; x++) {
            this.load.image(x.toString(), userOwned[x].url);
        }

        this.load.image('menu', 'assets/menu.png');
        this.load.image('story', 'assets/story.png');

        console.log(userOwned);
    }

    create() {
        this.text = this.add.text(0, 0, "deckset", {
            font: "40px Impact"
        });
        var scaleRatio = window.devicePixelRatio / 3;
        setBackground('menu', this);
        var screenWidth = getWidth();
        var screenHeight = getHeight();
        this.story = this.add.image(400, 300, 'story').setScale(0.2).setInteractive();
        this.story.on('pointerdown', function (event) {
            this.scene.start("match");
        }, this);

        var card = new Array();
        var currentCard = new Array();
        var newCard = new Array();
        console.log(userOwned);
        var userOwned = Array();
        
        console.log("userowned");
        console.log(userOwned);
        
        userOwned = localStorage.getItem("ownedCards");
        userOwned = JSON.parse(userOwned);
        console.log("userowned");
        console.log(userOwned);

        var userdeck = Array();
        userdeck = localStorage.getItem("userDeck");
        userdeck = JSON.parse(userdeck);
        console.log("userdeck");
        console.log(userdeck);
        if (userdeck == null) {
            userdeck = [];
        }
        console.log("userdeck");
        console.log(userdeck);

        var x;
        var y = userOwned.length;
        for (x = 0; x < y; x++) {

            //name of card in owned row
            this.text2 = this.add.text(screenWidth * (4 / 5) + (x * 70) - 70, screenHeight * (3.9 / 5) * (3 / scaleRatio), userOwned[x].keyID, {
                font: "40px Impact"
            });

            //adds card cards in owned row
            card[x] = this.add.image(screenWidth * (4 / 5) + (x * 70), screenHeight * (4.5 / 5) * (3 / scaleRatio), userOwned[x].keyID).setInteractive();

            currentCard = card[x];
            
        }

        var x = 0;
        var y = userdeck.length;
        console.log("userdeck");
        console.log(userdeck);
        for (x = 0; x < y; x++) {
            //console.log(x);
            this.text2 = this.add.text(screenWidth * (4 / 5) + (x * 70) - 70, screenHeight * (2.9 / 5) * (3 / scaleRatio), userdeck[x].keyID, {
                font: "40px Impact"
            });

            //console.log(scaleRatio);

            card[x] = this.add.image(screenWidth * (4 / 5) + (x * 70), screenHeight * (3.5 / 5) * (3 / scaleRatio), userdeck[x].keyID).setInteractive();

            currentCard = card[x];
            
            //console.log(currentCard);
        }

        this.input.on('gameobjectdown', function (pointer, gameObject) {
            console.log(userOwned);
            var key1 = gameObject.texture.key;
            console.log(key1);
            console.log(parseInt(key1, 10));

            if (parseInt(key1, 10) != null) {
                console.log("not null");
            } else {
                console.log("is null");
            }
            console.log(userOwned);
            if (!isNaN(parseInt(key1, 10))) {
                console.log(userOwned);
                var newcard = new Array();
                for (var x = 0; x < userOwned.length; x++){
                    if (userOwned[x].keyID = parseInt(key1, 10)){
                        newcard = userOwned[x];
                        var cardKey = x;
                        
                    }
                }
                console.log(userOwned);
                //console.log(newCard);
                console.log(userdeck);
                console.log(userdeck.length);
                if (userdeck.length < 10 || !userdeck.length) {
                    console.log(newcard);
                    console.log(userOwned);
                    if (userdeck === []){
                        userdeck = newcard;
                    } else {
                        userdeck.push(newcard);
                    }
                    
                    //userdeck.push(newCard);
                    console.log(userdeck);
                    //userOwned.splice(cardKey, 1);
                    var userOwned1 = new Array();
                    for (var x = 0; x < userOwned.length; x++){
                        console.log(userOwned[x].keyID);
                        console.log(userdeck[0].keyID);
                        if (userOwned[x].keyID != userdeck[0].keyID){
                            userOwned1.push(userOwned[x]);
                            console.log(userOwned1);
                        }
                    }
                    
                    userOwned = userOwned1;                    
                    
                    console.log("userowned");
                    console.log(userOwned);
                    localStorage.setItem("ownedCards", JSON.stringify(userOwned));
                    console.log("userdeck");
                    console.log(userdeck);
                    localStorage.setItem("userDeck", JSON.stringify(userdeck));

                    this.scene.start("deckset");

                } else {
                    console.log("deck full");
                }


            }
        }, this);




    }

    update() {
        this.clear = this.add.image(800, 300, 'story').setScale(0.2).setInteractive();
        this.clear.on('pointerdown', function (event) {

            var userOwned = Array();
            userOwned = localStorage.getItem("ownedCards");
            userOwned = JSON.parse(userOwned);
            console.log("userowned");
            console.log(userOwned);

            var userdeck = Array();
            userdeck = localStorage.getItem("userDeck");
            userdeck = JSON.parse(userdeck);
            console.log("userdeck");
            console.log(userdeck);
            if (userdeck == null) {
                userdeck = new Array();
            }
            console.log("userdeck");
            console.log(userdeck);

            var deckCard = new Array();

            var deckLength = userdeck.length;
            var x = 0;
            for (x = 0; x < deckLength; x++) {
                deckCard = userdeck[x];
                console.log(x);
                console.log(deckCard);
                userOwned.push(deckCard);
                console.log(userOwned);
            }

            console.log("userowned");
            console.log(userOwned);

            localStorage.setItem("ownedCards", JSON.stringify(userOwned));

            localStorage.removeItem("userDeck");
            this.scene.start("deckset");
        }, this);
    }
}