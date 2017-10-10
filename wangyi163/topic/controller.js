/**
 * Created by dllo on 16/12/2.
 */
(function (angular,window) {
    angular.module("wangyi.topic",['ngRoute']).config(["$routeProvider",function ($routeProvider) {
        $routeProvider.when("/topic",{
            templateUrl:"./topic/view.html",
            controller:"topicController"
        })
    }]).controller("topicController",["$scope","$http",function ($scope,$http) {
        var initPage =4;

        $scope.jiazaiani = true;
            jiazai(initPage);

           function jiazai(pageC) {
               $http.jsonp("http://localhost:3000/serv/api.php?page="+pageC+"&callback=JSON_CALLBACK&type=topic").success(function (data) {
                   $scope.dis=[];
                   $scope.dis.push(data.data.expertList)

               })
           }
           window.onscroll=function () {
               //页面滚动偏移
               var rollTop = document.documentElement.scrollTop || document.body.scrollTop;
               //页面总高度
               var docHeight = document.documentElement.scrollHeight;
               //页面可以见高度
               var cliHeight = document.documentElement.clientHeight;

               if (cliHeight+rollTop==docHeight&&initPage<=20) {
                   initPage += 4;
                   jiazai(initPage);
               }
               if (initPage>20){
                   $scope.jiazaiani=false;
               }

           }

        }])

})(angular,window);
