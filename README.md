<snippet>
  <content><![CDATA[
# ${1:Acadian Site}

A website template (void of business and database logic) for the release engineering team
at AAM.

## Installation

Installation is simple, with an installed version of powershell run the "build.ps1" file.
Any missing dependencies (between versions) can be installed with:
"npm install <package name> --save"
***Ensure that you are in the folder with the package.json"

The build script will also check for an installation of node.

## Usage

from the source directory run node .\bin\www or the equivalent in
bash ./bin/www

## Continued tasks

1. Business logic for DBs and Footprints
2. Fix the webform to include the proper field checking for forms
3. Finish the back end to include the powershell scripts for file transfers
4. Add functionality and CSS
5. Figure out how to affix the 'Release Engineering' tag to the top of the Navbar


