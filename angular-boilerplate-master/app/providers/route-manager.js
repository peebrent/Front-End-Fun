(function ( define ) {
  'use strict';

  define([

  ],
  function (

  ){

    var RouteManager = function ( $stateProvider, $urlRouterProvider, $locationProvider ){

          $locationProvider.html5Mode(true);

          // states
          $stateProvider
            .state('index', {
              url: '/',
              templateUrl: 'views/default.html',
              controller  : function($scope, $basic){

                  $scope.hello = $basic.title;
                  console.log($basic.title);

              }
            })
            .state('test', {
              url: '/test',
              templateUrl: 'views/test.html',
              controller  : function($scope){

                  $scope.test = 'This is a test, yo!';

              }
            });
          // end states
    };

    return ['$stateProvider', '$urlRouterProvider', '$locationProvider', RouteManager ];
  });

}( define ));
