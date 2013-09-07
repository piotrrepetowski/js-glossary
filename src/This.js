var attribute = undefined;

function globalFunctionSetter(value)
{
    this.attribute = value;
}

var AnObject = function()
{
    this.attribute = undefined;

    this.setAttribute = function (value)
    {
        this.attribute = value;
    };

    this.getThis = function()
    {
        return this;
    };
};

