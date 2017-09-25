describe('validate use toEqual', function(){
   it('should toBe equal true', function(){
   	let obj1 = {value: true};
    let obj2 = {value: true}; 

   	expect(true).toEqual(true);
   	expect(obj1).toEqual(obj2);
   });
});