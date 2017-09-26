describe('test to ThrowError', function(){
	it('should show toThrowWError', function(){

		let sum = function(x,y){
			if( x <= 0 || y <= 0 ){
				throw new TypeError('should de greaterthan 0')
			}

			return x + y;
		}

		expect(function(){ sum(0,0) }).toThrowError();

		expect(function(){ sum(0,0) }).toThrowError('should de greaterthan 0');

		expect(function(){ sum(0,0) }).toThrowError(/greaterthan 0/);

		expect(function(){ sum(0,0) }).toThrowError(TypeError);

		expect(function(){ sum(0,0) }).toThrowError(TypeError, 'should de greaterthan 0');

		expect(function(){ sum(1,1) }).not.toThrowError()

	});
});