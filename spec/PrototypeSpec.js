describe('prototype', function() {
    it('is property of function but this is not internal [[Prototype]]', function() {
        var foo = function() {};
        expect(foo.prototype).not.toEqual(foo.__proto__);
    });

    it('in object is set from construct function.prototype attribute value', function() {
        var Foo = function() {};
        var object = new Foo();
        expect(object.__proto__).toBe(Foo.prototype);
    });

    it('points the object parent', function() {
        var literalObject = {};
        expect(literalObject.__proto__).toEqual(Object.prototype);
    });

    it('allows to add new behavior to existing objects', function() {
        var Foo = function() {};
        var object = new Foo();
        var value = 'Bar';
        Foo.prototype.getBar = function() {
            return value;
        };
        expect(object.getBar()).toEqual(value);
    });

    it('canont be replaced globally', function() {
        var Foo = function() {};
        var objectA = new Foo();
        expect(objectA.x).toBeUndefined();
        var Bar = function() {
            this.x = 24;
        };
        Foo.prototype = new Bar();
        var objectB = new Foo();
        expect(objectA.x).toBeUndefined();
        expect(objectB.x).toBeDefined();
    });

    it('in function has property called constructor pointing to function itself', function() {
        var Foo = function() {};
        expect(Foo.prototype.constructor).toBe(Foo);
    });

    it('in objects is not accessible through prototype property', function() {
        expect({}.prototype).toBeUndefined();
    });

    it('in objects is accessible through non standard __proto__ property', function() {
        expect({}.__proto__).toBeDefined();
    });

    it('in objects is accessible through Object.getPrototypeOf()', function() {
        expect(Object.getPrototypeOf({})).toBeDefined();
    });

    xit('can be used to share common behavior', function() {
    
    });

    xit('is a property of all objects', function() {
    
    });

    xit('is chained', function() {
    
    });

    xit('allows to call parent function from child', function() {
    
    });
});
