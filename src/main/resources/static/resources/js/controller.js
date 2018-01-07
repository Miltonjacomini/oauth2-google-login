'use strict';

app.controller('AppCtrl', function($http, $scope) {

    var getUser = function () {

        $http.get('/users').success(function(user) {

            $scope.user = user;
            console.log('Logged user: ', user);

        }).error(function(error) {
            $scope.resource = error;
        });
    };

    getUser();


    $scope.logout = function() {

        $http.post('/logout').success(function(res) {

            $scope.user = null;

        }).error(function(error) {
            console.log("Logout error: ", error);
        });
    };

});