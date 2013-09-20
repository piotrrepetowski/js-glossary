describe('InstanceOf in comparison to constructor property', function() {
	
	// Conclusion: you should use instanceof to check whether a class is properly interited
	it('follows prototype chain', function(){
		var mirek = new Person("Mirek");

		expect(mirek instanceof Person).toBe(true);

		// this is because Person.prototype is an object
		expect(mirek instanceof Object).toBe(true); // that's the proof women JS developers don't complain about being treated as objects
	});

	it('and TypeError is thrown when constructor function for object do not exist', function(){
		expect(function(){ return Math instanceof Math; }).toThrow();
	});
});