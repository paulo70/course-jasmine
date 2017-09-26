describe('test for toBeGreaterThan', function(){
	it('should show toBeGreaterThan', function(){

		let PI = 3.1415;

		expect(4).toBeGreaterThan(PI);
		expect('5').toBeGreaterThan(PI);

		expect(3).not.toBeGreaterThan(PI);
	})
});