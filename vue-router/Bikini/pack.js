var fs = require('fs');

fs.readFile('./index.html', 'utf8', (err, data) => {
	if (!err) {
		var dataStr = data.toString(),
		timestamp = (new Date()).getTime();
	
		dataStr = dataStr
					.replace('bundle.js', 'bundle.js?v='+timestamp)
					.replace('./dist/Dll.js', './Dll.js?v='+ timestamp);

		fs.writeFile('./dist/index.html', dataStr, (error) => {
			if (!error) {
				console.log('HTML file copy successfully');
			} else {
				console.log(error);
			}
		});
	} else {
		console.log(err);
	}
});
