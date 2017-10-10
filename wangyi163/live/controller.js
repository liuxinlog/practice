/**
 * Created by dllo on 16/12/2.
 */
(function (angular,window) {
    angular.module("wangyi.live",['ngRoute']).config(["$routeProvider",function ($routeProvider) {

        $routeProvider.when("/live",{
            templateUrl:"./live/view.html",
            controller:"liveController"
        })

    }]).controller("liveController",["$scope","$http",function ($scope,$http) {
        $scope.liveBool = true;
        var livepage = 3;
        livejiazai(livepage);
       function livejiazai(page) {
           $http.jsonp("http://localhost:3000/serv/api.php?callback=JSON_CALLBACK&type=live").success(function (data) {
               $scope.liveList=[];
               for(var i = 0;i<page;i++){
                   $scope.liveList.push(data.future[i]);

               }
           });
       }
        window.onscroll =function () {
            var rollTop = document.documentElement.scrollTop || document.body.scrollTop;
            var docHeight = document.documentElement.scrollHeight;
            var viewHeight = document.documentElement.clientHeight;
            if (rollTop+viewHeight==docHeight && livepage<=27){
                livepage+=3;
                livejiazai(livepage);
            }
            if (livepage>27){
                $scope.liveBool = false;
            }
        };


    }])
})(angular,window);
