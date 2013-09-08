describe('OOP', function() {
    describe('instanceof', function() {
        it('does not work when we return {} from construct function.', function() {
            var object = new WrongObject();
            expect(object instanceof WrongObject).toBe(false);
            expect(object instanceof Object).toBe(true);
        });

        it('works when we use this in construct function.', function() {
            var object = new RightObject();
            expect(object instanceof RightObject).toBe(true);
            expect(object instanceof Object).toBe(true);
        });
    });

    describe('var', function() {
        it('simulates private members', function() {
            var object = new RightObject();
            expect(object instanceof RightObject).toBe(true);
            expect(object instanceof Object).toBe(true);
        });
    });

    describe('Protected fields', function() {
        expect(true).toBe(true);
    });

    describe('Public fields', function() {
        expect(true).toBe(true);
    });

    describe('Static fields', function() {
        expect(true).toBe(true);
    });
});
