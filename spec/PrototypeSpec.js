describe('prototype', function() {
    describe('Object internal [[Prototype]] attribute', function() {
        it('is accessible through Object.getPrototypeOf()', function() {
            expect(Object.getPrototypeOf({})).toEqual({});
        });

        it('is set to value of Object.prototype for new objects', function() {
            expect(Object.getPrototypeOf({})).toBe(Object.prototype);
        });

        it('is set to null for Object.prototype', function() {
            expect(Object.getPrototypeOf(Object.prototype)).toBe(null);
        });
    
        it('is set to Function.prototype for new functions', function() {
            var foo = function() {};
            expect(Object.getPrototypeOf(foo)).toEqual(Function.prototype);
        });

        it('is set to Object for Function.prototype', function() {
            expect(Object.getPrototypeOf(Function.prototype)).toEqual(jasmine.any(Object));
        });

        it('is set to Bar if Foo inherits from Bar', function() {
            var person = {};

            var fooValue = 'bar';

            var alien = {
                foo: fooValue
            };

            // __proto__ is non standard attribute
            person.__proto__ = alien;

            expect(Object.getPrototypeOf(person)).toEqual(alien);
        });

        it('can be verified through isPrototypeOf', function() {
            var person = {};

            var fooValue = 'bar';

            var alien = {
                foo: fooValue
            };

            // __proto__ is non standard attribute
            person.__proto__ = alien;

            expect(alien.isPrototypeOf(person)).toBe(true);
        });

        it('is used to find properties in objects parents', function() {
            var familyValue = 'foo';

            var grandfather = { family: familyValue };

            var father = {};
            // __proto__ is non standard attribute
            father.__proto__ = grandfather;

            var son = {};
            // __proto__ is non standard attribute
            son.__proto__ = father;

            expect(son.family).toBe(familyValue);
        });

        it('can be replaced dynamically', function() {
            var familyValue = 'foo';

            var grandfather = {};

            var father = {};
            // __proto__ is non standard attribute
            father.__proto__ = grandfather;

            var son = {};
            // __proto__ is non standard attribute
            son.__proto__ = father;

            expect(son.family).toBeUndefined();

            grandfather.family = familyValue;

            expect(son.family).toBe(familyValue);
        });
    });

    describe('Function prototype attribute', function() {
        it('is an attribute of each funciton', function() {
            var foo = function() {};
            expect(foo.prototype).toBeDefined();
        });

        it('is not a function internal [[Prototype]]', function() {
            var foo = function() {};
            expect(Object.getPrototypeOf(foo)).not.toEqual(foo.prototype);
        });

        it('is used to set internal [[Prototype]] for objects created by function', function() {
            var Foo = function() {};
            var fooObject = new Foo();

            expect(Object.getPrototypeOf(fooObject)).toBe(Foo.prototype);
        });
    });
});
