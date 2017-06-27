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
            /* Parse the keys for ng-repeat */
            for (var key in $scope.serverList) {
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
    /*Controllers for the Overlay*/
    $scope.openMenu = function () {
        document.getElementById("addJSON").style.height = "100%";

    };
    $scope.closeMenu = function () {
        document.getElementById("addJSON").style.height = "0%";
    };

    //captures escape key to close the menu.
    $(document).keyup(function (e) {
        if (e.keyCode === 27) $scope.closeMenu();   // esc
    });

    $(document).ready(function () {
        $(".btn-select").each(function (e) {
            var value = $(this).find("ul li.selected").html();
            if (value != undefined) {
                $(this).find(".btn-select-input").val(value);
                $(this).find(".btn-select-value").html(value);
            }
        });
    });

    $(document).on('click', '.btn-select', function (e) {
        e.preventDefault();
        var ul = $(this).find("ul");
        if ($(this).hasClass("active")) {
            if (ul.find("li").is(e.target)) {
                var target = $(e.target);
                target.addClass("selected").siblings().removeClass("selected");
                var value = target.html();
                $(this).find(".btn-select-input").val(value);
                $(this).find(".btn-select-value").html(value);
            }
            ul.hide();
            $(this).removeClass("active");
        }
        else {
            $('.btn-select').not(this).each(function () {
                $(this).removeClass("active").find("ul").hide();
            });
            ul.slideDown(300);
            $(this).addClass("active");
        }
    });

    $(document).on('click', function (e) {
        var target = $(e.target).closest(".btn-select");
        if (!target.length) {
            $(".btn-select").removeClass("active").find("ul").hide();
        }
    });


    $scope.sendJSON = function () {

        $scope.package = {
            "method": angular.element("#method").val(),
            "jobname": angular.element("#jobName").val(),
            "prodserver": angular.element("#prodServer").val(),
            "uatserver": angular.element("#uatServer").val(),
            "qaserver": angular.element("#qaServer").val(),
            "devserver": angular.element("#devServer").val()
        };
        debugger;
        $http({
            url: baseUrl + '/jsonRecieve',
            data: $scope.package,
            method: 'POST',
            headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}
        }).success(function() {
            console.log("let us test");
        })


    }

});


