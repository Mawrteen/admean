angular.module("app").controller('mvLoginCtrl',
  function ($scope, $http, mvIdentity, mvNotifier, mvAuth) {
    $scope.identity = mvIdentity;
    $scope.signin = function (username, password) {
      mvAuth.authenticateUser(username, password).then(function (success) {
        if(success){
          mvNotifier.notify('Login Successfull!');
        }else{
          mvNotifier.notify('Incorrect Login Credentials!');
        }
      });
    };
});
