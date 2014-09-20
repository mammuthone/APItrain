var http=require('http'),
	path=require('path'),
	express=require('express'),
	bodyParser = require('body-parser'),
	restful=require('node-restful'),
	mongoose=restful.mongoose;

var app = express();

app.use(bodyParser());

if(mongoose.connect('mongodb://localhost/autopsia'))
{
	console.log('connessi al db');
};

var ProductSchema = mongoose.Schema({
	name : String,
	sku : String,
	price: Number
});

var products = restful.model('products', ProductSchema);

products.methods(['get','put','post','delete']);
products.register(app, '/api/products');

var port = 8090;
app.listen(port);
console.log('server listening on '+port);