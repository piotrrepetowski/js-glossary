describe('TypeOf should be used for primitive types ONLY ! (except null :D)', function() {

	// Conclusion: you should use typeof for primitive types (except null)
	it('works as expected for most types', function(){
		expect(typeof undefined).toEqual('undefined');
		expect(typeof 5).toEqual('number');
		expect(typeof 'string').toEqual('string');
		expect(typeof []).toEqual('object');
		expect(typeof {}).toEqual('object');
		expect(typeof function(){}).toEqual('function');
	});

	it('when used with new operator it wraps primitive with object !', function(){
		// using primitives
		expect(typeof true).toEqual('boolean');
		expect(typeof "abc").toEqual('string');
		expect(typeof 123).toEqual('number');
			
		// using constructor function
		expect(typeof Boolean(true)).toEqual('boolean');
		expect(typeof String("abc")).toEqual('string');
		expect(typeof Number(123)).toEqual('number');

		// new operator causes JS to create empty object and map constructor function return value to empty object property
		expect(typeof new Boolean(true)).not.toEqual('boolean');
		expect(typeof new Boolean(true)).toEqual('object');

		expect(typeof new String("abc")).not.toEqual('string');
		expect(typeof new String("abc")).toEqual('object');

		expect(typeof new Number(123)).not.toEqual('number');
		expect(typeof new Number(123)).toEqual('object');
	});

	it('has some strange behaviour with null', function(){
		expect(typeof null).not.toEqual('null');
		expect(typeof null).not.toEqual('undefined');
		expect(typeof null).toEqual('object'); // It is a mistake in specification and as far as I know there are talks to fix this in next version of ECMAScript
	});

	it('and even weirder with NaN', function(){
		expect(typeof NaN).toBe('number'); // quite illogical but the standard says NaN is a valid Number...
	});

	it('and you can use it like a function even though it is still an unary operator', function(){
		expect(typeof(5)).toEqual('number');
		expect(typeof(4 + 1)).toEqual('number');
	});

	it('but pay attention with check anonymous functions types', function(){
		// pay attention to this huge inconsistency. Both my hello function and e.g. Number() constructor function are functions. 
		// I can create objects with both hello and Number, yet built-in Number is considered an object, my custom one is not.
		expect(typeof hello).toEqual('function'); 
		expect(typeof hello2).toEqual('undefined');
		expect(typeof helloFn).toEqual('function');
	});

	it('a possibility of fixing this operator proposed by Angus Croll - toType vs typeof', function(){
		var obj = {a: 3};
		expect(toType(obj)).toEqual('object');
		expect(typeof obj).toEqual('object');

		var num = new Number(5);
		expect(toType(num)).toEqual('number');
		expect(typeof num).toEqual('object');

		var str = new String('hello');
		expect(toType(str)).toEqual('string');
		expect(typeof str).toEqual('object');

		var array = [1, 2, 3];
		expect(toType(array)).toEqual('array');
		expect(typeof array).toEqual('object');

		var bool = new Boolean(true);
		expect(toType(bool)).toEqual('boolean');
		expect(typeof bool).toEqual('object');

		expect(checkArgumentsWithTypeof()).toEqual('object');
		expect(checkArgumentsWithToType()).toEqual('arguments');

		expect(toType(new ReferenceError)).toEqual('error');
		expect(typeof new ReferenceError).toEqual('object');

		expect(toType(new Date)).toEqual('date');
		expect(typeof new Date).toEqual('object');

		expect(toType(/a-z/)).toEqual('regexp');
		expect(typeof /a-z/).toEqual('object');

		expect(toType(Math)).toEqual('math');
		expect(typeof Math).toEqual('object');

		expect(toType(JSON)).toEqual('json');
		expect(typeof JSON).toEqual('object');

		// More on that : http://javascriptweblog.wordpress.com/2011/08/08/fixing-the-javascript-typeof-operator/
	});

	it('and the idea with toType seems to work really well when dealing with global window object', function(){
		// expect(toType(window)).toContain('global');
		// alert(toType(window));
		// it can actually return different stuff which depends on the browser engine which passes global "window" object
		// "global" (Chrome) "domwindow" (Safari) "window" (FF/IE9) "object" (IE7/IE8)

		// expect(toType(document)).toContain('htmldocument');
		// alert(toType(document));
		// the same with document object
		// "htmldocument" (Chrome/FF/Safari) "document" (IE9) "object" (IE7/IE8)
	});
});
