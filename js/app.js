var app = angular.module('storeApp', []).

    config(['$routeProvider', function ($routeProvider) {
      $routeProvider.

        when('/', { templateUrl: 'pages/products_main.html', activetab: 'products', controller: homeCtrl }).

        when('/product/:productId', {
          templateUrl: function (params) { return 'pages/' + params.productId + '.html'; },
          controller: productCtrl,
          activetab: 'products'
        }).

        when('/about', {
          templateUrl: 'pages/about.html',
          controller: aboutCtrl,
          activetab: 'about'
        }).

        when('/cart', {
          templateUrl: 'pages/cart.html',
          controller: cartCtrl,
          activetab: 'cart'
        }).

        otherwise({ redirectTo: '/' });

         // Referenced this page for how to use hashprefix for urls-  http://stackoverflow.com/questions/31929042/angular-hashprefix-needs-adding-to-all-hrefs

    }]).run(['$rootScope', '$http', '$browser', '$timeout', "$route", function ($scope, $http, $browser, $timeout, $route) {

        $scope.$on("$routeChangeSuccess", function (scope, next, current) {
          $scope.part = $route.current.activetab;
        });

  }]);

app.config(['$locationProvider', function($location) {
    $location.hashPrefix('!');
}]);



//
