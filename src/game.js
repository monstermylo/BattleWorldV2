var config = {
    type: Phaser.AUTO,
    width: window.innerWidth * window.devicePixelRatio,
    height: window.innerHeight * window.devicePixelRatio,
    physics: {
        defaul: 'arcade',
        arcade: {
            gravity: {y: 200}
        }
    },
    //scene: [ example1, example2 , example3, match ]
    scene: [ example1, firstPage, deckset, match, example2 , example3 ]
};

var game = new Phaser.Game(config);