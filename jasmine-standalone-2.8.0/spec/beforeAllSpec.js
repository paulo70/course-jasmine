describe('test for beforeAll', function() {
    let counter = 0;

    beforeAll(function() {
        counter = 10;
    });

    beforeEach(function() {
        counter++;
    });

    it('should counter equal 11', function(){
    	expect(counter).toEqual(11);	
    }); 

    it('should counter equal 12', function(){
       expect(counter).toEqual(12);	
    });
});