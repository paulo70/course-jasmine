describe('test for toThrow', function(){
	it('should show toThrow', function(){

		function multiply(){
			number * 2;
		}

		function sum(x,y){
			return x + y;
		}

		expect(multiply).toThrow();
		expect(sum).not.toThrow();
	})
});