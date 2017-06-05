function formValidate(){
    var errorMessage  = '';

    /* Extract all of the values from the form field for validation */
    var username,password,email,srcPath, destPath,fileInfo, server, description;
    username = document.getElementsByName("login")[0].value;
    password = document.getElementsByName("password")[0].value;
    email = document.getElementsByName("email")[0].value;
    srcPath = document.getElementsByName("srcPath")[0].value;
    destPath = document.getElementsByName("destPath")[0].value;
    fileInfo = document.getElementsByName("fileInfo")[0].value;
    server = document.getElementsByName("server")[0].value;
    description =  document.getElementById("textarea").value;
    //These are all working assignments, time to error check.
    var inputValues = [username,password,email,srcPath, destPath,fileInfo, server, description];
    console.log(inputValues);

    //Error handling
    for(var i = 0; i< inputValues.length; i++){
       if(inputValues[i] == null || inputValues[i] == undefined || inputValues[i] == ""){
           switch(i){
               case 0: errorMessage = "Please input a username"; break;
               case 1: errorMessage = "Please input a password"; break;
               case 2: errorMessage = "Please input an email"; break;
               case 3: errorMessage = "Please include a Source Path"; break;
               case 4: errorMessage = "Please include a Destination Path"; break;
               case 5: errorMessage = "Please include a file type"; break;
               case 6: errorMessage = "Please select a server name"; break;
               case 7: errorMessage = "Please include a description"; break;
           }
           break;
       }
    }
    renderError(errorMessage);
    errorMessage= "";

    /* type checking on boxes */
    




};

function renderError(errorMessage){
    //Produces the appropriate error if there exists one as indicated
    //by the error string.
    if(errorMessage != ""){
        document.getElementById("errorString").style.display = "block";
        document.getElementById("errorString").innerHTML = errorMessage;
        document.getElementById("successMessage").style.display = "none";
        //Change the display parameter
    }
    else{
        document.getElementById("errorString").style.display = "none";
        document.getElementById("successMessage").style.display = "block";
    }
};
