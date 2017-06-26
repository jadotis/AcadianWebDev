/**
 * Created by jotis on 6/23/2017.
 */
app.controller('tableController', function ($scope, $element, $timeout, $http) {
    $scope.serverList = '';
    $http.get(baseUrl + "/jsonRead")
        .success(function (data) {
            if (data.code == "ENOENT") {
                document.getElementById("mainTable").style = "display: none";
            }
            $scope.serverList = data.servers;
            $scope.array = [];
            for(var key in $scope.serverList){
                $scope.array.push($scope.serverList[key]);
            }
            console.log($scope.array);

            $scope.sortType = '"name"'; // set the default sort type
            $scope.sortReverse = false;  // set the default sort order
            $scope.searchTerm = '';







            //success goes here;
        }).error(function (error) {
        console.log(error);
    });
});


