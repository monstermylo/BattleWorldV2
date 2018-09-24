var cardAccess = (function () {

    var instance;

    function init() {
        function privateMethod() {
            console.log("private");
        }
        var privateVariable = "private2";

        return {
            getOwnedPublic: function () {
                console.log("getOwned public");
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