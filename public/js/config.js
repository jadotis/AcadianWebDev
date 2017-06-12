/**
 * Created by jotis on 6/8/2017.
 */
var app = angular.module('landing', []); //Application is now bound to landing
var baseUrl = 'http://bos-jotis-d7:8080';   //Should be modified in production
app.config(["$sceDelegateProvider", function ($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
        // Allow same origin resource loads.
        "self",
        // can add other dependencies here for access to external resources.
    ]);
}]);