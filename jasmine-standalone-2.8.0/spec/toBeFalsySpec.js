describe('tests for use toBeFalsySpec', function() {
    it('should show toBeFalsy', function() {

        expect(null).toBeFalsy();
        expect(undefined).toBeFalsy();
        expect('').toBeFalsy();
        expect(NaN).toBeFalsy();
        expect(0).toBeFalsy();

        expect(true).toBeTruthy();

    });
});