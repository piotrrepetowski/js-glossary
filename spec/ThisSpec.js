describe('this keyword', function() {
    beforeEach(function() {
        attribute = undefined;    
    });

    it('is set to window when calling function like this: globalFunctionSetter();', function() {
        expect(attribute).toBeUndefined();
        var value = 12;
        globalFunctionSetter(value);
        expect(attribute).toBe(value);
    });

    it('is set to object when calling function like this: object.memberMethod();', function() {
        var object = new AnObject();
        var value = 15;
        object.setAttribute(value);
        expect(object.attribute).toBe(value);
    });

    it('is set to window when calling member function like this: var f = object.memberMethod; f();', function() {
        var object = new AnObject();
        var method = object.setAttribute;
        var value = 23;
        method(value);
        expect(object.attribute).toBeUndefined();
        expect(attribute).toBe(value);
    });
});
