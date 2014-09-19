var readline = require('readline'),
	shell = require('child_process'),
	api = require('./fixtures'),
	Product = require('./product');

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

var app = new Main();

console.log("Bem Vindo ao CLI-e-commerce\n");

if (api != undefined) {
	console.log("Conexão com a API = sucesso!\n");
	app.run();
} else {
	console.log("Ocorreu um erro ao ler a api\n");
	app.close();
}

function Main() {

	this.run = function() {
		rl.question("> ", function(answer) {

			if (answer == 'listar') {
				api.forEach(function(item) {
					var product = new Product(item);
					product.read();
				});

				app.continue();
			} else if (answer == 'deletar') {
				rl.question('Qual você deseja deletar? (Digite o id do produto) ', function(answer) {
					var index = answer - 1;

					if (index <= api.length)
						delete api[index]
					else
						console.log("Id do produto invalido! \n")

					app.continue();
				});
			} else if (answer == 'exit') {
				rl.question('Tem certeza que deseja sair? ( yes / no ) ', function(answer) {
					if (answer.match(/^y(es)?$/i)) rl.close();
						else app.continue();
				});
			} else {
				console.log("\n Comandos válidos: [ listar | adicionar | deletar ] \n");
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
