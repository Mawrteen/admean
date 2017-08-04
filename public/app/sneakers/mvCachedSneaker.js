angular.module('app').factory('mvCachedSneaker', function (mvSneaker) {
    var sneakersList;

    return {
        query: function () {
            if(!sneakersList){
                sneakersList = mvSneaker.get();
            }
            return sneakersList;
        }
    }
});