describe('Global objects', function() {

	it('window object is passed by browser engine and becomes the highest (most global) object', function(){
		expect(window).toBeDefined();
	});

	it('where JS interpreter do not know what object to work on, it passes... global object :(', function(){
		expect(circle.area()).toBeGreaterThan(78);

		var areaFn = circle.area; // this is NOT a call, I take a reference to "member function"
		expect(isNaN(areaFn())).toEqual(true); // NaN ?

		window.radius = 1;
		expect(areaFn()).toEqual(Math.PI);
	});
});