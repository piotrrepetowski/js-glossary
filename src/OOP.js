var WrongObject = function()
{
    var _getName = function()
    {
        return 'WrongObject';
    };

    return {
        getName: _getName
    };
};

var RightObject = function()
{
    this.getName = function()
    {
        return 'RightObject';
    };
};
