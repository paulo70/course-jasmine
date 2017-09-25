describe('teste of match', function(){
	it('validate use of match', function(){
		const text = 'test Jasmine';

		expect(text).toMatch('Jasmine');
		expect(text).toMatch(/jasmine/i);
		expect('01307-000').toMatch(/^\d{5}-\d{3}$/);
	});
});