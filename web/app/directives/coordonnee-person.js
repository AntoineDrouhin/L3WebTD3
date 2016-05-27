'use strict';

angular.module('myResumeApp')
    .directive('coordonneePerson', function(){
        return {
            restrict : 'E',
            templateUrl : 'app/views/directives/coordonnee-person.html',
            scope : {
                coordonnee : '='
            },
            link : function(scope){

            }
        }
    })
.directive('xp', function () {
    return {
        restrict: 'E',
        templateUrl : 'app/views/directives/xp.html'
    }
});