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
            var Foo = function() {
                this.foo = function() {return 'bar';};
            };

            it('is a way of creating objects', function() {
                var object = Object.create(Object.prototype, {
                    foo: function() { return 'bar'; }
                });
                expect(object.foo).toBeDefined();
            })
        });

        describe('returning object in construct function', function() {
            var Foo = function() {
                var _getName = function() { return 'foo' };

                return {
                    getName: _getName
                };
            };

            it('can be used withoud new keyword', function() {
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
});
