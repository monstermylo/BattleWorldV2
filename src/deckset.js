class deckset extends Phaser.Scene {
    constructor() {
        super({
            key: "deckset"
        });
    }



    preload() {
        var cardAccessI = cardAccess.getInstance();
        var userdeck = Array();
        userdeck = cardAccessI.getUserDeck("userDeck");

        if (userdeck == null) {
            userdeck = {};
        }

        var userOwned = Array();
        var userOwned = cardAccessI.getOwnedPublic();

        for (var x = 0; x < userOwned.length; x++) {
            this.load.image(userOwned[x].name, userOwned[x].url);
        }

        this.load.image('menu', 'assets/menu.png');
        this.load.image('story', 'assets/story.png');
    }

    create() {
        var cardAccessI = cardAccess.getInstance();
        
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

        var userOwned = Array();
        userOwned = cardAccessI.getOwnedPublic();


        var userdeck = Array();
        userdeck = cardAccessI.getUserDeck();

        if (userdeck == null) {
            userdeck = [];
        }

        for (var x = 0; x < userOwned.length; x++) {

            //name of card in owned row
            this.text2 = this.add.text(screenWidth * (4 / 5) + (x * 70) - 70, screenHeight * (3.9 / 5) * (3 / scaleRatio), userOwned[x].name, {
                font: "40px Impact"
            });

            //adds card cards in owned row
            this.add.image(screenWidth * (4 / 5) + (x * 70), screenHeight * (4.5 / 5) * (3 / scaleRatio), userOwned[x].name).setInteractive();


        }


        for (var x = 0; x < userdeck.length; x++) {
            //console.log(x);
            this.text2 = this.add.text(screenWidth * (4 / 5) + (x * 70) - 70, screenHeight * (2.9 / 5) * (3 / scaleRatio), userdeck[x].name, {
                font: "40px Impact"
            });

            this.add.image(screenWidth * (4 / 5) + (x * 70), screenHeight * (3.5 / 5) * (3 / scaleRatio), userdeck[x].name).setInteractive();

        }


        this.input.on('gameobjectdown', function (pointer, gameObject) {
            //var cardAccessI = cardAccess.getInstance();     
            var userOwned = Array();
            var userOwned = cardAccessI.getOwnedPublic();

            var key1 = gameObject.texture.key;
            var key2 = key1.slice(4);

            if (parseInt(key2, 10) != null) {
                console.log("not null");
            } else {
                console.log("is null");
            }

            if (!isNaN(parseInt(key2, 10))) {

                var newcard = new Array();
                for (var x = 0; x < userOwned.length; x++) {
                    if (userOwned[x].name == key1) {
                        newcard = userOwned[x];
                        var cardKey = x;

                    }
                }

                if (userdeck.length < 10 || !userdeck.length) {

                    if (userdeck === []) {
                        userdeck = newcard;
                    } else {
                        userdeck.push(newcard);
                    }

                    var userOwned1 = new Array();
                    for (var x = 0; x < userOwned.length; x++) {

                        if (userOwned[x].name != newcard.name) {
                            userOwned1.push(userOwned[x]);
                        }
                    }

                    userOwned = userOwned1;

                    cardAccessI.setOwnedPublic(userOwned);

                    localStorage.setItem("userDeck", JSON.stringify(userdeck));

                    console.log("reload");
                    this.scene.start("deckset");

                } else {
                    console.log("deck full");
                }


            }
        }, this);




    }

    update() {
        var cardAccessI = cardAccess.getInstance();
        this.clear = this.add.image(800, 300, 'story').setScale(0.2).setInteractive();
        this.clear.on('pointerdown', function (event) {

            var userOwned = Array();
            var userOwned = cardAccessI.getOwnedPublic();

            var userdeck = Array();
            userdeck = cardAccessI.getUserDeck("userDeck");

            if (userdeck == null) {
                userdeck = new Array();
            }

            var deckCard = new Array();

            for (var x = 0; x < userdeck.length; x++) {
                deckCard = userdeck[x]
                userOwned.push(deckCard);
            }


            cardAccessI.setOwnedPublic(userOwned);

            localStorage.removeItem("userDeck");
            this.scene.start("deckset");
        }, this);
    }
}