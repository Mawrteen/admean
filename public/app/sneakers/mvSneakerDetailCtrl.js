angular.module('app').controller('mvSneakerDetailCtrl', function ($scope, mvSneaker, $routeParams) {
    $scope.sneakerDetail = mvSneaker.query({id: $routeParams.id});
});