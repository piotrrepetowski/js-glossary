function Person(name){
	this.name = name;
};

function newDummyConstructor(){};

var	typesNotPreservingConstructor = [
	new Array, [],
	new Date,
	new Error,
	new Function, function(){},
	Math,
	new Object,	{},
	new RegExp,	/(?:)/,
	new Boolean,
	new Number,
	new String
];

var typesPreservingConstructor = [
	new Boolean, true,
	new Number,	1,
	new String,	"test"
];