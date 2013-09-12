describe('Tests for custom matchers', function() {
	
	xit('toBeOneOf with default strict value', function(){
		var a = 1;
		var b = "1";
		var c = 4;
		var expected = [1, 2, 3];

		expect(a).toBeOneOf(expected);
		expect(b).not.toBeOneOf(expected);
		expect(c).not.toBeOneOf(expected);
	});

	xit('toBeOneOf with strict true', function(){
		var a = 1;
		var b = "1";
		var c = 4;
		var expected = [1, 2, 3];

		expect(a).toBeOneOf(expected, true);
		expect(b).not.toBeOneOf(expected, true);
		expect(c).not.toBeOneOf(expected, true);
	});

	xit('toBeOneOf with strict false', function(){
		var b = "1";
		var expected = [1, 2, 3];
		expect(b).toBeOneOf(expected, false);
	});
});
