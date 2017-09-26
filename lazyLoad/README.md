# Generator yx
Basic configuration has been completed base on Webpack and use NodeJS extended.
Later,will try to use Gulp and something extend this.

### Usage

```
npm install
webpack --config webpack.dll.config.js -p
npm start
open loaclhost:3000
```

Now edit `src/index.js` & `src/main.css`.  
Your changes will appear without refresh the browser.

### Packing

```
webpack --watch
webpack -p
node pack.js
```
Command `--watch` will repack the project when you change.  
Command `-p` will compress the bundle.    
`pack.js` It will copy a HTML file into dist folder. So, you can directly run the dist folder in static or any server.

### Dependencies
* webpack
* webpack-dev-server
* babel-loader
* nodejs
