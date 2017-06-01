#This is an install /build script for website/node project:

#Build the dependencies when installed in a new directory:


if(!(Test-Path  "." -include "app.js"))
{
    throw "Cannot install the dependencies in this directory";
    exit;
}

#Check for an installation of node:
try
{
    $version = node -v;
}
catch
{
   throw "There is no version of Node.js installed"; 
}

Write-Host "Beginning to install the dependencies for the project";
#Dependencies

npm install body-parser --save
npm install cookie-parser --save
npm install express --save
npm install express session --save
npm install handlebars --save
npm install morgan --save
npm install pug --save
npm install request --save
npm install serve-favicon --save




