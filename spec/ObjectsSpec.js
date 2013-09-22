describe('Objects', function() {
    describe('creation', function() {
        describe('literal notation', function() {
            var object = { foo: 'bar' };
            it('is a way of creating objects', function() {
                expect(object).toBeDefined();
            });

            it('creates instanceof Object', function() {
                expect(object instanceof Object).toBe(true);
            });
        });

        describe('construct function', function() {
            var Foo = function() {
                this.foo = function() {return 'bar';};
            };
            var object = new Foo();

            it('is a way of creating objects', function() {
                expect(object).toBeDefined();
            });

            it('creates instanceof Foo', function() {
                expect(object instanceof Foo).toBe(true);
            });

            it('creates instanceof Object as well', function() {
                expect(object instanceof Object).toBe(true);
            });

            it('can polute window object whe using without new', function() {
                var object = Foo();
                expect(object).toBeUndefined();
                expect(window.foo).toBeDefined();
            });
        });

        describe('Object.create', function() {
            var foo = {
                foo: function() {return 'bar';}
            };

            it('is a way of creating objects', function() {
                var object = Object.create(foo);
                expect(object.foo).toBeDefined();
            });

            it('allows to define enumerable value properties', function() {
                var object = Object.create({}, {
                    foo: {value: 12, enumerable: false},
                    bar: {value: 5, enumerable: true}
                });

                var fooFound = false;
                var barFound = false;
                
                for (var i in object)
                {
                    if (i === "foo")
                    {
                        fooFound = true;
                    }
                    if (i === "bar")
                    {
                        barFound = true;
                    }
                }
                
                expect(fooFound).toBe(false);
                expect(barFound).toBe(true);
            });

            it('allows to define writable value properties', function() {
                var object = Object.create({}, {
                    foo: {value: 12, writable: false},
                    bar: {value: 5, writable: true}
                });

                object.foo = 10;
                object.bar = 9;
                expect(object.foo).toBe(12);
                expect(object.bar).toBe(9);
            });

            it('allows to define configurable value properties', function() {
                var object = Object.create({}, {
                    foo: {value: 12, configurable: false},
                    bar: {value: 5, configurable: true}
                });

                expect(delete object.foo).toBe(false);
                expect(delete object.bar).toBe(true);
            });

            it('allows to define configurable getter-and-setter properties', function() {
                var object = Object.create({}, {
                    bar: {
                        configurable: false,
                        get: function() { return "bar"; },
                        set: function(value) { console.log("set: " + value)}
                    },
                    foo: {
                        configurable: true,
                        get: function() { return "foo"; },
                        set: function(value) { console.log("set: " + value)}
                    }
                });

                expect(delete object.bar).toBe(false);
                expect(delete object.foo).toBe(true);
            });
        });

        describe('returning object in construct function', function() {
            var Foo = function() {
                var _getName = function() { return 'foo' };

                return {
                    getName: _getName
                };
            };

            it('can be used without new keyword', function() {
                expect(Foo()).toEqual(jasmine.any(Object));
            });

            it('creates instanceof Object when used with new', function() {
                expect((new Foo()) instanceof Object).toBe(true);
            });

            it('does not create instanceof Foo when used with new', function() {
                expect((new Foo()) instanceof Foo).toBe(false);
            });
        });
    });

    describe('private attribute', function() {
        var attributeValue = 'First name';
        var Foo = function(param) {
            var _name = attributeValue;

            this.privilegedGetName = function() {
                return _name;
            };

            this.privilegedGetParam = function() {
                return param;
            };
        };

        Foo.prototype.publicGetName = function() {
            return _name;
        }

        var object = new Foo();

        it('can be defined using var keyword inside construct funciton', function() {
            expect(object._name).toBeUndefined();
        });

        it('can be accessed through privileged method defined inside construct function', function() {
            expect(object.privilegedGetName()).toBe(attributeValue);
        });

        it('can not be accessed through public method defined outside construct function', function() {
            expect(object.publicGetName).toThrow();
        });

        it('is also construct function attribute', function() {
            expect(object.privilegedGetParam());
        });
    });

    describe('protected attribute', function() {
        it('does not exist', function() {
            expect(true).toBe(true);
        });
    });

    describe('static attribute', function() {
        var Foo = function() {};

        var staticAttributeValue = 5;

        beforeEach(function() {
            Foo.staticAttribute = staticAttributeValue;
        });

        it('can be accessed through Foo.staticAttribute', function() {
            expect(Foo.staticAttribute).toBe(staticAttributeValue);
        });

        it('can not be accessed through object.staticAttribute', function() {
            var object = new Foo();
            expect(object.staticAttribute).toBeUndefined();
        });

        it('can be accessed from object using object.constructor.staticAttribute', function() {
            var object = new Foo();
            expect(object.constructor.staticAttribute).toBe(staticAttributeValue);
        });

        it('can be changed by anybody - see module patern for better solution', function() {
            Foo.staticAttribute = 12;
            expect(Foo.staticAttribute).not.toEqual(staticAttributeValue);
        });
    });

    describe('function is an object as well !', function(){
        it('using new operator to create a function', function(){
            var iAmAFunctionToo = new Function('foo', 'return 13;'); // I still don't know how to pass args like that

            expect(typeof iAmAFunctionToo).toBe("function"); // what ? I used new. Another quirk.
            expect(iAmAFunctionToo()).toEqual(13);
        });
    });
});
