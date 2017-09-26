describe('test for toBeLessThan', function() {
    it('should show toBeLessThan', function() {

        let PI = 3.1415;

        expect(3).toBeLessThan(PI);
        expect(3.5).not.toBeLessThan(PI);
    });
});