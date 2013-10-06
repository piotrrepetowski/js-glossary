describe('InstanceOf in comparison to constructor property', function() {
	
	// Conclusion: you should use instanceof to check whether a class is properly inherited
	// you SHOULD TOTALLY STOP using instanceof to check primitve types !
	// more: http://javascript.crockford.com/remedial.html

	it('follows prototype chain', function(){
		var mirek = new Person("Mirek");

		expect(mirek instanceof Person).toBe(true);

		// this is because Person.prototype is an object
		expect(mirek instanceof Object).toBe(true); // that's the proof women JS developers don't complain about being treated as objects
	});

	it('works as expected for not inherited, native types', function(){
		expect([1, 2, 3] instanceof Array).toBe(true);
		expect(/abc/ instanceof RegExp).toBe(true);
		expect({} instanceof Object).toBe(true);

		// inline declared function 
		expect((function(){}) instanceof Function).toBe(true);
		// declared function - "constructor function"
		var constr = function(){};
		expect(constr instanceof Object).toBe(true);
	});

	it('...until some of them are used as primitives. Constructor property still works', function(){
		expect(3 instanceof Number).toBe(false);
		expect((3).constructor).toBe(Number); // noticed () ? It throws SyntaxError: Unexpected token ILLEGAL when used without
		expect(new Number(3) instanceof Number).toBe(true);
		
		expect(true instanceof Boolean).toBe(false);
		expect(true.constructor).toBe(Boolean);
		expect(new Boolean(true) instanceof Boolean).toBe(true);

		expect('a string' instanceof String).toBe(false); // 'a string' is a primitive, String constructor function is not used when creating.
		expect('a string'.constructor).toBe(String); // when you try to access property of primitive String, JS knows there is a constructor fn for that type and checks up constructor property
		expect(new String('a string') instanceof String).toBe(true) // String constructor function used, simple explaination
	});

	it('at least it works correctly with null and undefined', function(){

		var _constrFn = [
			Array,
			Date,
			Error,
			Function,
			Object,
			RegExp,
			Boolean,
			Number,
			String
		];

		for (var i = 0; i < _constrFn.length; i++) {
			var typeUnderTest = _constrFn[i];

			expect(null instanceof typeUnderTest).toBe(false);
			expect(undefined instanceof typeUnderTest).toBe(false);
		}
	});

	it('and TypeError is thrown when constructor function for object do not exist', function(){
		var mirek = null;
		
		expect(mirek instanceof Person).toBe(false);

		expect(function(){ mirek.constructor === Person}).toThrow();
		expect(function(){ return Math instanceof Math; }).toThrow();
	});

	it('it does not quite work between different windows', function(){
		var _myLocalIframe = createIframe();
		createArrayInIframe(_myLocalIframe);

		expect(_myLocalIframe.arr.toString()).toEqual("1,2,3"); // works !
		expect(_myLocalIframe.arr instanceof Array).toBe(false); // why !? Let's check it globally

		expect(Array == _myLocalIframe.Array).toBe(false); // Array construct functions in global window IS DIFFERENT than Array construct function in another window :(
		// this holds true for all the native objects...
		// actually this is not the problem of instanceof operator, it is the problem of JS weird handling of window (global) objects
	});
});