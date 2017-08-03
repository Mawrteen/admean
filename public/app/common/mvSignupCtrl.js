angular.module('app').controller('mvSignupCtrl', function ($scope, mvAuth, mvNotifier, $location) {
    $scope.signup = function () {
        var newUserData = {
            username: $scope.email,
            password: $scope.password,
            firstName: $scope.fname,
            lastName: $scope.lname
        };

        mvAuth.createUser(newUserData).then(function () {
            mvNotifier.notify('Sneakerhead Sign Up Successfull!');
            $location.path('/');
        }, function (reason) {
            mvNotifier.error(reason);
        });
    }
        
});