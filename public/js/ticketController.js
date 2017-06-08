/**
 * Created by jotis on 6/8/2017.
 */


app.controller('ticketController', function ($scope, $element, $timeout, $http) {
    $http.get(baseUrl + "/tickets")
        .success(function (data) {
            $scope.result = data;
        }).error(function (error) {
            console.log(error);
    });
    debugger;

    console.log($scope.result);


    $scope.update = function(){
        $http.get(baseUrl + "/tickets")
            .success(function (data) {
                $scope.result = data;
            }).error(function (error) {
            console.log(error);
        });

    }



});

