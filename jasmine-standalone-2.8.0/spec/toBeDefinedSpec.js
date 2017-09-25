describe('tests toBeDefined', function(){
	it('should show the use toBeDefined', function(){
		let number = 10;
		let n1;
		let n3 = undefined;

		expect(number).toBeDefined();
		expect(null).toBeDefined();
		expect(NaN).toBeDefined();

		expect(n1).not.toBeDefined();
		expect(n3).not.toBeDefined();
	});
});