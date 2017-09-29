var path = require("path"),
  fs = require('fs'),
  webpack = require("webpack");

var vendors = [
  'vue', 
  'vue-router', 
  'vuex'
];

fs.readFile('./index.html', 'utf8', (err, data) => {
  if (!err) {
    var dataStr = data.toString(),
  
    dataStr = dataStr.replace('<!-- dll -->', '<script src="./dist/Dll.js"></script>');

    fs.writeFile('./index.html', dataStr, (error) => {
      if (!error) {
        console.log('Script tag insert successfully');
      } else {
        console.log(error);
      }
    });
  } else {
    console.log(err);
  }
});


module.exports = {
  entry: {
    vendor: vendors
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "Dll.js",
    library: "[name]_[hash]"
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, "dist", "manifest.json"),
      name: "[name]_[hash]",
      context: __dirname
    })
  ]
};