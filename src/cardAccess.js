var cardAccess = (function () {

    var instance;

    function init() {

        //private variables
        var privateVariable = "private2";


        //private methods
        function privateMethod() {
            console.log("private");
        }


        function getUserOwned() {
            var userOwned2 = new Array();
            userOwned2 = localStorage.getItem("ownedCards");
            userOwned2 = JSON.parse(userOwned2);
            console.log("userowned");
            console.log(userOwned2);

            return userOwned2;

        }

        function setUserOwned(userOwned) {
            console.log("userOwned");
            console.log(userOwned);
            localStorage.setItem("ownedCards", JSON.stringify(userOwned));

        }
        
        function getUserDeckPrivate() {
            var userDeck2 = new Array();
            userDeck2 = localStorage.getItem("userDeck");
            userDeck2 = JSON.parse(userDeck2);
            console.log("userDeck");
            console.log(userDeck2);

            return userDeck2;

        }

        //public methods
        return {
            getOwnedPublic: function () {
                console.log("getOwnedPublic");
                var userOwned2 = Array();
                userOwned2 = getUserOwned()
                return userOwned2;
            },
            setOwnedPublic: function (userOwned) {
                console.log("setOwnedPublic");
                setUserOwned(userOwned);
            },
            getUserDeck: function (){
                console.log("getUserDeck");
                var userDeck2 = Array();
                userDeck2 = getUserDeckPrivate();
                return userDeck2;
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