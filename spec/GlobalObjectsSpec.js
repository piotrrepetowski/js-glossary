describe('Global objects', function() {

	it('window object is passed by browser engine and becomes the highest (most global) object', function(){
		expect(window).toBeDefined();
	});

	it('where JS interpreter do not know what object to work on, it passes... global object :(', function(){
		expect(circle.area()).toBeGreaterThan(78);

		var areaFn = circle.area; // this is NOT a call, I take a reference to "member function"
		expect(isNaN(areaFn()).toBeTrue(); // NaN ?

		window.radius = 1;
		expect(areaFn()).toBeEqual(3.1415);

		window.area = function()
		{
			return 'You though I will calculate anything ?. No way !';
		};

		expect(areaFn()).toBeEqual('You though I will calculate anything ?. No way !');
	});
});