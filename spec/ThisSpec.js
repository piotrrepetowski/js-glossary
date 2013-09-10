describe('this', function() {
    beforeEach(function() {
        attribute = undefined;    
    });

    it('is set to window when calling function like this: fooFunction();', function() {
        expect(attribute).toBeUndefined();
        var value = 12;
        globalFunctionSetter(value);
        expect(attribute).toBe(value);
    });

    it('is set to object when calling function like this: object.fooFunction();', function() {
        var object = new AnObject();
        var value = 15;
        object.setAttribute(value);
        expect(object.attribute).toBe(value);
        expect(attribute).toBeUndefined();
    });

    it('is set to window when calling member function like this: var f = object.fooFunction; f();', function() {
        var object = new AnObject();
        var method = object.setAttribute;
        var value = 23;
        method(value);
        expect(object.attribute).toBeUndefined();
        expect(attribute).toBe(value);
    });

    it('is set to new object when function is used with new operator: var object = new fooFunction();', function() {
        var object = new AnObject();
        var value = 12;
        var newObject = new object.setAttribute(value);
        expect(newObject.attribute).toBe(value);
        expect(object.attribute).toBeUndefined();
    });

    it('is set to specified object when function is passed as apply function parameter: fooFunction.apply(object);', function() {
        var objectA = new AnObject();
        var objectB = new AnObject();
        var value = 19;
        objectA.setAttribute.apply(objectB, [value]);
        expect(objectA.attribute).toBeUndefined();
        expect(objectB.attribute).toBe(value);
    });

    it('is set to specified object when function is passed as call function parameter: fooFunction.call(object);', function() {
        var objectA = new AnObject();
        var objectB = new AnObject();
        var value = 19;
        objectA.setAttribute.call(objectB, value);
        expect(objectA.attribute).toBeUndefined();
        expect(objectB.attribute).toBe(value);
    });

    it('is window when set to null - not in strict mode', function() {
        var object = new AnObject();
        expect(object.getThis.call(null)).toBe(window);
        expect(object.getThis.apply(null)).toBe(window);
    });

    it('is window when set to undefined - not in strict mode', function() {
        var object = new AnObject();
        expect(object.getThis.call(undefined)).toBe(window);
        expect(object.getThis.apply(undefined)).toBe(window);
    });

    it('is object even for primitive types - not in strict mode', function() {
        var object = new AnObject();
        expect(typeof object.getThis.call(1)).toEqual('object');
        expect(typeof object.getThis.call(true)).toEqual('object');
        expect(typeof object.getThis.call("foo")).toEqual('object');
    });

    it('is window in indirect eval call', function() {
        expect((1, eval)('this')).toBe(window);
    });

    it('is current this in direct eval call', function() {
        expect(eval('this')).toBe(this);
    });

    it('can be binded using bind function (since ECMAScript 5)', function() {
        var objectA = new AnObject();
        var objectB = new AnObject();
        var bindedGetThis = objectA.getThis.bind(objectB);
        expect(bindedGetThis()).toBe(objectB);
        expect(bindedGetThis.call(objectA)).toBe(objectB);
        expect(bindedGetThis.apply(objectA)).toBe(objectB);
        objectA.bindedGetThis = bindedGetThis;
        expect(objectA.bindedGetThis()).toBe(objectB);
    });

    it('is not accessible for closure and is window', function() {
        var object = new AnObject();
        expect(object.getThisFromWrongClosure()).toBe(window);
        expect(object.getThisFromWrongClosure()).not.toBe(object);
    });

    it('can be accessible for closure when passed through variable', function() {
        var object = new AnObject();
        expect(object.getThisFromRightClosure()).toBe(object);
    });
});
