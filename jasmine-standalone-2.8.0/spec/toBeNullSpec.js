describe('tests for toBeNull', function(){
	it('should show use toBeNull', function(){

	let n1 = null;
	let n2 = undefined;
	let n3;
	let n4 = NaN;
	let n5 = 'test';

	expect(n1).toBeNull();

	expect(n2).not.toBeNull();
	expect(n3).not.toBeNull();
	expect(n4).not.toBeNull();
	expect(n5).not.toBeNull();	

	});
});