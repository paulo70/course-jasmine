describe('test for nestedSuite', function() {
    let counterExtern = 0;

    beforeEach(function() {			
        counterExtern++;
    });

    it('should counter equal 1', function() {
        expect(counterExtern).toEqual(1);
    });

    describe('test for internal suite', function() {
        let counterInternal = 0;

        beforeEach(function() {
            counterInternal++;
        });

        it('should validate counters', function() {
            expect(counterInternal).toEqual(1);
            expect(counterExtern).toEqual(2);
        });
    });
});