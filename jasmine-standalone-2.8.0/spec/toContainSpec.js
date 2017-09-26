describe('test for toContain', function() {
    it('should show use toContain', function() {
        let text = 'hello motherfuckers';
        let bands = ['fugazi', 'minor threath', 'slayer']

        expect(text).toContain('hello');
        expect(text).toContain('motherfuckers');

        expect(bands).toContain('fugazi');
        expect(bands).not.toContain('Fugazi');
    })
});