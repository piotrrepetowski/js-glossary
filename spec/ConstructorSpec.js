describe('Constructor property returns reference to constructor function', function() {

	it('for built-in types', function(){
		var newObject = new Object;
		var newObjectFromLiteral = {};

		expect(newObject.constructor).toBe(Object);
		expect(newObjectFromLiteral.constructor).toBe(Object);

		var arrayObject = new Array;
		var arrayObjectFromLiteral = [];

		expect(arrayObject.constructor).toBe(Array);
		expect(arrayObjectFromLiteral.constructor).toBe(Array);

		var newString = new String('abc');
		var newStringDiffNotation = 'abc';

		expect(newString.constructor).toBe(String);
		expect(newStringDiffNotation.constructor).toBe(String);

		var newNumber = new Number(7);
		var newNumberDiffNotation = 7;

		expect(newNumber.constructor).toBe(Number);
		expect(newNumberDiffNotation.constructor).toBe(Number);
	});

	it('does not follow prototype chain', function(){
		var mirek = new Person("Mirek");
		
		expect(mirek.constructor).toBe(Person);
		expect(mirek.constructor).toNotBe(Object);
	});

	it('for custom types', function(){
		var mirek = new Person("Mirek");

		expect(mirek.constructor).toBe(Person);
	});

	it('unfortunately it works with prototype overwriting too...', function(){
		var piotrek = new Person("Piotr");
		expect(piotrek.constructor).toBe(Person); 

		Person.prototype = {};
		var mirek = new Person("Mirek");
		
		expect(mirek.constructor).not.toBe(Person); // God forbids, JS allows...
		expect(mirek.constructor).toBe(Object);
	});

	it('which is good unless you overwrite the constructor...', function(){
		for (var i = 0; i < typesNotPreservingConstructor.length; i++) {
			var typeUnderTest = typesNotPreservingConstructor[i];
			typeUnderTest.constructor = newDummyConstructor;

			expect(typeUnderTest.constructor).toBe(newDummyConstructor);
		}
	});
});
