describe('Place for all the uncategorized quirks we find', function(){

	describe('Array constructor function', function(){

		it('be careful how you create an array', function(){
			var usingConstrFn = new Array(2, 1);
			expect(usingConstrFn.toString()).toEqual('2,1');

			usingConstrFn = new Array(1);
			expect(usingConstrFn.toString()).not.toEqual('1');
			expect(usingConstrFn.toString()).toEqual('');
			expect(usingConstrFn[0]).toEqual(undefined);
			expect(usingConstrFn.length).toEqual(1);
		});

		it('how big can an Array get ? Not bigger than 2^32 - 1', function(){
			expect(function(){
				var _dimension = Math.pow(2, 32) - 1;
				createArray(_dimension);
			}).not.toThrow();

			expect(function(){
				var _dimension = Math.pow(2, 32);
				createArray(_dimension);
			}).toThrow();

			expect(function(){
				createArray(Number.MAX_VALUE);
			}).toThrow();
		});
	});
});