function SafeFoo()
{
    if (arguments.length > 0)
        throw new Error("I do not expect any arguments !");
};