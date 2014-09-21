function SingletonClass() {
	if (arguments.callee.instance)
		return arguments.callee.instance;

	arguments.callee.instance = this;
}

SingletonClass.prototype.GetProducts = function() {
	var api = [{
		"id": 1,
		"name": "First Product",
		"description": "First Description",
		"price": 100,
		"quantity": 50
	}, {
		"id": 2,
		"name": "Second Product",
		"description": "Second Description",
		"price": 30,
		"quantity": 20
	}, {
		"id": 3,
		"name": "Third Product",
		"description": "Third Description",
		"price": 55,
		"quantity": 80
	}];

	return api;
};

SingletonClass.prototype.getInstance = function() {
	var singletonClass = new SingletonClass();
	return singletonClass;
};

module.exports = new SingletonClass();
