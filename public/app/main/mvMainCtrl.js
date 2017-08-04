//Creating controller with a simple message, which for this basic example is kept in this file
angular.module('app').controller('mvMainCtrl', function($scope, mvCachedSneaker){
    $scope.sneakers = mvCachedSneaker.query();
});