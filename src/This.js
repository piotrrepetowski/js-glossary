var attribute = undefined;

function globalFunctionSetter(value)
{
    this.attribute = value;
}

var AnObject = function()
{
    this.attribute = undefined;

    this.setAttribute = function(value)
    {
        this.attribute = value;
    };

    this.getThis = function()
    {
        return this;
    };

    this.getThisFromWrongClosure = function()
    {
        var closure = function() {
            return this;
        }

        return closure();
    };

    this.getThisFromRightClosure = function()
    {
        var self = this;
        var closure = function() {
            return self;
        }

        return closure();
    };
};

