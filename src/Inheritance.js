function User(name) {
    var _name = name;
    User.prototype.population++;

    this.getName = function() {
        return _name;
    };
};

User.prototype.population = 0;

User.prototype.getPopulation = function() {
    return User.prototype.population;
};

User.prototype.genocide = function() {
    User.prototype.population = 0;
};

function Admin(name, rights) {
    this.prototype.constructor.call(this, name);
    
    var _rights = rights;
    
    this.getRights = function() {
        return _rights;
    };
};

Admin.prototype = User;
