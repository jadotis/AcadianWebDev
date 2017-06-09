app.controller('footprintController', function ($scope, $element, $timeout, $http) {

    //Set the default value for the searching
    $scope.selectedOption = "FP Number";

    $scope.query = function(){
        if($scope.queryString == undefined){
            return;
        }
        console.log($scope.queryString);
        console.log($scope.selectedOption);
        //
        // $http.get(baseUrl + "/tickets")
        //     .success(function (data) {
        //         $scope.result = data;
        //     }).error(function (error) {
        //     console.log(error);
        // });

    }
});