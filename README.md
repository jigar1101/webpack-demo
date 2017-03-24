=====================================================================================
Create a folder
git init
yarn init -y
yarn add webpack --save-dev

Webpack must be installed globally
Create index.js and webpack.config.js
In index.js any javascript can be written
In webpack.config.js, create module.exports and write entry point
Start with a script, start which will have "webpack" as a command
Run yarn start => This will give an error as output file is not specified
Create a output object in webpack.config
Now again run yarn start => This will create a output file in public folder namely index.js (As specified in webpack.config.js)
Create a html file in public and the file will be included

=====================================================================================
Install webpack-dev-server
Install webpack-html-plugin

Add devServer to serve from public folder in webpack.config.js
Run npm dev && npm start

Now update the config to use HtmlWebpackPlugin and delete the file from public folder and add it in the root folder
This will ensure the html does not get overridden each time the build is done.
Now the html will be injected using the htmlwebpackplugin

=====================================================================================