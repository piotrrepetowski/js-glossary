describe('Coercion between Object and primitive back and forth', function(){
	
	it('Primitive to Object ', function(){
		// accessing primitive properties !? JS engine knows there is an Object for string primitve and does conversion on fly
		var str = "hello world !";
		expect(str.length).toEqual(13);
	});

	it('Object to primitive coercion also works (kind of...)', function(){
		// Number to primitive
		var five = new Number(5);
		var six = five + 1;

		expect(six).toEqual(6);

		// String to primitive
		var greet = new String("Hello");
		var fullMessage = greet + ' world !';

		expect(fullMessage).toEqual("Hello world !");

		// Boolean to primitive - not quite what you suspected
		expect(new Boolean(false)).not.toBeFalsy();
		expect(new Boolean(false)).toBeTruthy();
		
		// "workarounds" for Boolean to primitive
		// #1 - valueOf()
		expect(new Boolean(false).valueOf()).toEqual(false);
		expect(new Boolean(true).valueOf()).toEqual(true);
		// #2 - use constructor function instead of creating object
		expect(Boolean(false)).toEqual(false);
		expect(Boolean(true)).toEqual(true);
	});

	it('However, you are not allowed to assign properties to primitive', function(){
		var str = 'Really awesome string';
		str.length = 2; // this would actually cause an error in strict mode with EcmaScript 5 or higher

		expect(str.length).not.toBe(2);
		expect(str.length).toBe(21);
		expect(str.valueOf()).toEqual('Really awesome string');
	});

	// Conclusion - It is safer to stay away from Objects notation. If you really have to stick with Objects, be careful.
});