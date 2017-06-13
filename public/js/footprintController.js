app.controller('footprintController', function ($scope, $element, $timeout, $http) {


    $scope.selectedOption = "FP Number";
    //Set the default value for the searching
    $scope.placeHolder = "Search for a Deployment....";
    $('select').on('change',function(){
        var place=$(this).val();
        if(place == "Date"){
            $scope.placeHolder ="YYYY-MM-DD";
        }
        else{
            $scope.placeHolder = "Search for a Deployment....";
        }

    });
    function isValidDate(dateString) {
        var regEx = /^\d{4}-\d{2}-\d{2}$/;
        return dateString.match(regEx) != null;

    }

    $scope.tableValues = [];
    $scope.query = function(){
        document.getElementById('startingString').style = "display: none";
        if($scope.queryString == undefined){
            return;
        }
        else if($scope.placeHolder == "YYYY-MM-DD" && !isValidDate($scope.queryString)){
            alert("Dates must be in the form YYYY-MM-DD with '-'");
            return
        }
        console.log($scope.queryString);
        console.log($scope.selectedOption);
         $http.get(baseUrl + "/footprints", {params: {query : $scope.queryString, option: $scope.selectedOption}})
             .success(function (data) {
                $scope.tableValues = data;
                if($scope.tableValues.length < 1){
                    document.getElementById('noResultsFound').style ='display: initial';
                    document.getElementById('errorString').style = 'display: none';
                }
                else if(data.code == "EREQUEST"){
                    document.getElementById('errorString').style = 'display: initial';
                    document.getElementById('noResultsFound').style = 'display: none';
                }
                else{
                    document.getElementById('errorString').style = 'display: none';
                    document.getElementById('noResultsFound').style = 'display: none';
                }
                 for(var i= 0; i< $scope.tableValues.length; i++){
                     if($scope.tableValues[i].Target__bDate == null){
                         $scope.tableValues[i].Target__bDate = 'None          ';
                     }
                     else{
                         $scope.tableValues[i].Target__bDate = $scope.tableValues[i].Target__bDate.slice(0,10);
                     }
                 }
                console.log($scope.tableValues);
             }).error(function (error) {
            console.log(error);
         });


    }
});