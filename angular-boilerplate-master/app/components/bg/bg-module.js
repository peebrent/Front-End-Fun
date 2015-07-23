(function ( define, angular ) {
  'use strict';

  define([
      'components/bg/bg-directive'
    ],
    function (
      BgDirective
    ){
      var moduleName = 'app.Bg';

      angular.module( moduleName, [] )
        .directive( 'bgChanger', BgDirective );

      return moduleName;
    }
  );

}( define, angular ));
