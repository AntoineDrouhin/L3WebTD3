'use strict';

angular.module('myResumeApp')
    .directive('contact', function(){
        return {
            restrict : 'E',
            templateUrl : 'app/views/directives/message.html',
            scope : {
                coordonnee : '='
            },
            link : function(scope){

            }
        }
    });
