describe('prototype', function() {
    describe('Object internal [[Prototype]] attribute', function() {
        it('is not accessible through Prototype', function() {
            expect({}.Prototype).toBeUndefined();
        });

        it('is not accessible through [[Prototype]] attribute', function() {
            var object = {};
            expect({}['[[Prototype]]']).toBeUndefined();
        });

        it('is accessible through non-standard __proto__ attribute', function() {
            expect({}.__proto__).toBeDefined();
        });

        it('is accessible through Object.getPrototypeOf()', function() {
            expect(Object.getPrototypeOf({})).toBeDefined();
        });

        it('is set to value of Object.prototype for new objects', function() {
            expect(Object.getPrototypeOf({})).toBe(Object.prototype);
        });

        it('is set to value of Array.prototype for arrays', function() {
            expect(Object.getPrototypeOf([])).toBe(Array.prototype);
        });

        it('is set to value of Function.prototype for functions', function() {
            expect(Object.getPrototypeOf(function() { return 'foo'; })).toBe(Function.prototype);
        });

        it('is set to null for Object.prototype', function() {
            expect(Object.getPrototypeOf(Object.prototype)).toBe(null);
        });

        it('is set to Object for Function.prototype', function() {
            expect(Object.getPrototypeOf(Function.prototype)).toEqual(jasmine.any(Object));
        });

        it('is set to Bar if Foo inherits from Bar', function() {
            var fooValue = 'bar';

            var alien = {
                foo: fooValue
            };

            person = Object.create(alien);

            expect(Object.getPrototypeOf(person)).toEqual(alien);
        });

        it('can be verified through isPrototypeOf', function() {
            var fooValue = 'bar';

            var alien = {
                foo: fooValue
            };

            person = Object.create(alien);

            expect(alien.isPrototypeOf(person)).toBe(true);
        });

        it('is used to find properties in objects parents', function() {
            var familyValue = 'foo';

            var grandfather = { family: familyValue };

            var father = Object.create(grandfather);

            var son = Object.create(father);

            expect(son.family).toBe(familyValue);
            expect(son.hasOwnProperty('family')).toBe(false);
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
        var Foo = function() { this.foo = 'bar'; };

        it('is an attribute of each funciton', function() {
            expect(Foo.prototype).toBeDefined();
        });

        it('is not a function internal [[Prototype]]', function() {
            expect(Object.getPrototypeOf(Foo)).not.toEqual(Foo.prototype);
        });

        it('is used to set internal [[Prototype]] for objects created by function', function() {
            var fooObject = new Foo();

            expect(Object.getPrototypeOf(fooObject)).toBe(Foo.prototype);
        });

        it('is set to Object by default', function() {
            expect(Foo.prototype).toEqual(jasmine.any(Object));
        });

        it('is set to Object for Object function', function() {
            expect(Object.prototype).toEqual(jasmine.any(Object));
        });
    });

    describe('constructor', function() {
        var Foo = function() { this.foo = 'foo'; };

        var Bar = function() { this.bar = 'bar'; };
        Bar.prototype = new Foo();

        it('is defined in object', function() {
            expect(Object.prototype.constructor).toBe(Object);
        });

        it('is not defined in object', function() {
            var foo = new Foo();
            expect(foo.hasOwnProperty('constructor')).toBe(false);
        });

        it('is defined in prototype', function() {
            var foo = new Foo();
            expect(Object.getPrototypeOf(foo).hasOwnProperty('constructor')).toBe(true);
        });

        it('will be overwritten during inheritance', function() {
            var bar = new Bar();
            expect(bar.constructor).toBe(Foo);
        });

        it('does nothing wiht inheritance', function() {
            var bar = new Bar();
            expect(bar.foo).toBe('foo');
        });
    });
});
