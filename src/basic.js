function setBackground(fileName, that) {
    var screenWidth = getWidth();
    var screenHeight = getHeight();
    var scaleRatio = window.devicePixelRatio / 3;
    //console.log(scaleRatio);
    //console.log(screenHeight);
    //console.log(screenWidth);

    that.background = that.add.image(screenWidth * (1 + 2/3), screenHeight *(5/3), fileName);
    
    var width = that.background.displayWidth;
    //console.log(width);
    
    var height = that.background.displayHeight;
    //console.log(height);
    
    var scale = (width/screenWidth)*scaleRatio;
    var scaleh = (height/screenHeight)*scaleRatio;
    
    console.log(scale);
    that.background.setScale(scaleh);
    
}

function getWidth(){
    var screenWidth = window.innerWidth * window.devicePixelRatio / 10;
    return screenWidth;
}

//function twitch(event){
//    var cardPlayTween = this.tweens.add({
//            targets: card,
//            x: -0.5,
//            y: 1,
//            ease: 'Power1',
//            duration: 1000,
//            yoyo: true
//        });
//}

function twitch(){
    
}

function getHeight(){
    var screenHeight = window.innerHeight * window.devicePixelRatio / 10;
    return screenHeight;
}

function shuffle (array) {
  var i = 0
    , j = 0
    , temp = null

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
}