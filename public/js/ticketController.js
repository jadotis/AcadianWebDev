/**
 * Created by jotis on 6/8/2017.
 */


app.controller('ticketController', function ($scope, $element, $timeout, $http) {
    $http.get(baseUrl + "/tickets")
        .success(function (data) {
            if(data.code == "ECONNCLOSED"){
                $scope.result = data;
                debugger;
                $scope.result.mrID = "Error";
                $scope.result.mrTITLE = "DB Connection Error";
                console.log($scope.result);
                document.getElementById('table').innerHTML = "There was a Database Error";
                document.getElementById('table').style = "font-size: 1.6em; margin-left: 4vmax; margin-right: 4vmax; margin-top: 5vmax; color: red;"
                return
            }
            $scope.result = data;
        }).error(function (error) {
            console.log(error);
    });
    console.log($scope.result);

    /*Database call to update page if remaining static */
    $scope.update = function(){
        $http.get(baseUrl + "/tickets")
            .success(function (data) {
                $scope.result = data;
            }).error(function (error) {
            console.log(error);
        });

    }
});

