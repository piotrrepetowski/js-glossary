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

	it('has some strange behaviour too', function(){
		expect(typeof null).not.toEqual('null');
		expect(typeof null).not.toEqual('undefined');
		expect(typeof null).toEqual('object');
	});
});
