function hello()
{
	return 'Hello !';
};

var helloFn = function hello2()
{
	return 'Hello2 !';
};

var toType = function(obj)
{
	// ({}).toString is basically the same as Object.prototype.toString
	// we are using generic Object, calling call() method on it (we are passing "object under test")
	// we have to do so because standard types e.g. Array object has toString method overwritten
  	return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
};

var checkArgumentsWithTypeof = function()
{
	return (typeof arguments);
};

var checkArgumentsWithToType = function()
{
	return toType(arguments);
};