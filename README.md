# Release Engineering Portal
```
A website template (void of business and database logic) for the release engineering team
at AAM.
```
## Installation
```
Installation is simple, with an installed version of powershell run the "build.ps1" file.
Any missing dependencies (between versions) can be installed with:
"npm install <package name> --save"
***Ensure that you are in the folder with the package.json"
The build script will also check for an installation of node.

If you are running on a computer without PowerShell you can still install
the dependencies by running the npm commands from Bash. 
***Please Do this at your own risk ***
These commands can be found at the latter part of the included
build.ps1 script.

```
![Alt text](/public/img/GithubPhoto.PNG?raw=true "Example DB Query and Display")




## Usage
```
from the source directory run node .\bin\www or the equivalent in
bash ./bin/www
```
## Continued tasks
```
1. Business logic for DBs and Footprints  (COMPLETED)
2. Fix the webform to include the proper field checking for forms (COMPLETED)
3. Finish the back end to include the powershell scripts for file transfers 
4. Add functionality and CSS  (COMPLETED)
5. Figure out how to affix the 'Release Engineering' tag to the top of the Navbar (COMPLETED)
```

