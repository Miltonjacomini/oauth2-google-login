'use strict';

var app = angular.module('GoogleOAuth2Microservice', []);


app.config(['$httpProvider', function($httpProvider) {

    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

}]);
