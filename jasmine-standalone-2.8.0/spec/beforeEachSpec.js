describe('test for beforeEach', function(){
	it('should show beforeEach', function(){
		let counter = 0;

		beforeEach(function(){
			counter++;
		});

		it('should plus one', function(){
			expect(counter.toEqual(1));
		});

		it('should plus two', function(){
			expect(counter.toEqual(2));
		});

	});
});