'use strict';

angular.module('myResumeApp')
    .controller('myResumeCtrl', function($scope, Resumes){

        /**
         * Load all CV from the database
         */
        $scope.resumes = new Resumes();
        $scope.resumes.fetch().then(function(){
            console.log($scope.resumes);
        },function(reason){
            console.log(reason);
        });

        $scope.displayResume = function(resume){
            resume.fetch().then(function(){
                $scope.current_resume = resume;
            })
        };

        $scope.hide = function(){
            angular.element('#sidenav').hide();
            angular.element('#show').show();
            angular.element('#hide').hide();
        };
        $scope.display = function(){
            angular.element('#sidenav').show();
            angular.element('#hide').show();
            angular.element('#show').hide();
        }

    });