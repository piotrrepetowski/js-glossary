describe('label', function() {
    var _array;

    beforeEach(function() {
        _array = [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12]
        ];
    });

    it('allows to break outer loop from inner one', function() {
        var itemsIterated = 0;
        var i;
        var j;
        outerloop:
        for (i = 0; i < _array.length; i++)
        {
            for (j = 0; j < _array[i].length; j++)
            {
                itemsIterated++;
                if (_array[i][j] === 5)
                {
                    break outerloop;
                }
            }
        }

        expect(itemsIterated).toBe(5);
    });

    it('allows to continue outer loop from inner one', function() {
        var itemsIterated = 0;
        var i;
        var j;
        outerloop:
        for (i = 0; i < _array.length; i++)
        {
            for (j = 0; j < _array[i].length; j++)
            {
                itemsIterated++;
                if (_array[i][j] === 5)
                {
                    continue outerloop;
                }
            }
        }

        expect(itemsIterated).toBe(9);
    });

    it('allows to leave any block', function() {
        var modifiedFromBlock = false;
        block: {
            break block;
            modifiedFromBlock = true;
        }
        expect(modifiedFromBlock).toBe(false);
    });
});
