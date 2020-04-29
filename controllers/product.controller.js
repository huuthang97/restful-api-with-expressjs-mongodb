const Product = require('../models/product.model.js');

module.exports.products = async (req, res) => {
	try{
		const products = await Product.find();
		res.json(products);
	}
	catch(err){
		res.json({message: err});
	}
}

module.exports.postProduct = async (req, res) => {
	const product = new Product({
		name: req.body.name,
		price: parseInt(req.body.price),
		image: req.body.image
	});

	try{
		const saveProduct = await product.save();
		res.json(saveProduct);
	}
	catch(err){
		res.json({message: err});
	}
	
}

module.exports.getProduct = async (req, res) => {
	const productId = req.params.productId;
	try{
		const product = await Product.findById(productId);
		res.json(product);
	}
	catch(err){
		res.json({message: err});
	}

}

module.exports.patchProduct = async (req, res) => {
	const productId = req.params.productId;
	if(req.body.price){
		req.body.price = parseInt(req.body.price);
	}

	try{
		const updateProduct = await Product.findByIdAndUpdate(productId, req.body);
		res.json(updateProduct);
	}
	catch(err){
		res.json({message: err});
	}
	
}

module.exports.deleteProduct = async (req, res) => {
	const productId = req.params.productId;
	try{
		const delProduct  = await Product.findOneAndDelete(productId);
		res.json(delProduct);
	}
	catch(err){
		res.json({message: err});
	}
	
}
