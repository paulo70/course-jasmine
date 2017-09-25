describe('Compare toBe', function(){
	it('should validate the use of toBe', function(){
        let obj1 = {value: true};
        let obj2 = {value: true};

		expect(true).toBe(true);
		expect('teste').toBe('teste');
		expect(obj1).not.toBe(obj2);
	});
});