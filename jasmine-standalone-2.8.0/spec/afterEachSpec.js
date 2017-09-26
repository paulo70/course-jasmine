describe('test for afterEach', function(){

	let counter = 0;

	beforeEach(function(){
		counter++
	});

	afterEach(function(){
		counter = 0;
	});

	it('should to be one', function(){
      expect(counter).toEqual(1);
	});

	it('should to be one', function(){
      expect(counter).toEqual(1);
	});
})