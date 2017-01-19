var fs = require('fs');

fs.readFile('./index.html', 'utf8', (err, data) => {
	if (err) {
		console.log(err);
	} else {
		var dataStr = data.toString(),
		timestamp = (new Date()).getTime();
		
		dataStr =  dataStr.replace('bundle.js', 'bundle.js?v='+timestamp).replace('bundle.css', 'bundle.css?v='+timestamp);

		fs.writeFile('./dist/index.html', dataStr, (error) => {
			if (error) {
				console.log(error);
			} else {
				console.log('HTML file copy successful');
			}
		});
	}
});
