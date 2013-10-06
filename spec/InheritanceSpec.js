describe('Admin extends User and', function() {
    
    beforeEach(function() {
        User.prototype.genocide();
    });
    
    it('works for regular methods', function() {
        var user = new User('Sebastian');
        var admin = new Admin('Sebastian++', 'rwx');
        
        expect(user.getName).toBeDefined();
        expect(admin.getName).toBeDefined();
        
        expect(user.getName()).toEqual('Sebastian');
        expect(admin.getName()).toEqual('Sebastian++');
        
        expect(user.getRights).not.toBeDefined();
        expect(admin.getRights).toBeDefined();
        
        expect(admin.getRights()).toEqual('rwx');
    });
    
    it('works for static methods, but not with instances', function() {
        var user = new User('Sebastian');
        
        expect(user.getPopulation()).toEqual(1);
        
        var admin = new Admin('Sebastian++');
        
        expect(admin.getPopulation).not.toBeDefined();
        expect(admin.prototype.getPopulation).toBeDefined();

        expect(admin.prototype.getPopulation()).toEqual(2);
        expect(user.getPopulation()).toEqual(2);
    });
});