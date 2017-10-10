/**
 * Created by dllo on 16/12/2.
 */

(function (angular) {
    "use strict";
    angular.module("wangyi.home",['ngRoute']).config(["$routeProvider",function ($routeProvider) {
        $routeProvider.when("/home", {
            templateUrl: "./home/view.html",
            controller: "homeController"
        }).otherwise({
            templateUrl: "./home/view.html",
            controller: "homeController"
        })
    }]).controller("homeController",["$scope","$http",function ($scope,$http) {
        $scope.animate = true;

        $http.jsonp("http://localhost:3000/serv/api.php?callback=JSON_CALLBACK&type=home").success(function (data) {
            $scope.list = data.tid;
            $scope.animate = false;
        });
        $('.carousel').carousel({
            interval: 3000
        })
    }])

})(angular);



