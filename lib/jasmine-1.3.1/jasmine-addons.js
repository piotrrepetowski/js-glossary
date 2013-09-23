/**
 * Data Provider pattern.
 *
 */
function using(name, values, func)
{
    var i;
    var count;
    for (i = 0, count = values.length; i < count; i++)
    {
        if (Object.prototype.toString.call(values[i]) !== '[object Array]')
        {
            values[i] = [values[i]];
        }

        func.apply(this, values[i]);
        jasmine.currentEnv_.currentSpec.description += ' (with "' + name + '" using ' + values[i].join(', ') + ')';
    }
};

/**
 *  Custom matchers section
 *  
  * calling beforeEach with any describe() scoping applies globally.
 **/
beforeEach(function() {

  var matchers = {
    /**
     * @param (array) expected
     * @param (bool) strict Default to true.
     *
    **/
    toBeOneOf: function(expected, strict) {
      var result = false;
      var errorMessage = '';
      var strict = typeof strict !== "undefined" ? strict : true;

      for (var i = 0, l = expected.length; i < l; i++) {
        if ((strict && this.actual === expected[i]) || (!strict && this.actual == expected[i])) {
          result = true;
          break;
        }
      }
      
      this.message = function() {
        return "Expected " + this.actual + " (" + typeof this.actual + ")" + " to be one of " + expected.toString() + " using " + (strict ? "strict" : "loose") + " comparison";
      };

      return result;
    }
  }

  this.addMatchers(matchers);
});
