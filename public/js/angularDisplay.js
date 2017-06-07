var DBfinal = "";
window.onload = function() {
    debugger;
    var DBtable = $.ajax({
        url: "http://localhost:8080/onload",
        async: false,
        type: 'POST',
        dataType: 'json',
        success: function (response) {
            // /console.log(response);
            DBfinal = response.recordset;
            debugger;
        },
        error: function(err){
            console.log(err);
            DBfinal = "";
        }
    });

}
function tableQuery() {
    // Declare variables
    var input, filter, table, tr, td, i;
    input = document.getElementById("searchbar");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        var td2 = tr[i].getElementsByTagName("td")[1]; //Search by Status
        var td3 = tr[i].getElementsByTagName("td")[2]; //Search by Title
        var td4 = tr[i].getElementsByTagName("td")[3]; // Search by Target Date
        if (td) {
            if( td2 != "Approved"){
                //Red color schema (NYI)
            }
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1 || td2.innerHTML.toUpperCase().indexOf(filter) > -1 || td3.innerHTML.toUpperCase().indexOf(filter) > -1 || td4.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}



var app = angular.module('dashboard', []); //Variable App is now dashboard
app.config(["$sceDelegateProvider", function ($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
        // Allow same origin resource loads.
        "self",
        // can add other dependencies here for access to external resources.
    ]);
}]);
app.controller('mappings', ['$scope', '$document', "$sce", "$window", "$timeout", "$http", function ($scope, $document, $window, $sce, $http) {
    if (DBfinal == ""){
        $scope.errorText = "There was an error pulling information from the DB";
    }
    debugger;
    $scope.first = [DBfinal[0].mrID, DBfinal[0].mrTITLE, DBfinal[0].mrSTATUS, DBfinal[0].Target__bDate.slice(0,10)];
    $scope.second = [DBfinal[1].mrID, DBfinal[1].mrTITLE, DBfinal[1].mrSTATUS, DBfinal[1].Target__bDate.slice(0,10)];
    $scope.third = [DBfinal[2].mrID, DBfinal[2].mrTITLE, DBfinal[2].mrSTATUS, DBfinal[2].Target__bDate.slice(0,10)];
    $scope.fourth = [DBfinal[3].mrID, DBfinal[3].mrTITLE, DBfinal[3].mrSTATUS, DBfinal[3].Target__bDate.slice(0,10)];
    $scope.fifth = [DBfinal[4].mrID, DBfinal[4].mrTITLE, DBfinal[4].mrSTATUS, DBfinal[4].Target__bDate.slice(0,10)];
    $scope.sixth = [DBfinal[5].mrID, DBfinal[5].mrTITLE, DBfinal[5].mrSTATUS, DBfinal[5].Target__bDate.slice(0,10)];
    $scope.seventh = [DBfinal[6].mrID, DBfinal[6].mrTITLE, DBfinal[6].mrSTATUS, DBfinal[6].Target__bDate.slice(0,10)];

    $scope.eight = [DBfinal[7].mrID, DBfinal[7].mrTITLE, DBfinal[7].mrSTATUS, DBfinal[7].Target__bDate.slice(0,10)];
    $scope.nine = [DBfinal[8].mrID, DBfinal[8].mrTITLE, DBfinal[8].mrSTATUS, DBfinal[8].Target__bDate.slice(0,10)];
    $scope.ten = [DBfinal[9].mrID, DBfinal[9].mrTITLE, DBfinal[9].mrSTATUS, DBfinal[9].Target__bDate.slice(0,10)];
    $scope.eleven = [DBfinal[10].mrID, DBfinal[10].mrTITLE, DBfinal[10].mrSTATUS, DBfinal[10].Target__bDate.slice(0,10)];
    $scope.twelve = [DBfinal[11].mrID, DBfinal[11].mrTITLE, DBfinal[11].mrSTATUS, DBfinal[11].Target__bDate.slice(0,10)];
    $scope.thirteen = [DBfinal[12].mrID, DBfinal[12].mrTITLE, DBfinal[12].mrSTATUS, DBfinal[12].Target__bDate.slice(0,10)];
    $scope.fourteen = [DBfinal[13].mrID, DBfinal[13].mrTITLE, DBfinal[13].mrSTATUS, DBfinal[13].Target__bDate.slice(0,10)];
    $scope.fifteen = [DBfinal[14].mrID, DBfinal[14].mrTITLE, DBfinal[14].mrSTATUS, DBfinal[14].Target__bDate.slice(0,10)];




}]);
