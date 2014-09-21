var readline = require('readline'),
	api = require('./fixtures').GetProducts(),
	Product = require('./product');

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

var app = new Main();

console.log("Welcome\n");

if (api != undefined) {
	console.log("Connection with Success!\n");
	app.run();
} else {
	console.log("Connection FAIL!\n");
	app.close();
}

function Main() {

	this.run = function() {
		rl.question("> ", function(answer) {

			if (answer == 'list') {
				api.forEach(function(item) {
					var product = new Product(item);
					product.execute('read');
				});

				app.continue();
			} else if (answer == 'delete') {
				rl.question('You want to delete? (Type product id) ', function(answer) {
					var index = answer - 1;

					if (index <= api.length) {
						var product = new Product(api[index]);
						api = product.delete(api, index);
					} else {
						console.log("Invalid product id! \n")
					}

					app.continue();
				});
			} else if (answer == 'exit') {
				rl.question('You sure want to leave? ( yes / no ) ', function(answer) {
					if (answer.match(/^y(es)?$/i)) rl.close();
						else app.continue();
				});
			} else {
				console.log("\n valid commands: [ list | create | delete ] \n");
				app.continue();
			}
		});
	};

	this.close = function() {
		rl.close();
	};

	this.continue = function() {
		app.run();
	};
};
