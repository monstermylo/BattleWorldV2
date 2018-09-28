var characterAccess = (function () {

    var instance;

    function init() {

        //private variables
        var privateVariable = "private2";


        //private methods
        function privateMethod() {
            console.log("private");
        }


        function getCharacter() {
            var character = new Array();
            character = localStorage.getItem("CharacterStats");
            character = JSON.parse(character);
            console.log("character");


            return character;

        }

        function setCharacter(character) {
            console.log("character");
            console.log(character);
            localStorage.setItem("CharacterStats", JSON.stringify(character));

        }
        
        function setChosenCharacter(character) {
            console.log(character);
            console.log(character);
            localStorage.setItem("ChosenCharacterStats", JSON.stringify(character));
        }
        
        function getChosenCharacter(character){
            var character = new Array();
            character = localStorage.getItem("ChosenCharacterStats");
            character = JSON.parse(character);
            return character;
        }
        

        //public methods
        return {
            getCharacterPublic: function () {
                console.log("getCharacterPublic");
                var character = Array();
                character = getCharacter()
                return character;
            },
            setCharacterPublic: function (character) {
                console.log("setCharacterPublic");
                setCharacter(character);
            },
            getChosenCharacterPublic: function () {
                console.log("getChosenCharacterPublic");
                var character = Array();
                character = getChosenCharacter()
                return character;
            },
            setChosenCharacterPublic: function (character) {
                console.log("setCharacterPublic");
                setChosenCharacter(character);
            }
        };

    };


    return {

        getInstance: function () {
            if (null == instance) {
                instance = init();
                instance.constructor = null;
            }
            return instance;
        }
    };


})();