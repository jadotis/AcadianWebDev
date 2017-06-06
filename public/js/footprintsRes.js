/**
 * Created by jotis on 6/6/2017.
 */

var table = "";
window.onload = function() {
    debugger;
    var DBtable = $.ajax({
        url: "http://localhost:8080/onload",
        async: true,
        type: 'POST',
        dataType: 'json',
        success: function (response) {
            console.log(response);
            table = DBtable.responseText;
        },
        error: function(err){
            console.log(err);
            table = "";
        }
    });
}
