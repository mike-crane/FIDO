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


// function Ctrl($scope, $http, $routeParams, $location, $route) {
//
//    }
//
// angular.module('BookingFormBuilder', []).
//         config(function ($routeProvider, $locationProvider) {
//             $routeProvider.
//                 when('/', {
//                    template: 'I\'m on the home page',
//                    controller: Ctrl,
//                    pageKey: 'HOME' }).
//                 when('/page1/create', {
//                    template: 'I\'m on page 1 create',
//                    controller: Ctrl,
//                    pageKey: 'CREATE' }).
//                 when('/page1/edit/:id', {
//                    template: 'I\'m on page 1 edit {id}',
//                    controller: Ctrl, pageKey: 'EDIT' }).
//                 when('/page1/published/:id', {
//                    template: 'I\'m on page 1 publish {id}',
//                    controller: Ctrl, pageKey: 'PUBLISH' }).
//                 otherwise({ redirectTo: '/' });
//
//
