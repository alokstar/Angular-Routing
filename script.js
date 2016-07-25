/**
 * Created by Alok on 6/21/2016.
 */
var app=angular
               .module('demo',['ngRoute'])
               .config(function ($routeProvider) {
                   $routeProvider
                       .when("/home",{
                           templateUrl:"partialTemplates/home.html",
                           controller:"teracontroller"
                       })
                       .when("/courses",{
                           templateUrl:"partialTemplates/courses.html",
                           controller:"teracontroller"
                       })
                       .when("/students",{
                           templateUrl:"partialTemplates/students.html",
                           controller:"teracontroller"
                       })
                       .otherwise({
                           redirectTo:"/home"
                       })
               })
               .controller("teracontroller",function ($scope) {
                   var students=[{name:'abc',course:'sql',school:'UB'},
                       {name:'kakds',course:'java',school:'US'},
                       {name:'rishi',course:'front-end',school:'UNCC'},
                       {name:'ojas',course:'back-end',school:'JSX'}];
                   $scope.students=students;
                   $scope.message="Home Page";
               })

               // .controller("homeController",function ($scope) {
               //     $scope.message="HOme Page";
               // })
               // .controller("coursesController",function ($scope) {
               //     $scope.students=students;
               // })
               // .controller("studentsController",function ($scope) {
               //     $scope.students=students;
               // })