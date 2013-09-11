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

	it('has some strange behaviour too', function(){
		expect(typeof null).not.toEqual('null');
		expect(typeof null).not.toEqual('undefined');
		expect(typeof null).toEqual('object');
	});
});