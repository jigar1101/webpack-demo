Create a folder
git init
yarn init -y
yarn add webpack --save-dev

-Webpack must be installed globally
-Create index.js and webpack.config.js
-In index.js any javascript can be written
-In webpack.config.js, create module.exports and write entry point
-Start with a script, start which will have "webpack" as a command
-Run yarn start => This will give an error as output file is not specified
-Create a output object in webpack.config
-Now again run yarn start => This will create a output file in public folder namely index.js (As specified in webpack.config.js)

-Create a html file in public and the file will be included
