/* global res */
(function ( define ) {
  'use strict';

  define([
      //providers
      'providers/route-manager',
      //filters
      'filters/filters',
      //services
      'services/basic',
      //directive
      'components/bg/bg-module'

      ],
    function (
      RouteManager,
      AppFilters,
      BasicService,
      BgChanger
    ){

      var app, appName = 'app';

      app = angular
              .module(appName, [
                'ui.router',
                'ngSanitize',
                'app.filters',
                BgChanger
              ])
              .config( RouteManager )
              .service('$basic', BasicService );

      angular.bootstrap( document.getElementsByTagName('html')[0], [ appName ]);


      return app;
    }
  );

}( define ));
