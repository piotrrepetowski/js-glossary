describe('Constructor validation', function() {
	
	it('using arguments proeprty', function() {
		expect(function(){SafeFoo()}).not.toThrow();
		expect(function(){SafeFoo(1)}).toThrow();
	});
});