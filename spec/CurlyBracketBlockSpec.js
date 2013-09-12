describe('curly bracket block', function() {
    it('can lead to trouble when it starts the left', function() {
        var foo = function() {
            return
            {
                ok: false
            };
        }

        expect(foo()).toBeUndefined();
    });

    it('always work when it starts on the right', function() {
        var foo = function() {
            return {
                ok: false
            };
        }

        expect(foo()).toEqual(jasmine.any(Object));
    });
});
