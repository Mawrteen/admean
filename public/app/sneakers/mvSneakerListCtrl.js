angular.module('app').controller('mvSneakerListCtrl', function ($scope, mvCachedSneaker) {
    $scope.sneakers = mvCachedSneaker.query();

    $scope.sortOptions = [
        { value: "title", text: "Sort By Title" },
        { value: "release", text: "Sort By Release Date" }
    ];

    $scope.sortOrder = $scope.sortOptions[0].value;
});