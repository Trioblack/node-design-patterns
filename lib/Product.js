function Product(item) {
	this.id = item.id;
	this.name = item.name;
	this.description = item.description;
	this.price = item.price;
	this.quantity = item.quantity;

	this.execute = function(command) {
		return this[command]();
	}
};

Product.prototype.read = function() {
	console.log("Id: " + this.id);
	console.log("Name: " + this.name);
	console.log("Description: " + this.description);
	console.log("Price: " + this.price);
	console.log("Quantity: " + this.quantity);
	console.log("\n");
}

Product.prototype.delete = function(items, index) {
	console.log("Produto deletado!\n");

	console.log("Id: " + this.id);
	console.log("Name: " + this.name);
	console.log("Description: " + this.description);
	console.log("Price: " + this.price);
	console.log("Quantity: " + this.quantity);

	console.log("\n\n");

	delete items[index];

	return items;
}

module.exports = Product;
