(function( define ) {
  'use strict';

  /**
   * Register the Controller class with RequireJS
   */
  define([
      // Deps,
    ],
    function (
      // Deps Vars
    ){

      var BgChangerDirective = function( $basic ){
            // Returns Directive Creation Object
            return {
              restrict: 'AE',
              templateUrl: './components/bg/bg.html',
              link: {
                pre: function(scope, iElem, iAttrs) {
                  // Before child scopes have been linked
                },
                post: function(scope, iElem, iAttrs) {
                  // after child scopes have been linked
                  // console.dir(iElem[0]);
                  // iElem[0].addEventListener('mousedown', function(){
                  //   //do something
                  //   document.body.style.backgroundColor = '#ff0000';
                  // });
                  scope.title = $basic.title;//I thinkkkkk
                  scope.changeBg = function(){
                    document.body.style.backgroundColor = '#ff0000';
                  };
                },
              }
            };
          }; // End Directive def


      // If Using Angular Dep Injection
      return [ '$basic', BgChangerDirective ];

      // return BgChangerDirective;
    } // end require function
  ); // end define call

}( define ));
