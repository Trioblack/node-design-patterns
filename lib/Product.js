function Product(item) {
	this.id = item.id;
	this.name = item.name;
	this.description = item.description;
	this.price = item.price;
	this.quantity = item.quantity;

	this.read = function() {
		console.log("Id: " + this.id);
		console.log("Name: " + this.name);
		console.log("Description: " + this.description);
		console.log("Price: " + this.price);
		console.log("Quantity: " + this.quantity);
		console.log("\n");
	}

	this.delete = function() {
		console.log("Name: " + this.name);
		console.log("Description: " + this.description);
		console.log("Price: " + this.price);
		console.log("Quantity: " + this.quantity);
		console.log("\n");
	}
};

module.exports = Product;
