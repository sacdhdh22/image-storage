var myApp = angular.module('myApp', []);

myApp.factory('socket', function(){
    return io.connect('http://localhost:3000');
});

myApp.controller('controller', function($scope, $http, $timeout, socket){
    $scope.fileNameChanged = function (files) {

        $scope.files = files;
    };
    $scope.imgUrl = '/assets/img/profile/abs.jpg';
    $scope.savePhoto = function () {

        var fd = new FormData();

        fd.append("file", $scope.files[0]);


            $http.post("/index", fd, {
                withCredentials: true,
                headers: { 'Content-Type': undefined },
                transformRequest: angular.identity
            }).success(function (data) {
                socket.emit('send Msg', "sa");
                socket.on('get Msg', function(data) {
                    console.log(data);
                    $scope.imgUrl = '/assets/img/profile/abs.jpg'+ '?' + new Date().getTime();
                    $scope.$digest();
                });
            });
        };
});
