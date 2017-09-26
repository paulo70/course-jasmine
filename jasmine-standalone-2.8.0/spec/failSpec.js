describe('tests for fail', function() {
    it('should show use fail', function() {

        let fn = function(execute, call) {
            if (execute) {
                call();
            }
        }

        fn(false, function() {
            fail('no should run call function')
        });

    });
});